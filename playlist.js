<script>
/* MJ+ Local Playlists — kein Login nötig */
(function(){
  const STORAGE_KEY = 'mjplus_playlists_v1';

  function load(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e){}
    // Initialzustand (erste Playlist)
    const init = {
      activeId: 'my-favs',
      lists: {
        'my-favs': { id:'my-favs', name:'My Favourites', items:[] }
      }
    };
    save(init);
    return init;
  }
  function save(state){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    notify();
  }

  let state = load();
  const listeners = new Set();
  function notify(){ listeners.forEach(fn=>{ try{fn(getPublicAPI())}catch{}}); }

  // Externe API
  function getActive(){ return state.lists[state.activeId]; }
  function setActive(id){
    if (!state.lists[id]) return false;
    state.activeId = id; save(state); return true;
  }
  function createList(name){
    const id = 'pl-' + Math.random().toString(36).slice(2,8);
    state.lists[id] = { id, name: name?.trim() || 'New Playlist', items: [] };
    state.activeId = id; save(state);
    return state.lists[id];
  }
  function renameList(id, name){
    if (!state.lists[id]) return false;
    state.lists[id].name = name?.trim() || state.lists[id].name;
    save(state); return true;
  }
  function deleteList(id){
    if (!state.lists[id]) return false;
    const ids = Object.keys(state.lists).filter(x=>x!==id);
    delete state.lists[id];
    state.activeId = ids[0] || createList('My Favourites').id;
    save(state); return true;
  }
  function hasItem(id){
    return !!getActive().items.find(x=>x.id===id);
  }
  function addItem(item){
    // item: {id, title, poster, year?, extra?}
    if (!item || !item.id) return false;
    const pl = getActive();
    if (pl.items.find(x=>x.id===item.id)) return true; // schon drin
    pl.items.push(item);
    save(state); return true;
  }
  function removeItem(id){
    const pl = getActive();
    const i = pl.items.findIndex(x=>x.id===id);
    if (i<0) return false;
    pl.items.splice(i,1);
    save(state); return true;
  }
  function moveItem(id, toIndex){
    const pl = getActive();
    const i = pl.items.findIndex(x=>x.id===id);
    if (i<0) return false;
    const [it] = pl.items.splice(i,1);
    const idx = Math.max(0, Math.min(toIndex, pl.items.length));
    pl.items.splice(idx,0,it);
    save(state); return true;
  }
  function clearActive(){
    getActive().items = []; save(state);
  }
  function exportJSON(){
    return JSON.stringify(state, null, 2);
  }
  function importJSON(json, merge=true){
    try{
      const incoming = JSON.parse(json);
      if (!incoming || typeof incoming!=='object') return false;
      if (!merge) { state = incoming; save(state); return true; }
      // Merge: Listen zusammenführen, IDs beibehalten
      for (const [id,pl] of Object.entries(incoming.lists||{})){
        if (!state.lists[id]) state.lists[id] = { id, name: pl.name || id, items: [] };
        // Items mergen (ohne Duplikate)
        const have = new Set(state.lists[id].items.map(x=>x.id));
        (pl.items||[]).forEach(x=>{ if (x?.id && !have.has(x.id)) state.lists[id].items.push(x); });
      }
      if (incoming.activeId && state.lists[incoming.activeId]) state.activeId = incoming.activeId;
      save(state); return true;
    }catch(e){ return false; }
  }
  function onChange(fn){
    listeners.add(fn);
    return ()=>listeners.delete(fn);
  }

  // Cross-Tab-Sync
  window.addEventListener('storage', (e)=>{
    if (e.key===STORAGE_KEY && e.newValue){
      try { state = JSON.parse(e.newValue); notify(); } catch{}
    }
  });

  function getPublicAPI(){
    return {
      get state(){ return state; },
      get active(){ return getActive(); },
      getActive, setActive, createList, renameList, deleteList,
      hasItem, addItem, removeItem, moveItem, clearActive,
      exportJSON, importJSON, onChange
    };
  }

  window.MJPLAY = getPublicAPI();
})();
</script>