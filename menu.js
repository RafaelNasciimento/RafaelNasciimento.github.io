
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')



btnMenu.addEventListener('click', ()=>{  /* AO CLICAR NO BTN APARECER O MENU */
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{  /* AO CLICAR NO BTN-FECHAR DESAPARECER O MENU */
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{ /* AO CLICAR NO OVERLAY DO LADO DE FORA DESAPARECER O MENU */
    menu.classList.remove('abrir-menu') 
})