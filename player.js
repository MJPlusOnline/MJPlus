// player.js — MJ+ Core (Home + Live + Player + Setlist + Back-Logic [+ optional Search])

(() => {
  const MJ = (window.MJPLUS = window.MJPLUS || {});

  /* ---------- Continue Watching (Resume) ---------- */
  const CW_KEY = 'mjplus_cw_v16';
  const loadCW  = () => { try { return JSON.parse(localStorage.getItem(CW_KEY) || '[]'); } catch { return []; } };
  const saveCW  = (list) => localStorage.setItem(CW_KEY, JSON.stringify(list));
  const upsertCW = (entry) => {
    const list = loadCW().filter(x => x.id !== entry.id);
    if (entry.d && entry.t/entry.d >= .95) { saveCW(list); return; } // >95% -> aus Liste entfernen
    list.unshift(entry); saveCW(list.slice(0,40));
  };
  MJ.getResumeTime = (id) => { const e = loadCW().find(x => x.id === id); return e ? e.t : 0; };
  const resumeFrac = (id) => { const e = loadCW().find(x => x.id === id); return (e && e.d>0)? Math.min(1,e.t/e.d):0; };

  /* ---------- Overlay / Player / Setlist ---------- */
  let overlay, videoEl, closeXBtn;
  let setlistModal, setlistCols, setlistHeaderImg, setlistHeaderTitle;
  let currentItem = null, hls = null, saveTimer = null;

  function ensureOverlay(){
    if (overlay) return;

    // PLAYER OVERLAY
    overlay = document.createElement('div');
    overlay.id = 'playerOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#000;z-index:100;display:none;align-items:center;justify-content:center';

    // Close-X
    closeXBtn = document.createElement('button');
    closeXBtn.id = 'playerCloseX';
    closeXBtn.type = 'button';
    closeXBtn.textContent = '×';
    closeXBtn.style.cssText = `
      position:absolute;top:14px;right:16px;z-index:101;
      width:40px;height:40px;border-radius:10px;border:1px solid #ffffff44;
      background:#000a;color:#fff;font-size:24px;line-height:38px;font-weight:900;cursor:pointer
    `;
    closeXBtn.addEventListener('click', () => { stopPlayback(); goOrigin(); });
    overlay.appendChild(closeXBtn);

    // Video
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
    setlistModal.style.cssText = 'position:fixed;inset:0;display:none;z-index:120;align-items:center;justify-content:center;background:rgba(0,0,0,.7)';

    // Klick außerhalb -> schließt Setlist und geht zur Herkunft
    setlistModal.addEventListener('mousedown', (e)=>{
      if (!e.target.closest('.setlist-card')) { hideSetlist(); goOrigin(); }
    }, true);
    setlistModal.addEventListener('touchstart', (e)=>{
      if (!e.target.closest('.setlist-card')) { hideSetlist(); goOrigin(); }
    }, {passive:true});

    const card = document.createElement('div');
    card.className = 'setlist-card';
    card.style.cssText='width:min(92vw,900px);max-height:80vh;background:#111;border-radius:14px;box-shadow:0 10px 40px #000c;overflow:hidden';

    // Header
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

    // Body: 2 Spalten
    const body = document.createElement('div');
    body.className = 'setlist-body';
    body.style.cssText='padding:8px 10px;overflow:auto;max-height:calc(80vh - 70px);display:grid;grid-template-columns:1fr 1fr;gap:6px 24px';
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
      if (e.key==='Escape'){ e.preventDefault(); hideSetlist(); goOrigin(); return; }
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

  /* ---------- Setlist anzeigen ---------- */
  function showSetlist(item){
    ensureOverlay();
    setlistHeaderImg.src = item.poster || '';
    setlistHeaderTitle.textContent = item.title || 'Setlist';
    setlistCols[0].innerHTML=''; setlistCols[1].innerHTML='';

    const arr = (item.chapters||[]).slice();
    const idxPA = arr.findIndex(c => (c.label||'').toUpperCase()==='PLAY ALL');
    if(idxPA>0){ const pa=arr.splice(idxPA,1)[0]; arr.unshift(pa); }

    const half = Math.ceil(arr.length/2);
    const left = arr.slice(0,half);
    const right = arr.slice(half);

    const render = (list, colIndex, target) => {
      list.forEach((ch, i)=>{
        const btn = document.createElement('button');
        btn.className = 'setlist-item';
        btn.type = 'button';
        btn.textContent = ch.label;
        btn.dataset.col = String(colIndex);
        btn.dataset.row = String(i);
        btn.style.cssText = 'background:transparent;border:none;color:#fff;cursor:pointer;font-size:13px;line-height:1.15em;text-transform:uppercase;font-weight:800;letter-spacing:.02em;text-align:left;padding:2px 0;transition:color .15s,text-shadow .15s,transform .15s';
        btn.onmouseover = ()=>{ btn.style.color='#e50914'; btn.style.textShadow='0 0 10px rgba(229,9,20,.55)'; };
        btn.onmouseout  = ()=>{ btn.style.color='#fff'; btn.style.textShadow=''; };
        btn.onfocus     = ()=>{ btn.style.color='#e50914'; btn.style.textShadow='0 0 10px rgba(229,9,20,.55)'; };
        btn.onblur      = ()=>{ btn.style.color='#fff'; btn.style.textShadow=''; };
        btn.onclick = ()=>{ hideSetlist(); playItem(item, ch.sec||0); };
        btn.setAttribute('tabindex','0');
        target.appendChild(btn);
      });
    };
    render(left,0,setlistCols[0]); render(right,1,setlistCols[1]);

    setlistModal.style.display = 'flex';
    setTimeout(()=> setlistCols[0].querySelector('.setlist-item')?.focus(), 30);
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

  function startVideoWith(url, kind /* 'hls' | 'native-hls' | 'mp4' */){
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
      videoEl.src = url; // iOS/Safari
      videoEl.addEventListener('canplay', ()=>{ try{videoEl.play().catch(()=>{});}catch{} }, {once:true});
      return;
    }
    // kind === 'hls' via hls.js
    cleanHls();
    hls = new Hls({ enableWorker:false, overrideNative:true, capLevelToPlayerSize:true, maxBufferLength:20, maxMaxBufferLength:40, backBufferLength:60 });
    hls.loadSource(url);
    hls.attachMedia(videoEl);
    hls.on(Hls.Events.MANIFEST_PARSED, ()=> setTimeout(()=> videoEl.play().catch(()=>{}), 50));
  }

  function playItem(item, startAt=0){
    if(!item?.source){ alert('No stream assigned for this video yet.'); return; }
    currentItem = item;

    ensureOverlay();
    openOverlay();

    // Fehler-Listener, der einmalig auf MP4 zurückfällt
    let fellBack = false;
    const tryFallbackToMp4 = ()=>{
      if (fellBack) return;
      const mp4Url = item.mp4 || muxMp4FromM3u8(item.source);
      if (!mp4Url){ return; }
      fellBack = true;
      startVideoWith(mp4Url, 'mp4');
      videoEl.addEventListener('loadedmetadata', ()=>{ try{ if(startAt>0) videoEl.currentTime=startAt; }catch{} }, {once:true});
    };

    // Primäre Wahl
    const hasHlsJs = (typeof Hls!=='undefined') && Hls.isSupported();
    const hasNativeHls = videoEl.canPlayType('application/vnd.apple.mpegurl');

    if (hasHlsJs){
      startVideoWith(item.source, 'hls');
      hls.on(Hls.Events.ERROR, (_e, data)=>{ if(data?.fatal){ cleanHls(); tryFallbackToMp4(); }});
    } else if (hasNativeHls){
      startVideoWith(item.source, 'native-hls');
    } else {
      const mp4Url = item.mp4 || muxMp4FromM3u8(item.source);
      if (!mp4Url){ alert('This browser cannot play HLS and no MP4 fallback is available.'); return; }
      startVideoWith(mp4Url, 'mp4');
    }

    // Startposition
    videoEl.addEventListener('loadedmetadata', ()=>{
      try { if (startAt>0) videoEl.currentTime = startAt; } catch {}
      try { videoEl.play().catch(()=>{});} catch {}
    }, {once:true});

    // Direktfehler am Video -> Fallback
    videoEl.addEventListener('error', tryFallbackToMp4, {once:true});

    // Fortschritt speichern
    if(saveTimer) clearInterval(saveTimer);
    saveTimer = setInterval(()=>{
      try{
        const t=Math.floor(videoEl.currentTime||0), d=Math.floor(videoEl.duration||0);
        if(d>0) upsertCW({id:item.id,title:item.title,poster:item.poster,source:item.source,t,d});
      }catch{}
    },2000);
  }

  function stopPlayback(){
    try{videoEl.pause();}catch{} if(saveTimer){clearInterval(saveTimer);saveTimer=null;}
    try{
      if(currentItem){
        const t=Math.floor(videoEl.currentTime||0), d=Math.floor(videoEl.duration||0);
        if(d>0) upsertCW({id:currentItem.id,title:currentItem.title,poster:currentItem.poster,source:currentItem.source,t,d});
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
    if (isSetlistOpen()){ hideSetlist(); goOrigin(); return; }
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

  // Zurücktaste/ESC global (Search/Setlist respektieren)
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

  // Android/FireTV „back“
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
      const fromCat = (window.catalog || []).find(x => x.id === full.id);
      if (fromCat) Object.assign(full, fromCat);

      if (!full?.source) {
        const cleaned = loadCW().filter(x => x.id !== full.id);
        saveCW(cleaned);
        alert('This item needs to be re-opened from the catalog once.');
        return;
      }
      const start = MJ.getResumeTime(full.id) || 0;
      playItem(full, start);
      return;
    }

    if (Array.isArray(full.chapters) && full.chapters.length > 0) {
      if (isPlayerOpen()) stopPlayback();
      showSetlist(full);
      NavStack.markSetlist(true);
    } else {
      playItem(full, 0);
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
      ${item.tier ? `<span class="badge">${item.tier==='am'?'AM.':'PRO'}</span>` : '' }
      ${fromContinue ? `<div class="progress-wrap"><div class="progress" style="width:${(progress*100).toFixed(1)}%"></div></div>` : ``}
    `;
    b.addEventListener('keydown',(e)=>{ if(['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); b.click(); }});
    return b;
  }
  const shuffle = (arr)=> arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);

  /* ---------- HOME (robust) ---------- */
  MJ.initHome = function(){
    try{
      if (!window.catalog || !Array.isArray(window.catalog)) {
        console.error('catalog.js missing or empty'); return;
      }
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
          b.innerHTML = `
            <img src="${full.poster || ''}" alt="${full.title||''}" onerror="this.style.opacity=.2">
            ${full.tier ? `<span class="badge">${full.tier==='am'?'AM.':'PRO'}</span>` : '' }
            <div class="progress-wrap"><div class="progress" style="width:${(progress*100).toFixed(1)}%"></div></div>
          `;
          b.onclick = ()=>{ MJ.openPoster({ id: full.id }, true, 'home'); };
          b.addEventListener('keyup', (ke)=>{ if(['Enter',' ','OK','Select'].includes(ke.key)) b.click(); });

          continueRow.appendChild(b);
        });

        continueRow.onclick = null;
        continueRow.onpointerup = null;
        continueRow.ontouchend = null;
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

  /* ---------- LIVE ---------- */
  MJ.initLive = function(){
    if (!window.catalog){ console.warn('catalog.js missing'); return; }
    const grid = document.getElementById('grid');
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    function applyFilter(val){
      buttons.forEach(b=> b.classList.toggle('active', b.dataset.filter===val));
      grid.innerHTML='';
      const items = window.catalog.filter(x => (x.category==='live' || x.tier));
      const filtered = (val==='all') ? items : items.filter(x=> (x.tier||'').toLowerCase()===val);
      filtered.forEach(item=>{
        const b=tileEl(item,false); b.onclick=()=> MJ.openPoster(item,false,'live'); grid.appendChild(b);
      });
      setTimeout(()=> grid.querySelector('.tile')?.focus(),40);
    }
    buttons.forEach(btn=>{
      btn.addEventListener('click', ()=> applyFilter(btn.dataset.filter));
      btn.addEventListener('keydown',(e)=>{ if(['Enter','OK','Select',' '].includes(e.key)){ e.preventDefault(); btn.click(); }});
    });
    applyFilter('all');
  };

  /* ---------- GLOBAL SEARCH (idempotent; works on all pages) ---------- */
  MJ.initSearchUI = function(){
    // 1) Ensure modal exists
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

    // 2) Wire modal internals ONCE
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
          b.innerHTML = `
            <img src="${item.poster}" alt="${item.title}" onerror="this.style.opacity=.2">
            ${item.tier ? `<span class="badge">${item.tier==='am'?'AM.':'PRO'}</span>` : '' }
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

      // stash helpers for reuse
      modal._openSearch  = openSearch;
      modal._closeSearch = closeSearch;
      modal._render      = renderResults;
      modal.dataset.wired = '1';
    }

    // 3) Ensure the NAV button exists; wire its click ONCE
    let btn = document.getElementById('openSearch');
    if (!btn){
      const nav = document.querySelector('header nav') || document.querySelector('header') || document.body;
      btn = document.createElement('button');
      btn.id = 'openSearch';
      btn.className = 'nav-btn';
      btn.textContent = 'Search';
      btn.style.background = '#e50914';
      btn.style.border = '1px solid #e50914';
      btn.style.color = '#fff';
      btn.style.padding = '6px 12px';
      btn.style.marginLeft = '10px';
      btn.style.borderRadius = '10px';
      btn.style.cursor = 'pointer';
      nav.appendChild(btn);
    }
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
    MJ.initSearchUI(); // creates/wires modal + button idempotently
  });
})();