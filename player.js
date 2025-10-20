// player.js — MJ+ Core (Home + Live + Player + Setlist + Back-Logic [+ optional Search])

(() => {
  const MJ = (window.MJPLUS = window.MJPLUS || {});
/* ---------- Magical Pastel Backdrop (behind posters) ---------- */
function mountGlowBackdrop() {
  // Styles nur einmal injizieren
  if (document.getElementById('mjGlowStyles')) return;

  const style = document.createElement('style');
  style.id = 'mjGlowStyles';
  style.textContent = `
  /* Basiston */
  body { background:#050508; }

  /* Farbwolken – zarter, mit weichem Sway (Parallax) */
  body::before{
    content:"";
    position:fixed; inset:0;
    z-index:-1; pointer-events:none;
    background:
      radial-gradient(40vmax 40vmax at 12% 18%, rgba(255,210,255,.42), transparent 60%),
      radial-gradient(45vmax 45vmax at 82% 28%, rgba(210,255,255,.42), transparent 60%),
      radial-gradient(36vmax 36vmax at 52% 84%, rgba(255,255,210,.42), transparent 60%),
      #050508;
    background-repeat:no-repeat;
    background-size:100% 100%,100% 100%,100% 100%,cover;

    /* zarter, aber lebendiger Look */
    filter: blur(40px) saturate(140%) brightness(112%);
    opacity:.9;
    mix-blend-mode: screen;

    /* langsamere Hue-Rotation + sanftes Schwingen */
    animation:
      mjHue 32s linear infinite,
      mjSway 18s ease-in-out infinite alternate;
    will-change: transform, filter, opacity, background-position;
    transform: translate3d(0,0,0) scale(1);
  }

  /* Licht-Schleier – sanftes, unregelmäßiges Dimmen (kerzenmäßig) */
  body::after{
    content:"";
    position:fixed; inset:0;
    z-index:-1; pointer-events:none;

    /* sehr weiche, breite Luminanz-Glocke */
    background:
      radial-gradient(120vmax 120vmax at 50% 60%, rgba(255,255,255,.07), transparent 60%);
    filter: blur(50px) brightness(105%);
    mix-blend-mode: screen;

    /* unregelmäßiges Dimmen + leicht gegenläufiges Schwingen */
    animation:
      mjDim 9s ease-in-out infinite,
      mjSway 22s ease-in-out infinite alternate reverse;
    opacity:.22;
    will-change: opacity, filter, transform;
    transform: translate3d(0,0,0) scale(1);
  }

  /* Farbwechsel (bleibt smooth) */
  @keyframes mjHue {
    from { filter: blur(40px) saturate(140%) brightness(112%) hue-rotate(0deg); }
    to   { filter: blur(40px) saturate(140%) brightness(112%) hue-rotate(360deg); }
  }

  /* Sanftes „Schwingen“/Parallax – kein hartes Hin/Her */
  @keyframes mjSway {
    0%   { transform: translate3d(-1.0%,  0.4%, 0) scale(1.00); }
    25%  { transform: translate3d( 0.6%, -0.6%, 0) scale(1.02); }
    50%  { transform: translate3d( 1.0%,  0.8%, 0) scale(1.03); }
    75%  { transform: translate3d(-0.4%,  0.2%, 0) scale(1.01); }
    100% { transform: translate3d(-1.0%, -0.5%, 0) scale(0.99); }
  }

  /* „Kerzen“-Dimmen: glatte, unregelmäßige Helligkeitskurve (kein Flackern) */
  @keyframes mjDim {
    0%   { opacity:.20; filter: brightness(1.00); }
    17%  { opacity:.26; filter: brightness(1.04); }
    33%  { opacity:.18; filter: brightness(0.98); }
    47%  { opacity:.28; filter: brightness(1.06); }
    61%  { opacity:.19; filter: brightness(0.99); }
    78%  { opacity:.25; filter: brightness(1.03); }
    100% { opacity:.21; filter: brightness(1.00); }
  }
`;
  document.head.appendChild(style);
}

  /* ---------- Continue Watching (Resume) ---------- */
  const CW_KEY = 'mjplus_cw_v17';
  const loadCW  = () => { try { return JSON.parse(localStorage.getItem(CW_KEY) || '[]'); } catch { return []; } };
  const saveCW  = (list) => localStorage.setItem(CW_KEY, JSON.stringify(list));
  const upsertCW = (entry) => {
    const list = loadCW().filter(x => x.id !== entry.id);
    if (entry.d && entry.t/entry.d >= .95) { saveCW(list); return; }
    const clean = {
      id: entry.id, title: entry.title, poster: entry.poster,
      source: entry.source || '', mp4: entry.mp4 || '',
      t: Math.max(0, entry.t|0), d: Math.max(0, entry.d|0),
      recKey: entry.recKey || null, verKey: entry.verKey || null
    };
    list.unshift(clean); saveCW(list.slice(0,40));
  };
  MJ.getResumeTime = (id) => { const e = loadCW().find(x => x.id === id); return e ? e.t : 0; };
  const resumeFrac = (id) => { const e = loadCW().find(x => x.id === id); return (e && e.d>0)? Math.min(1,e.t/e.d):0; };

  /* ---------- Overlay / Player / Setlist ---------- */
  let overlay, videoEl, closeXBtn;
  let setlistModal, setlistCols, setlistHeaderImg, setlistHeaderTitle;
  let currentItem = null, hls = null, saveTimer = null, lastSetlistItem = null;

  function ensureOverlay(){
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.id = 'playerOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#000;z-index:100;display:none;align-items:center;justify-content:center';

    closeXBtn = document.createElement('button');
    closeXBtn.id = 'playerCloseX';
    closeXBtn.type = 'button';
    closeXBtn.textContent = '×';
    // kleiner & dezenter
    closeXBtn.style.cssText = `
      position:absolute;top:10px;right:12px;z-index:101;
      width:28px;height:28px;border-radius:8px;border:1px solid #ffffff33;
      background:#00000066;color:#fff;font-size:20px;line-height:26px;font-weight:900;
      cursor:pointer;opacity:.4;transition:opacity .2s, transform .2s, background .2s, border-color .2s
    `;
    closeXBtn.addEventListener('mouseenter', ()=>{ closeXBtn.style.opacity='0.9'; closeXBtn.style.background='#00000099'; closeXBtn.style.borderColor='#ffffff55'; });
    closeXBtn.addEventListener('mouseleave', ()=>{ closeXBtn.style.opacity='0.4'; closeXBtn.style.background='#00000066'; closeXBtn.style.borderColor='#ffffff33'; });
    closeXBtn.addEventListener('focus',     ()=>{ closeXBtn.style.opacity='0.9'; });
    closeXBtn.addEventListener('blur',      ()=>{ closeXBtn.style.opacity='0.4'; });
    // beim Schließen des Videos: Setlist wieder zeigen, falls man daher kam
    closeXBtn.addEventListener('click', () => {
      const cameFromSet = NavStack.cameFromSetlist;
      const toShow = lastSetlistItem;
      stopPlayback();
      if (cameFromSet && toShow) {
        showSetlist(toShow);
        NavStack.markSetlist(true);
      }
      // sonst: nur Player schließen; auf aktueller Seite bleiben
    });
    overlay.appendChild(closeXBtn);

    videoEl = document.createElement('video');
    videoEl.id = 'videoEl';
    videoEl.setAttribute('controls','');
    videoEl.setAttribute('preload','metadata');
    videoEl.setAttribute('playsinline','');
    videoEl.style.cssText = 'width:min(100vw, 100vh * 16/9);max-height:100vh;background:#000;outline:none;border:none';
    overlay.appendChild(videoEl);

    document.body.appendChild(overlay);

    // SETLIST MODAL
    setlistModal = document.createElement('div');
    setlistModal.id = 'setlistModal';
    setlistModal.style.cssText = `
  position: fixed;
  inset: 0;
  display: none;
  z-index: 120;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.55);
  backdrop-filter: blur(3px);
`;

    // außerhalb klicken: NUR schließen (kein goOrigin -> kein Neu-Mischen/Neu-Laden)
    setlistModal.addEventListener('mousedown', (e)=>{
      if (!e.target.closest('.setlist-card')) { hideSetlist(); }
    }, true);
    setlistModal.addEventListener('touchstart', (e)=>{
      if (!e.target.closest('.setlist-card')) { hideSetlist(); }
    }, {passive:true});

    const card = document.createElement('div');
    card.className = 'setlist-card';
   card.style.cssText = `
  display: flex;
  flex-direction: column;
  max-width: 880px;
  width: 100%;
  max-height: 80vh;

  /* leicht transparenter Glaslook */
  background: rgba(17, 17, 17, 0.85);   /* 0.85 = 85 % Deckkraft */
  backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  box-sizing: border-box;
`;

    const header = document.createElement('div');
    header.className = 'setlist-header';
    header.style.cssText='display:flex;align-items:center;gap:12px;padding:10px 12px;border-bottom:1px solid #ffffff14';
    setlistHeaderImg = document.createElement('img');
    setlistHeaderImg.alt = '';
    setlistHeaderImg.style.cssText='height:56px;width:auto;border-radius:10px;object-fit:cover;box-shadow:0 2px 6px #000a';
    const headerTextWrap = document.createElement('div');
    headerTextWrap.style.cssText='display:flex;flex-direction:column;gap:2px;min-width:0';
    setlistHeaderTitle = document.createElement('div');
    setlistHeaderTitle.id='setlistTitle';
    setlistHeaderTitle.style.cssText='font-weight:800;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
    const headerSub = document.createElement('div');
    headerSub.textContent = 'Choose a chapter';
    headerSub.style.cssText='opacity:.7;font-size:12px';
    headerTextWrap.appendChild(setlistHeaderTitle);
    headerTextWrap.appendChild(headerSub);
    header.appendChild(setlistHeaderImg);
    header.appendChild(headerTextWrap);
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'setlist-body';
    body.style.cssText='padding:8px 10px;overflow:auto;flex:1;display:grid;grid-template-columns:1fr 1fr;gap:6px 24px';
    const col1 = document.createElement('div'), col2 = document.createElement('div');
    col1.id='setlistCol1'; col2.id='setlistCol2';
    col1.className='setlist-col'; col2.className='setlist-col';
    col1.style.cssText='display:flex;flex-direction:column;gap:4px;';
    col2.style.cssText='display:flex;flex-direction:column;gap:4px;';
    body.appendChild(col1); body.appendChild(col2);
    card.appendChild(body);
    setlistModal.appendChild(card);
    document.body.appendChild(setlistModal);
    setlistCols = [col1, col2];

    // DPAD/Keyboard in der Setlist
    setlistModal.addEventListener('keydown', (e)=>{
      if (!isSetlistOpen()) return;
      if (e.key==='Escape'){ e.preventDefault(); hideSetlist(); return; } // kein goOrigin
      if (['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); document.activeElement?.click?.(); return; }

      const cur = document.activeElement;
      if (!cur || !cur.classList.contains('setlist-item')) return;
      const row = Number(cur.dataset.row||0), col = Number(cur.dataset.col||0);

      if (e.key==='ArrowDown'){ e.preventDefault();
        const inCol = Array.from(setlistCols[col].querySelectorAll('.setlist-item'));
        (inCol[row+1] || inCol[inCol.length-1])?.focus(); return;
      }
      if (e.key==='ArrowUp'){ e.preventDefault();
        const inCol = Array.from(setlistCols[col].querySelectorAll('.setlist-item'));
        (inCol[Math.max(0,row-1)] || inCol[0])?.focus(); return;
      }
      if (e.key==='ArrowRight'){ e.preventDefault();
        const otherCol = col===0?1:0;
        const inOther = Array.from(setlistCols[otherCol].querySelectorAll('.setlist-item'));
        (inOther[row] || inOther[inOther.length-1])?.focus(); return;
      }
      if (e.key==='ArrowLeft'){ e.preventDefault();
        const otherCol = col===0?1:0;
        const inOther = Array.from(setlistCols[otherCol].querySelectorAll('.setlist-item'));
        (inOther[row] || inOther[inOther.length-1])?.focus(); return;
      }
    }, true);
  }

  function isPlayerOpen(){ return overlay && overlay.style.display==='flex'; }
  function isSetlistOpen(){ return setlistModal && setlistModal.style.display==='flex'; }
  function openOverlay(){ ensureOverlay(); overlay.style.display='flex'; videoEl.focus(); document.body.style.overflow='hidden'; }
  function closeOverlay(){ if(!overlay) return; overlay.style.display='none'; document.body.style.overflow=''; }

  /* ---------- Varianten / Bundle-Helpers ---------- */
  function hasVariants(item){
    if (!item) return false;
    if (Array.isArray(item.versions)) return item.versions.length >= 2;
    if (item.variants && (item.variants.original || item.variants.enhanced)) return true;
    return false;
  }
  function isBundle(item){
    return !!(item && Array.isArray(item.recordings) && item.recordings.length);
  }
  function getDefaultRecKey(item){
    if (!isBundle(item)) return null;
    return item.defaultRecording || item.recordings[0].key;
  }
  function getDefaultVerKey(rec, preferred){
    if (!rec || !Array.isArray(rec.versions) || !rec.versions.length) return null;
    return preferred || rec.defaultVersion || rec.versions[0]?.key || 'original';
  }

  function resolveVariant(item, currentKey){
    if (Array.isArray(item.versions) && item.versions.length){
      let key = currentKey || item.defaultVersion || item.versions[0]?.key || 'original';
      let v = item.versions.find(x => x.key === key) || item.versions[0];
      const playable = {
        id: item.id,
        title: item.title + (v?.label ? ` — ${v.label}` : ''),
        poster:item.poster,
        type:  v?.type || item.type || 'hls',
        source:v?.source || item.source || '',
        mp4:   v?.mp4    || item.mp4    || '',
        chapters: item.chapters || v?.chapters || []
      };
      playable.__meta = { verKey: key };
      return playable;
    }
    if (item.variants && (item.variants.original || item.variants.enhanced)){
      const key = currentKey || (item.variants.original ? 'original' : 'enhanced');
      const v = item.variants[key] || item.variants.original || item.variants.enhanced || {};
      const playable = {
        id: item.id,
        title: item.title + (key ? ` — ${key[0].toUpperCase()+key.slice(1)}` : ''),
        poster:item.poster,
        type:  v.type || item.type || 'hls',
        source:v.source || item.source || '',
        mp4:   v.mp4    || item.mp4    || '',
        chapters: item.chapters || v.chapters || []
      };
      playable.__meta = { verKey: key };
      return playable;
    }
    return {
      id: item.id,
      title: item.title,
      poster:item.poster,
      type:  item.type || 'hls',
      source:item.source || '',
      mp4:   item.mp4 || '',
      chapters: item.chapters || []
    };
  }

  function resolveBundle(item, recKey, verKey){
    const rec = (item.recordings||[]).find(r=>r.key===recKey) || item.recordings?.[0];
    const v   = rec?.versions?.find(x=>x.key===verKey) || rec?.versions?.[0];
    const playable = {
      id: item.id,
      title: item.title + (rec?.label ? ` — ${rec.label}` : '') + (v?.label ? ` — ${v.label}` : ''),
      poster: item.poster,
      type: v?.type || 'mp4',
      source: v?.source || '',
      mp4: v?.mp4 || '',
      chapters: rec?.chapters || []
    };
    playable.__meta = { recKey: rec?.key || null, verKey: v?.key || null };
    return playable;
  }

  /* ---------- Setlist anzeigen ---------- */
  function showSetlist(item){
    ensureOverlay();
    lastSetlistItem = item; // zuletzt geöffnete Setlist merken
    setlistHeaderImg.src = item.poster || '';
    setlistHeaderTitle.textContent = item.title || 'Setlist';
    setlistCols[0].innerHTML=''; setlistCols[1].innerHTML='';

    const oldSwitch = document.getElementById('variantSwitch');
    if (oldSwitch && oldSwitch.parentNode) oldSwitch.parentNode.removeChild(oldSwitch);
    const oldRec = document.getElementById('recordingSwitch');
    if (oldRec && oldRec.parentNode) oldRec.parentNode.removeChild(oldRec);

    const header = setlistModal.querySelector('.setlist-header') || document.querySelector('.setlist-header');

    let currentRecording = isBundle(item) ? getDefaultRecKey(item) : null;
    let currentVariant = null;

    if (isBundle(item) && header){
      const recWrap = document.createElement('div');
      recWrap.id = 'recordingSwitch';
      recWrap.style.cssText = 'margin-left:auto;display:flex;gap:8px;flex-wrap:wrap;';
      (item.recordings||[]).forEach(r=>{
        const btn = document.createElement('button');
        btn.type='button';
        btn.textContent = r.label || r.key;
        btn.style.cssText = `
          background:${currentRecording===r.key ? '#222' : '#000'};
          color:#fff;border:${currentRecording===r.key ? '1px solid #666' : '1px solid #444'};
          padding:6px 10px;border-radius:10px;font-weight:700;letter-spacing:.02em;cursor:pointer;
        `;
        btn.onclick = ()=>{
          if (currentRecording!==r.key){
            currentRecording = r.key;
            currentVariant = getDefaultVerKey(r, item.defaultVersion);
            renderChaptersAndVariant();
            Array.from(recWrap.children).forEach(b=>{
              b.style.background = (b.textContent===(r.label||r.key)) ? '#222' : '#000';
              b.style.borderColor = (b.textContent===(r.label||r.key)) ? '#666' : '#444';
            });
          }
        };
        recWrap.appendChild(btn);
      });
      header.appendChild(recWrap);
    }

    function mountVariantSwitch(){
  const old = document.getElementById('variantSwitch');
  if (old && old.parentNode) old.parentNode.removeChild(old);
  if (!header) return;

  let variants = [];
  let unionKeys = [];

  if (isBundle(item)){
    // Alle Version-Keys über alle Recordings sammeln (z.B. ["original","enhanced"])
    const allKeys = new Set();
    (item.recordings || []).forEach(r => (r.versions || []).forEach(v => v?.key && allKeys.add(v.key)));
    unionKeys = Array.from(allKeys);

    // Für Anzeige Labels aus irgendeinem Recording nehmen (Fallback auf Key)
    variants = unionKeys.map(k => {
      const anyV = (item.recordings || [])
        .flatMap(r => r.versions || [])
        .find(v => v.key === k);
      return { key: k, label: anyV?.label || (k[0].toUpperCase()+k.slice(1)) };
    });

    // Default-Variante, falls noch nicht gesetzt
    if (!currentVariant){
      // bevorzuge item's defaultVersion, sonst "original", sonst 1. vorhanden
      const pref = item.defaultVersion && unionKeys.includes(item.defaultVersion) ? item.defaultVersion : null;
      currentVariant = pref || (unionKeys.includes('original') ? 'original' : unionKeys[0] || null);
    }
  } else if (Array.isArray(item.versions)) {
    variants = item.versions;
    if (!currentVariant) currentVariant = item.defaultVersion || variants[0]?.key || 'original';
  } else if (item.variants) {
    variants = [
      item.variants.original && {key:'original',label:'Original',...item.variants.original},
      item.variants.enhanced && {key:'enhanced',label:'Enhanced',...item.variants.enhanced}
    ].filter(Boolean);
    if (!currentVariant) currentVariant = item.variants.original ? 'original' : (item.variants.enhanced ? 'enhanced' : null);
  }

  if (!variants || !variants.length) return;

  const wrap = document.createElement('div');
  wrap.id='variantSwitch';
  wrap.style.cssText='margin-left:12px;display:flex;gap:8px;flex-wrap:wrap;';

  variants.forEach(v=>{
    const btn = document.createElement('button');
    btn.type='button';
    btn.textContent = v.label || v.key;

    // --- Bundle: prüfen, ob die aktuelle Aufnahme (currentRecording) diese Variante hat ---
    let disabledForThisRecording = false;
    if (isBundle(item)){
      const rec = (item.recordings||[]).find(r=>r.key===currentRecording) || item.recordings?.[0];
      const hasKey = (rec?.versions || []).some(x => x.key === v.key);
      disabledForThisRecording = !hasKey;
    }

    const active = currentVariant===v.key;
    btn.style.cssText = `
      background:${active ? '#e50914' : '#000'};
      color:${disabledForThisRecording ? '#999' : '#fff'};
      border:${active ? '1px solid #e50914' : '1px solid #444'};
      padding:6px 10px;border-radius:10px;font-weight:800;letter-spacing:.03em;
      ${disabledForThisRecording ? 'opacity:.4;cursor:not-allowed;pointer-events:none;' : 'cursor:pointer;'}
    `;

    if (!disabledForThisRecording){
      btn.onclick = ()=>{
        if (currentVariant!==v.key){
          currentVariant = v.key;
          renderChaptersAndVariant();
          Array.from(wrap.children).forEach(b=>{
            const isActive = (b.textContent===(v.label||v.key));
            b.style.background = isActive ? '#e50914' : '#000';
            b.style.borderColor = isActive ? '#e50914' : '#444';
          });
        }
      };
    }

    wrap.appendChild(btn);
  });

  header.appendChild(wrap);
}
    function renderChaptersAndVariant(){
      setlistCols[0].innerHTML=''; setlistCols[1].innerHTML='';

      let use = isBundle(item)
        ? resolveBundle(item, currentRecording, currentVariant)
        : resolveVariant(item, currentVariant);

      const arr = (use.chapters||[]).slice();
      const idxPA = arr.findIndex(c => (c.label||'').toUpperCase()==='PLAY ALL');
      if(idxPA>0){ const pa=arr.splice(idxPA,1)[0]; arr.unshift(pa); }

      const half = Math.ceil(arr.length/2);
      const left = arr.slice(0,half);
      const right = arr.slice(half);

      const renderCol = (list, colIndex, target) => {
        list.forEach((ch, i) => {
          const isDivider = /^-{2,}/.test(ch.label.trim()) || /-{2,}$/.test(ch.label.trim());

          const el = document.createElement(isDivider ? 'div' : 'button');
          el.className = 'setlist-item';
          el.textContent = ch.label;
          el.dataset.col = String(colIndex);
          el.dataset.row = String(i);

          if (isDivider) {
            // visuelle Hervorhebung für Trenner wie "--- Tape #4 ---"
            el.style.cssText = `
              text-align:center;
              font-weight:900;
              letter-spacing:.06em;
              color:#888;
              opacity:0.8;
              margin:8px 0 4px;
              border-top:1px solid #555;
              padding-top:6px;
              pointer-events:none;
              user-select:none;
            `;
          } else {
            // klickbare Kapitel
            el.type = 'button';
            el.style.cssText = `
              background:transparent;border:none;color:#fff;cursor:pointer;
              font-size:13px;line-height:1.15em;text-transform:uppercase;
              font-weight:800;letter-spacing:.02em;text-align:left;
              padding:2px 0;transition:color .15s,text-shadow .15s,transform .15s;
            `;
            el.onmouseover = () => { el.style.color = '#e50914'; el.style.textShadow = '0 0 10px rgba(229,9,20,.55)'; };
            el.onmouseout  = () => { el.style.color = '#fff'; el.style.textShadow = ''; };
            el.onfocus     = () => { el.style.color = '#e50914'; el.style.textShadow = '0 0 10px rgba(229,9,20,.55)'; };
            el.onblur      = () => { el.style.color = '#fff'; el.style.textShadow = ''; };
            el.onclick = () => {
              // von Setlist gestartet -> merken
              NavStack.markSetlist(true);
              hideSetlist();
              const playable = isBundle(item)
                ? resolveBundle(item, currentRecording, currentVariant)
                : resolveVariant(item, currentVariant);
              const startAt = Number(ch.sec || 0);
              playItem(playable, startAt);
            };
            el.setAttribute('tabindex', '0');
          }

          target.appendChild(el);
        });
      };

      renderCol(left,0,setlistCols[0]);
      renderCol(right,1,setlistCols[1]);

      setTimeout(()=> setlistCols[0].querySelector('.setlist-item')?.focus(), 30);
    }

    mountVariantSwitch();
    renderChaptersAndVariant();
    setlistModal.style.display = 'flex';
  }
  function hideSetlist(){ if(setlistModal) setlistModal.style.display='none'; }

  /* ---------- Playback mit Safari/TV-Fallback ---------- */
  function muxMp4FromM3u8(u){
    try{
      const m = String(u||'').match(/^https:\/\/stream\.mux\.com\/([^/?.]+)\.m3u8/);
      return m ? `https://stream.mux.com/${m[1]}/medium.mp4` : '';
    }catch{ return ''; }
  }
  function cleanHls(){ if(hls){ try{hls.destroy();}catch{} hls=null; } }

  function startVideoWith(url, kind){
    videoEl.autoplay = true;
    if (kind === 'mp4'){
      cleanHls();
      videoEl.removeAttribute('src'); videoEl.load();
      videoEl.src = url;
      videoEl.addEventListener('canplay', ()=>{ try{videoEl.play().catch(()=>{});}catch{} }, {once:true});
      return;
    }
    if (kind === 'native-hls'){
      cleanHls();
      videoEl.removeAttribute('src'); videoEl.load();
      videoEl.src = url;
      videoEl.addEventListener('canplay', ()=>{ try{videoEl.play().catch(()=>{});}catch{} }, {once:true});
      return;
    }
    cleanHls();
    hls = new Hls({ enableWorker:false, overrideNative:true, capLevelToPlayerSize:true, maxBufferLength:20, maxMaxBufferLength:40, backBufferLength:60 });
    hls.loadSource(url);
    hls.attachMedia(videoEl);
    hls.on(Hls.Events.MANIFEST_PARSED, ()=> setTimeout(()=> videoEl.play().catch(()=>{}), 50));
  }

  function playItem(item, startAt=0){
    if(!item?.source && !item?.mp4){ alert('No stream assigned for this video yet.'); return; }
    currentItem = item;

    ensureOverlay();
    openOverlay();

    let fellBack = false;
    const tryFallbackToMp4 = ()=>{
      if (fellBack) return;
      const mp4Url = item.mp4 || muxMp4FromM3u8(item.source);
      if (!mp4Url){ return; }
      fellBack = true;
      startVideoWith(mp4Url, 'mp4');
      videoEl.addEventListener('loadedmetadata', ()=>{ try{ if(startAt>0) videoEl.currentTime=startAt; }catch{} }, {once:true});
    };

    const hasHlsJs = (typeof Hls!=='undefined') && Hls.isSupported();
    const hasNativeHls = videoEl.canPlayType('application/vnd.apple.mpegurl');

    if (item.source && hasHlsJs){
      startVideoWith(item.source, 'hls');
      hls.on(Hls.Events.ERROR, (_e, data)=>{ if(data?.fatal){ cleanHls(); tryFallbackToMp4(); }});
    } else if (item.source && hasNativeHls){
      startVideoWith(item.source, 'native-hls');
    } else {
      const mp4Url = item.mp4 || muxMp4FromM3u8(item.source);
      if (!mp4Url){ alert('This browser cannot play HLS and no MP4 fallback is available.'); return; }
      startVideoWith(mp4Url, 'mp4');
    }

    videoEl.addEventListener('loadedmetadata', ()=>{
      try { if (startAt>0) videoEl.currentTime = startAt; } catch {}
      try { videoEl.play().catch(()=>{});} catch {}
    }, {once:true});

    videoEl.addEventListener('error', tryFallbackToMp4, {once:true});

    if(saveTimer) clearInterval(saveTimer);
    saveTimer = setInterval(()=>{
      try{
        const t=Math.floor(videoEl.currentTime||0), d=Math.floor(videoEl.duration||0);
        if(d>0){
          upsertCW({
            id: item.id, title: item.title, poster: item.poster,
            source: item.source, mp4: item.mp4, t, d,
            recKey: item.__meta?.recKey || null,
            verKey: item.__meta?.verKey || null
          });
        }
      }catch{}
    },2000);
  }

  function stopPlayback(){
    try{videoEl.pause();}catch{} if(saveTimer){clearInterval(saveTimer);saveTimer=null;}
    try{
      if(currentItem){
        const t=Math.floor(videoEl.currentTime||0), d=Math.floor(videoEl.duration||0);
        if(d>0){
          upsertCW({
            id: currentItem.id, title: currentItem.title, poster: currentItem.poster,
            source: currentItem.source, mp4: currentItem.mp4, t, d,
            recKey: currentItem.__meta?.recKey || null,
            verKey: currentItem.__meta?.verKey || null
          });
        }
      }
    }catch{}
    cleanHls(); if(videoEl){videoEl.removeAttribute('src'); videoEl.load();}
    closeOverlay();
  }

  /* ---------- Herkunft / Back-Stack ---------- */
  const NavStack = { origin:null, cameFromSetlist:false,
    setOrigin(p){this.origin=p;}, markSetlist(v){this.cameFromSetlist=!!v;}, clear(){this.origin=null;this.cameFromSetlist=false;} };

  function goOrigin(){
    if (NavStack.origin==='live'){ location.href='live.html'; NavStack.clear(); return; }
    if (NavStack.origin==='home'){ location.href='home.html'; NavStack.clear(); return; }
    location.href='home.html'; NavStack.clear();
  }

  function backToOrigin(){
    if (isSetlistOpen()){ hideSetlist(); return; } // kein goOrigin -> kein Neu-Mischen
    if (isPlayerOpen()){
      if (currentItem && Array.isArray(currentItem.chapters) && currentItem.chapters.length){
        stopPlayback(); showSetlist(currentItem); NavStack.markSetlist(true); return;
      }
      stopPlayback(); goOrigin(); return;
    }
    const onHome = document.body?.dataset?.page==='home';
    if (onHome){
      try{ if(window.cordova && navigator?.app?.exitApp) navigator.app.exitApp(); }catch{}
    } else {
      location.href='home.html';
    }
  }

  document.addEventListener('keydown',(e)=>{
    const sm = document.getElementById('searchModal');
    if (sm && sm.style.display==='flex') return;
    if (isSetlistOpen()) return;

    if (e.key==='Escape'){ e.preventDefault(); backToOrigin(); return; }
    if (isPlayerOpen()){
      if (e.key==='ArrowRight'){ e.preventDefault(); videoEl.currentTime=Math.min((videoEl.duration||1e9),(videoEl.currentTime||0)+30); }
      if (e.key==='ArrowLeft'){  e.preventDefault(); videoEl.currentTime=Math.max(0,(videoEl.currentTime||0)-30); }
    }
  },true);

  document.addEventListener('backbutton', function (e) {
    const sm = document.getElementById('searchModal');
    if (sm && sm.style.display==='flex'){ e.preventDefault(); sm.style.display='none'; return; }
    e.preventDefault(); backToOrigin();
  }, false);

  /* ---------- Public API ---------- */
  MJ.openPoster = function (item, fromContinue = false, originPage = 'home') {
    const full = (window.catalog || []).find(x => x.id === item?.id) || item;
    NavStack.setOrigin(originPage);

    if (fromContinue) {
      const resume = loadCW().find(x => x.id === full.id) || null;
      const start = (resume?.t|0) || 0;

      if (isBundle(full)) {
        const recKey = resume?.recKey || getDefaultRecKey(full);
        const rec = (full.recordings||[]).find(r=>r.key===recKey) || full.recordings?.[0];
        const verKey = resume?.verKey || getDefaultVerKey(rec, full.defaultVersion);
        const playable = resolveBundle(full, recKey, verKey);
        if (!playable.source && !playable.mp4){
          const cleaned = loadCW().filter(x => x.id !== full.id); saveCW(cleaned);
          alert('This item needs to be re-opened from the catalog once.');
          return;
        }
        playItem(playable, start);
        return;
      }

      if (Array.isArray(full.versions) && full.versions.length){
        const verKey = resume?.verKey || full.defaultVersion || full.versions[0]?.key || 'original';
        const playable = resolveVariant(full, verKey);
        if (!playable.source && !playable.mp4){
          const cleaned = loadCW().filter(x => x.id !== full.id); saveCW(cleaned);
          alert('This item needs to be re-opened from the catalog once.');
          return;
        }
        playItem(playable, start);
        return;
      }

      const playable = resolveVariant(full, null);
      if (!playable?.source && !playable?.mp4) {
        const cleaned = loadCW().filter(x => x.id !== full.id);
        saveCW(cleaned);
        alert('This item needs to be re-opened from the catalog once.');
        return;
      }
      playItem(playable, start);
      return;
    }

    // Normaler Aufruf (nicht fromContinue): Setlist wenn Bundle oder Kapitel vorhanden
    const hasChapters =
      (Array.isArray(full.chapters) && full.chapters.length > 0) ||
      (Array.isArray(full.versions) && full.versions.some(v => Array.isArray(v.chapters) && v.chapters.length > 0));

    if (isBundle(full) || hasChapters) {
      if (isPlayerOpen()) stopPlayback();
      showSetlist(full);
      NavStack.markSetlist(true);
      lastSetlistItem = full; // merken für späteres Wiederanzeigen
    } else {
      const playable = resolveVariant(full, null);
      playItem(playable, 0);
    }
  };
  MJ.playItem = playItem;
  MJ.stopPlayback = stopPlayback;

  /* ---------- UI Helper ---------- */
  function tileEl(item, fromContinue=false){
    const b = document.createElement('button');
    b.className = 'tile';
    b.title = item.title || '';
    b.type = 'button';
    b.setAttribute('tabindex','0');
    b.dataset.id = item.id || '';

    const progress = fromContinue ? resumeFrac(item.id) : 0;
    b.innerHTML = `
      <img src="${item.poster || ''}" alt="${item.title || ''}" onerror="this.style.opacity=.2">
      ${(() => {
        const t = (item.tier || '').toString().trim().toLowerCase();
        if (!t) return '';
        const label = t === 'am' ? 'AM.' : t === 'tv' ? 'TV' : 'PRO';
        return `<span class="badge">${label}</span>`;
      })()}
      ${fromContinue ? `<div class="progress-wrap"><div class="progress" style="width:${(progress*100).toFixed(1)}%"></div></div>` : ``}
    `;
    b.addEventListener('keydown',(e)=>{ if(['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); b.click(); }});
    return b;
  }
  const shuffle = (arr)=> arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);

  /* ---------- HOME (robust) ---------- */
  MJ.initHome = function(){
    try{
      if (!window.catalog || !Array.isArray(window.catalog)) { console.error('catalog.js missing or empty'); return; }
      const grid = document.getElementById('grid');
      const continueSec = document.getElementById('continueSec');
      const continueRow = document.getElementById('continueRow');

      function renderContinue(){
        if (!continueRow || !continueSec) return;

        const list = loadCW();
        if(!list.length){ continueSec.style.display='none'; return; }
        continueSec.style.display=''; 
        continueRow.innerHTML='';

        list.forEach(e=>{
          const fromCat = (window.catalog || []).find(x=>x.id===e.id);
          const full = fromCat ? {...fromCat} : {...e};

          const b = document.createElement('button');
          b.className = 'tile';
          b.type = 'button';
          b.title = full.title || '';
          b.dataset.id = full.id || '';

          const progress = (e && e.d > 0) ? Math.min(1, e.t / e.d) : 0;
          const t = (full.tier || '').toString().trim().toLowerCase();
          const badge = t ? (t === 'am' ? 'AM.' : t === 'tv' ? 'TV' : 'PRO') : '';

          b.innerHTML = `
            <img src="${full.poster || ''}" alt="${full.title||''}" onerror="this.style.opacity=.2">
            ${badge ? `<span class="badge">${badge}</span>` : ``}
            <div class="progress-wrap"><div class="progress" style="width:${(progress*100).toFixed(1)}%"></div></div>
          `;

          b.onclick = ()=>{ MJ.openPoster({ id: full.id }, true, 'home'); };
          b.addEventListener('keyup', (ke)=>{ if(['Enter',' ','OK','Select'].includes(ke.key)) b.click(); });

          continueRow.appendChild(b);
        });
      }

      function renderAll(){
        if (!grid) return;
        grid.innerHTML='';
        const items = shuffle([...(window.catalog||[])]);
        items.forEach(item=>{
          const b=tileEl(item,false);
          b.onclick=()=> MJ.openPoster(item,false,'home');
          grid.appendChild(b);
        });
        setTimeout(()=> grid.querySelector('.tile')?.focus(),60);
      }

      renderContinue();
      renderAll();
    }catch(err){
      console.error('initHome crashed:', err);
    }
  };

  /* ---------- LIVE (robust) ---------- */
  MJ.initLive = function(){
    const grid     = document.getElementById('grid');
    const listSec  = document.getElementById('listSec');
    const toursSec = document.getElementById('toursSec');
    const h2       = listSec?.querySelector('h2');
    const buttons  = Array.from(document.querySelectorAll('.filter-btn'));

    if (!grid || !listSec || !toursSec) return;

    const specialsForced = new Set(['royalbrunei96','mjfriendsmunich99','mjfriendsseoul99','ny01pro','nysept10-01ama']);

    const isLive = (cat) => {
      if (!cat) return false;
      if (Array.isArray(cat)) return cat.some(c => String(c).toLowerCase() === 'live');
      return String(cat).toLowerCase() === 'live';
    };
    function liveItems(){
      return (window.catalog || []).filter(x => isLive(x.category));
    }
    const isTV = (tier) => String(tier || '').toLowerCase() === 'tv';

    function tile(item){
      const b = document.createElement('button');
      b.className='tile'; b.type='button'; b.title=item.title||'';
      const t = String(item.tier || '').toLowerCase();
      const badge = (t && t !== 'tv') ? (t === 'am' ? 'AM.' : 'PRO') : '';
      b.innerHTML = `
        <img src="${item.poster||''}" alt="${item.title||''}" onerror="this.style.opacity=.2">
        ${badge ? `<span class="badge">${badge}</span>` : ''}
      `;
      b.addEventListener('click', ()=> MJ.openPoster(item,false,'live'));
      b.addEventListener('keydown', (e)=>{ if(['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); b.click(); }});
      return b;
    }

    function setActive(val){
      buttons.forEach(b=> b.classList.toggle('active', b.dataset.filter===val));
    }

    function renderList(filter='all'){
      listSec.style.display = '';
      toursSec.style.display = 'none';
      grid.innerHTML = '';
      const items = liveItems().filter(i => !isTV(i.tier));
      let filtered = items;
      if (filter==='am' || filter==='pro'){
        filtered = items.filter(i => String(i.tier||'').toLowerCase()===filter);
      }
      if (h2) h2.textContent = (filter==='all')?'All':filter.toUpperCase();
      filtered.forEach(i => grid.appendChild(tile(i)));
      setTimeout(()=> grid.querySelector('.tile')?.focus(), 40);
    }

    function getYearFromTitle(t){
      if(!t) return null;
      const m4 = t.match(/(19[7-9]\d|20[0-2]\d)/);
      if (m4) return parseInt(m4[1],10);
      const m2 = t.match(/(^|[\s\-\(\)])([7-9]\d)(?!\d)/);
      if (m2){ const yy = parseInt(m2[2],10); return 1900 + yy; }
      return null;
    }
    function tourKey(item){
      if (specialsForced.has(item.id)) return 'special';
      const y = getYearFromTitle(item.title||'') ?? null;
      if (y===1979) return 'destiny';
      if (y===1981) return 'triumph';
      if (y===1984) return 'victory';
      if (y>=1987 && y<=1989) return 'bad';
      if (y===1992 || y===1993) return 'dangerous';
      if (y===1996 || y===1997) return 'history';
      return 'special';
    }
    const tourMeta = {
      early:{title:'The Early Years'},
      destiny:{title:'Destiny Tour (1979)'},
      triumph:{title:'Triumph Tour (1981)'},
      victory:{title:'Victory Tour (1984)'},
      bad:{title:'Bad Tour (1987–1989)'},
      dangerous:{title:'Dangerous Tour (1992–1993)'},
      history:{title:'HIStory Tour (1996–1997)'},
      special:{title:'Special Concerts'}
    }
const tourLogo = {
  early:     'teylogo.png',
  destiny:   'dtlogo.png',
  triumph:   'ttlogo.png',
  victory:   'vtlogo.png',
  bad:       'bwtlogo.png',
  dangerous: 'dwtlogo.png',
  history:   'hwtlogo.png',
  special:   'sclogo.png'
};

    function renderTours(){
      listSec.style.display = 'none';
      toursSec.style.display = 'block';
      toursSec.innerHTML = '';
      const groups = {destiny:[],triumph:[],victory:[],bad:[],dangerous:[],history:[],special:[]};
      liveItems().forEach(it => { if(!isTV(it.tier)) groups[tourKey(it)].push(it); });

      ['destiny','triumph','victory','bad','dangerous','history','special'].forEach(key=>{
        const arr = groups[key];
        if (!arr.length) return;
        const wrap = document.createElement('div');
wrap.className = 'tour-block';

/* --- statt Texttitel: PNG-Logo einblenden --- */
const logo = document.createElement('img');
logo.className = 'tour-logo';
/* Pfade über Mapping (siehe weiter unten 'tourLogo') */
logo.src = (tourLogo[key] || '');
logo.alt = tourMeta[key].title || key;
wrap.appendChild(logo);

/* Fallback: wenn ein Logo fehlt, blende Texttitel ein */
logo.addEventListener('error', () => {
  logo.remove();
  const h = document.createElement('h3');
  h.className = 'tour-title';
  h.textContent = tourMeta[key].title;
  wrap.prepend(h);
});

const g = document.createElement('div');
g.className = 'grid';
        arr.forEach(it => { const b = tile(it); g.appendChild(b); });
        wrap.appendChild(g);
        toursSec.appendChild(wrap);
      });
      setActive('tours');
    }

    buttons.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const f = btn.dataset.filter;
        if (f==='tours'){ renderTours(); return; }
        setActive(f);
        renderList(f);
      });
      btn.addEventListener('keydown',(e)=>{ if(['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); btn.click(); }});
    });

    renderList('all');
    // make sure the Search UI/button is mounted on Live too
    MJ.initSearchUI();
  };

  /* ---------- GLOBAL SEARCH (idempotent) ---------- */
  MJ.initSearchUI = function(){
    let modal = document.getElementById('searchModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'searchModal';
      modal.style.cssText = `
        display:none;position:fixed;inset:0;z-index:999;
        background:rgba(0,0,0,.85);flex-direction:column;align-items:center;justify-content:flex-start;
        padding:80px 20px;overflow:auto;
      `;
      modal.innerHTML = `
        <div style="width:min(600px,90vw);background:#111;padding:20px;border-radius:12px;box-shadow:0 0 20px #000a;">
          <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;">
            <input id="searchInput" type="text" placeholder="Search videos..." style="flex:1;padding:8px 12px;border-radius:8px;border:1px solid #333;background:#000;color:#fff;">
            <button id="searchGo" class="nav-btn" style="background:#e50914;border:none;padding:8px 14px;border-radius:8px;color:#fff;">Go</button>
            <button id="searchClose" style="background:#333;border:none;padding:8px 12px;border-radius:8px;color:#fff;">×</button>
          </div>
          <div id="searchGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;"></div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    if (!modal.dataset.wired){
      const input  = modal.querySelector('#searchInput');
      const goBtn  = modal.querySelector('#searchGo');
      const closeB = modal.querySelector('#searchClose');
      const grid   = modal.querySelector('#searchGrid');

      const renderResults = (q) => {
        grid.innerHTML = '';
        if (!window.catalog) return;
        const qq = (q || '').trim().toLowerCase();
        if (!qq) return;

        const results = window.catalog.filter(i => {
          const t = (i.title || '').toLowerCase();
          const tags = [i.tier, i.category].filter(Boolean).join(' ').toLowerCase();
          return t.includes(qq) || tags.includes(qq) || (i.id||'').toLowerCase().includes(qq);
        });

        results.forEach(item => {
          const b = document.createElement('button');
          b.className = 'tile';
          b.type = 'button';

          const t = (item.tier || '').toString().trim().toLowerCase();
          const badge = t ? (t === 'am' ? 'AM.' : t === 'tv' ? 'TV' : 'PRO') : '';

          b.innerHTML = `
            <img src="${item.poster}" alt="${item.title}" onerror="this.style.opacity=.2">
            ${badge ? `<span class="badge">${badge}</span>` : ``}
          `;
          b.onclick = () => { modal.style.display='none'; MJ.openPoster(item,false, document.body.dataset.page || 'home'); };
          b.addEventListener('keydown',(e)=>{ if(['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); b.click(); }});
          grid.appendChild(b);
        });
      };

      const openSearch  = () => { modal.style.display='flex'; setTimeout(()=>input?.focus(), 50); };
      const closeSearch = () => { modal.style.display='none'; if(input) input.value=''; grid.innerHTML=''; };

      goBtn?.addEventListener('click', ()=> renderResults(input.value));
      input?.addEventListener('input', ()=> renderResults(input.value));
      closeB?.addEventListener('click', closeSearch);
      modal.addEventListener('keydown', e=>{
        if(e.key==='Escape'){ e.preventDefault(); closeSearch(); }
        if(e.key==='Enter' && document.activeElement===input){ e.preventDefault(); renderResults(input.value); }
      });

      modal._openSearch  = openSearch;
      modal._closeSearch = closeSearch;
      modal._render      = renderResults;
      modal.dataset.wired = '1';
    }

    let btn = document.getElementById('openSearch');
    if (!btn){
      const nav = document.querySelector('header nav') || document.querySelector('header') || document.body;
      btn = document.createElement('button');
      btn.id = 'openSearch';
      btn.className = 'nav-btn';
      btn.textContent = 'Search';
      nav.appendChild(btn);
    }

    // => Style IMMER setzen (auch wenn der Button schon da ist)
    btn.style.background = '#e50914';
    btn.style.border = '1px solid #e50914';
    btn.style.color = '#fff';
    btn.style.padding = '6px 12px';
    btn.style.marginLeft = '10px';
    btn.style.borderRadius = '10px';
    btn.style.cursor = 'pointer';

    // Click-Handler nur einmal verdrahten
    if (!btn.dataset.wired){
      btn.addEventListener('click', () => {
        MJ.initSearchUI(); // idempotent
        const sm = document.getElementById('searchModal');
        sm && sm._openSearch?.();
      });
      btn.dataset.wired = '1';
    }
  };

  /* --- GLOBAL SEARCH BOOTSTRAP (exactly once, all pages) --- */
  document.addEventListener('DOMContentLoaded', () => {
  mountGlowBackdrop();   // <— NEU: pastelliges, animiertes Glow hinter allem
  MJ.initSearchUI();     // idempotent
});
})();

/* ---------- Mobile Header Toggle ---------- */
(function(){
  if (window.innerWidth <= 768) {
    const header = document.querySelector('header');
    if (!header) return;
    const btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.textContent = '☰';
    header.insertBefore(btn, header.firstChild);

    btn.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });

    document.addEventListener('click', (e)=>{
      if (!header.contains(e.target)) header.classList.remove('nav-open');
    });
  }
})();

/* ---------- Safe Bootstrap: initHome/initLive exactly once ---------- */
(function(){
  function safeInit(flagName, fn){
    const key = `init-${flagName}-done`;
    if (document.body.dataset[key]) return;
    document.body.dataset[key] = '1';
    try { fn(); } catch (e) { console.error(`${flagName} crashed:`, e); }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const page = (document.body.dataset.page || '').toLowerCase();
    if (page === 'home' && window.MJPLUS?.initHome) safeInit('home', window.MJPLUS.initHome);
    if (page === 'live' && window.MJPLUS?.initLive) safeInit('live', window.MJPLUS.initLive);

  });
})();



