document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav) toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const lang=document.getElementById('languageToggle');
 let language=localStorage.getItem('aurevia-language')||'en';
 function applyLanguage(){
   document.documentElement.lang=language;
   document.querySelectorAll('[data-en][data-bn]').forEach(el=>{el.innerHTML=el.dataset[language]});
   if(lang)lang.textContent=language==='en'?'বাংলা':'English';
 }
 if(lang){applyLanguage();lang.addEventListener('click',()=>{language=language==='en'?'bn':'en';localStorage.setItem('aurevia-language',language);applyLanguage()})}
 document.querySelectorAll('form[data-whatsapp-form]').forEach(form=>form.addEventListener('submit',e=>{
   e.preventDefault();const data=new FormData(form);const message=[
    'Hello AUREVIA INTERIORS, I would like to discuss a project.',
    'Name: '+(data.get('name')||''),'Phone: '+(data.get('phone')||''),
    'Project: '+(data.get('project')||''),'Message: '+(data.get('message')||'')
   ].join('\n');window.open('https://wa.me/8801789851118?text='+encodeURIComponent(message),'_blank','noopener');
 }));
});