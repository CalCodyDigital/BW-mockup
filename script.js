
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';nav.classList.toggle('open',open)});
nav?.addEventListener('click',e=>{if(e.target.closest('a')&&toggle){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}});
const modal=document.querySelector('#booking-modal');
document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>modal.showModal()));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>modal.close()));
modal?.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}});
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const status=f.querySelector('[role=status]');status.textContent='This is a design preview. Your message has not been sent.';f.reset()}));
