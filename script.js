
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';nav.classList.toggle('open',open)});
nav?.addEventListener('click',e=>{if(e.target.closest('a')&&toggle){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}});
const modal=document.querySelector('#booking-modal');
document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>modal.showModal()));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>modal.close()));
modal?.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}});
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const status=f.querySelector('[role=status]');status.textContent='This is a design preview. Your message has not been sent.';f.reset()}));

const backgroundVideo=document.querySelector('[data-background-video]'),videoToggle=document.querySelector('[data-video-toggle]');
if(backgroundVideo&&videoToggle){
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let loaded=false;
 const label=()=>{videoToggle.textContent=backgroundVideo.paused?'Play background video':'Pause background video';};
 const play=async()=>{if(!loaded){backgroundVideo.querySelector('source').src=backgroundVideo.querySelector('source').dataset.src;backgroundVideo.load();loaded=true;}try{await backgroundVideo.play();}catch{}label();};
 videoToggle.hidden=false;
 backgroundVideo.addEventListener('play',label);backgroundVideo.addEventListener('pause',label);
 videoToggle.addEventListener('click',()=>{if(backgroundVideo.paused)play();else backgroundVideo.pause();});
 motion.addEventListener('change',()=>{if(motion.matches)backgroundVideo.pause();});
 if(!motion.matches&&!navigator.connection?.saveData)play();
}

document.querySelectorAll('[data-testimonials]').forEach(region=>{
 const slides=[...region.querySelectorAll('.testimonial-slide')];
 const controls=region.querySelector('.testimonial-controls');
 const count=region.querySelector('.testimonial-count');
 let current=0;
 const show=()=>{slides.forEach((slide,i)=>{slide.hidden=i!==current;});count.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');};
 region.querySelector('[data-review-prev]').addEventListener('click',()=>{current=(current-1+slides.length)%slides.length;show();});
 region.querySelector('[data-review-next]').addEventListener('click',()=>{current=(current+1)%slides.length;show();});
 show();controls.hidden=false;
});
