const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.type-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    const target=tab.dataset.target;
    document.querySelectorAll('.type-tab').forEach(button=>{
      const selected=button===tab;
      button.classList.toggle('active',selected);
      button.setAttribute('aria-selected',String(selected));
    });
    document.querySelectorAll('.type-card[role="tabpanel"]').forEach(panel=>{
      const selected=panel.id===target;
      panel.hidden=!selected;
      panel.classList.toggle('active',selected);
    });
  });
});
