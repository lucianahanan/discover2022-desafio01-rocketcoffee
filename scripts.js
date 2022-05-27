/*---------- get page width without scrolls */
function getPageWidth() {
  // return document.documentElement.clientWidth;
  return window.innerWidth;
}


/*---------- check if viewport is mobile */
function onResize() {
  var windowWidth = getPageWidth(); //console.log(windowWidth)

  if( windowWidth <= 460 ) {
    //console.log(windowWidth)
    // move button down
    // const main = document.querySelector('main'); //console.log(main)
    // const coffee = document.querySelector('nav + a'); //console.log(coffee)
    // const element = document.querySelector('main > h1'); //console.log(element)
    // main.insertBefore(coffee, element);
  }
}
// window.addEventListener('load', onResize)
// window.addEventListener('resize', onResize);



/*--------- open mobile menu */
const burguer = document.querySelector('#burguer');
const modal = document.querySelector('#modal');

burguer.onclick = function() {

  ['closed','opened'].forEach( function(className) {
    burguer.classList.toggle(className);
  } )

  const modal = document.querySelector('#modal');
  modal.classList.toggle('visible');
}