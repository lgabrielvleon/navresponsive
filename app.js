const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        
        //evalua si el nav está, si es así lo agrega, caso contratio lo elimina
        nav.classList.toggle('nav-active');
        
        //se activa animacion
        navLinks.forEach((link,index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;    
            }
        });
        
        burger.classList.toggle('toggle');

    });


    
}
navSlide();