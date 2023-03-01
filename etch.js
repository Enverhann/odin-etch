const container= document.getElementById('container');
let slider = document.getElementById('myRange');
let output = document.getElementById('value');
output.innerHTML = slider.value;

function makeRows(value) {
    for (i = 0; i < (value * value); i++) {
      let grid = document.createElement('div');
      container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`
      container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`
      container.appendChild(grid).className = 'grid-item';
      grid.addEventListener('mouseover',function (event) {
        event.target.style.backgroundColor = 'black';
      })
    };
    console.log(slider.value);
  };
  
  function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}  

  slider.addEventListener("input", function(){
    output.innerHTML = this.value;
    removeAllChildNodes(container);
    makeRows(slider.value, slider.value);
  });

  makeRows(16, 16);