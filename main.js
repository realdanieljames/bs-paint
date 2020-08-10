/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to repeat, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}


/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

// const canvasSquares =  document.querySelectorAll("div.square.color-5")
// canvasSquares.backgroundColor = 'blue'
// console.dir(canvasSquares)
// console.dir("color-5")

const getColor = function(element){
  return element.classList[1];
}


const handleClickSquare =  function (event) {
  const square = event.target;
  const brush = document.querySelector('.current-brush')
  square.classList.replace(getColor(square), getColor(brush));
}

const squares = document.querySelectorAll('.square')

for (const square of squares) {
  square.addEventListener('click', handleClickSquare)
}

const handleClickPaletteColor = function (event) {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(getColor(brush), getColor(event.target));
}

const paletteColors = document.querySelectorAll('.palette-color')

// console.dir(colorPalette)
for(const paletteColor of paletteColors){
  paletteColor.addEventListener('click', handleClickPaletteColor)
}





/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
