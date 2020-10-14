'use strict';

/**
 * Exercice 2
 */

/**
 * Generate Draw bar
 * @param {arg} sum
 * @param {arg} nbr
 * @return {diplay} run
 */

var DrawBar = function DrawBar (sum, nbr){
  this.sum = sum ;
  this.nbr = nbr ; 
}

DrawBar.prototype.display = function(){
    
    var prog = document.createElement('div');
    
    var bar = document.createElement('div');
    
    prog.style.width = this.sum + '%';
    prog.style.backgroundColor = 'lightgrey';
    prog.style.height = '50px';
    prog.style.borderRadius = "20px";
    
    bar.style.width  = this.nbr + '%';
    bar.style.backgroundColor = 'red';
    bar.style.height = '50px';
    bar.style.borderRadius = '20px'

    prog.appendChild(bar);
    document.querySelector('body').appendChild(prog);

}


DrawBar.prototype.run = function(){
    this.display();
}

var loadingBar = new DrawBar(100, 60);
loadingBar.run();