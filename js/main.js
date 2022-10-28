const arrowBtn = document.querySelector('.moveToUp')

arrowBtn.addEventListener('click',()=>{
    window.scroll(0,0);
})


window.addEventListener('scroll', ()=>{    
    if( document.documentElement.scrollTop >= document.getElementById('header').clientHeight - 150 ){
        arrowBtn.classList.add('show')
    }else{
        arrowBtn.classList.remove('show')

    }
})