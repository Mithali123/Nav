window.addEventListener('scroll',()=>{
    const navbar=document.querySelector('.navbar');
    if(window.scrollY >50)
        {
            navbar.style .backgroundColor=' rgb(234, 255, 0)';  
        }
        
        else{
            navbar.style .backgroundColor='white';
        }
});