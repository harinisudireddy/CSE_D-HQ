function(){
savedNotes.addEventListener('click',(e)=>{
if(e.target.matches('button')){
const i = e.target.dataset.i; const notes = JSON.parse(localStorage.getItem('cse_notes')||'[]'); const n = notes[i]; if(n){ noteTitle.value = n.title; noteText.value = n.content; }
}
});
renderNotes();


// Small UX: chips open section
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click', ()=>{ const id = c.dataset.open; if(!id) return; const el = document.querySelector(id); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}); }));


// Make sidebar links scroll
document.querySelectorAll('.sidebar nav a').forEach(a=>a.addEventListener('click', (e)=>{ e.preventDefault(); document.querySelectorAll('.sidebar nav a').forEach(x=>x.classList.remove('active')); a.classList.add('active'); const href = a.getAttribute('href'); if(href && href.startsWith('#')){ const el = document.querySelector(href); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}); }}));


})();




/* React component (App.jsx) - single-file Tailwind React component for easy conversion */


/*
Copy this component into a React project (create-react-app or Vite)
Requires Tailwind CSS configured. This is a presentation-only component
(no backend) and mirrors the demo above.
*/


export default function App(){
return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
<div className="flex">
<aside className="w-64 p-5 sticky top-0 h-screen bg-white/60 backdrop-blur rounded-r-2xl border-r border-slate-200 dark:bg-slate-900/40">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center text-white font-bold">CD</div>
<div>
<h1 className="text-lg font-semibold">CSE_D HQ</h1>
<p className="text-xs text-slate-500">Class Hub • Study • Placements</p>
</div>
</div>
<nav className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
<a className="px-3 py-2 rounded-lg bg-teal-50 text-teal-700">Dashboard</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Announcements</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Assignments</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Study Planner</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Notes</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Placement</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Events</a>
</nav>
</aside>
<main className="flex-1 p-6">
<header className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<input className="w-96 p-2 rounded-xl border" placeholder="Search..." />
</div>
<div className="flex items-center gap-3">
<div className="text-sm">Hello, <strong>Student</strong></div>
<button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-white">Start 25m</button>
</div>
</header>


<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 bg-white p-5 rounded-2xl shadow">
<h2 className="text-2xl font-semibold">Welcome to <span className="text-teal-500">CSE_D HQ</span></h2>
<p className="text-sm text-slate-500 mt-2">A focused space for your class — announcements, study tools, placement prep and more.</p>
</div>
<div className="bg-white p-5 rounded-2xl shadow">
<div className="text-xl font-bold">0</div>
<div className="text-sm text-slate-500">Minutes Today</div>
</div>
</section>
</main>
</div>
</div>
)
}function(){
savedNotes.addEventListener('click',(e)=>{
if(e.target.matches('button')){
const i = e.target.dataset.i; const notes = JSON.parse(localStorage.getItem('cse_notes')||'[]'); const n = notes[i]; if(n){ noteTitle.value = n.title; noteText.value = n.content; }
}
});
renderNotes();


// Small UX: chips open section
document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click', ()=>{ const id = c.dataset.open; if(!id) return; const el = document.querySelector(id); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}); }));


// Make sidebar links scroll
document.querySelectorAll('.sidebar nav a').forEach(a=>a.addEventListener('click', (e)=>{ e.preventDefault(); document.querySelectorAll('.sidebar nav a').forEach(x=>x.classList.remove('active')); a.classList.add('active'); const href = a.getAttribute('href'); if(href && href.startsWith('#')){ const el = document.querySelector(href); if(el) el.scrollIntoView({behavior:'smooth', block:'center'}); }}));


})();




/* React component (App.jsx) - single-file Tailwind React component for easy conversion */


/*
Copy this component into a React project (create-react-app or Vite)
Requires Tailwind CSS configured. This is a presentation-only component
(no backend) and mirrors the demo above.
*/


export default function App(){
return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
<div className="flex">
<aside className="w-64 p-5 sticky top-0 h-screen bg-white/60 backdrop-blur rounded-r-2xl border-r border-slate-200 dark:bg-slate-900/40">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 flex items-center justify-center text-white font-bold">CD</div>
<div>
<h1 className="text-lg font-semibold">CSE_D HQ</h1>
<p className="text-xs text-slate-500">Class Hub • Study • Placements</p>
</div>
</div>
<nav className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
<a className="px-3 py-2 rounded-lg bg-teal-50 text-teal-700">Dashboard</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Announcements</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Assignments</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Study Planner</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Notes</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Placement</a>
<a className="px-3 py-2 rounded-lg hover:bg-slate-100">Events</a>
</nav>
</aside>
<main className="flex-1 p-6">
<header className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<input className="w-96 p-2 rounded-xl border" placeholder="Search..." />
</div>
<div className="flex items-center gap-3">
<div className="text-sm">Hello, <strong>Student</strong></div>
<button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-white">Start 25m</button>
</div>
</header>


<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 bg-white p-5 rounded-2xl shadow">
<h2 className="text-2xl font-semibold">Welcome to <span className="text-teal-500">CSE_D HQ</span></h2>
<p className="text-sm text-slate-500 mt-2">A focused space for your class — announcements, study tools, placement prep and more.</p>
</div>
<div className="bg-white p-5 rounded-2xl shadow">
<div className="text-xl font-bold">0</div>
<div className="text-sm text-slate-500">Minutes Today</div>
</div>
</section>
</main>
</div>
</div>
)
}
