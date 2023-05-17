 let contrastToggle = false ;
 function toggleContrast() {
    contrastToggle = !contrastToggle
   if(contrastToggle) {
    document.body.classList += 'dark-theme'
   }

   else {
    document.body.classList.remove('dark-theme')
    
   }
 } 

 //menu backdrop

 function openMenu () {

  document.body .classList += "menu--open"
}

function closeMenu () {
  document.body.classList.remove ('menu--open')
}