const container= document.getElementById('container');
let slider = document.getElementById('myRange');
let output = document.getElementById('value');
const random = document.getElementById("random");
const black = document.getElementById("black");
output.innerHTML = slider.value;
let randomColor = false;
let blackColor = false;
let eraseColor = false;

function makeRows(value) {
    for (i = 0; i < (value * value); i++) {
      let grid = document.createElement('div');
      container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
      container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
      container.appendChild(grid).className = 'grid-item';
      grid.addEventListener('mouseover',function (event) {
        if(randomColor){
          event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else if(blackColor){
          event.target.style.backgroundColor = 'black';
        }else if(eraseColor){
          event.target.style.backgroundColor = 'white';
        }
      })
    };
  };
  
  function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}  
function colorClicked(whichOne){
  if(whichOne=="random"){
    randomColor=true;
    blackColor=false;
    eraseColor=false;
  } 
  else if(whichOne=="black"){
  blackColor=true;
  randomColor=false;
  eraseColor=false;
  }
  else if(whichOne=="eraser"){
    eraseColor=true;
    blackColor=false;
    randomColor=false;
  }
  }

  slider.addEventListener("input", function(){
    output.innerHTML = this.value;
    removeAllChildNodes(container);
    makeRows(slider.value, slider.value);
  });

  makeRows(16, 16);
