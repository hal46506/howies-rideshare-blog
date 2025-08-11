async function fetchJSON(path){
  const res = await fetch(path, {cache:"no-store"});
  if(!res.ok) throw new Error("Failed to load "+path);
  return res.json();
}
function qs(sel, el=document){ return el.querySelector(sel); }
function qsa(sel, el=document){ return [...el.querySelectorAll(sel)]; }
function formatDate(s){
  const d = new Date(s);
  return d.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'});
}
function setActiveNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  qsa('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if((!href && path==='index.html') || href===path){ a.classList.add('active'); }
  });
}
document.addEventListener('DOMContentLoaded', setActiveNav);
