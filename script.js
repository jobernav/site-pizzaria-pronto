
// Abrir e fechar menu no celular
 const menuBtn=document.querySelector('.menu-btn');
 const menu=document.querySelector('.menu');
 menuBtn.addEventListener('click', () => {
     menu.classList.toggle('ativo');
     menuBtn.textContent=menu.classList.contains('ativo') ? '✕' : '☰';
 });
 // Fechar menu ao clicar em um link
 document.querySelectorAll('.menu a').forEach(link => {
     link.addEventListener('click', () => {
         menu.classList.remove('ativo');
         menuBtn.textContent='☰';
     });
 });
 // Rolagem suave nos links
 document.querySelectorAll('a[href^="#"]').forEach(ancora => {
     ancora.addEventListener('click', function (e) {
         e.preventDefault();
         const alvo=document.querySelector(this.getAttribute('href'));
         if (alvo) {
             alvo.scrollIntoView({
                 behavior: 'smooth'
             });
         }
     });
 });