'use strict';

/**
 * Exercice 4
 */

/**
 * Generate Draw bar
 * @param {arg} sum
 * @param {arg} nbr
 * @return {diplay} run
 */

 var RenderWorldMap = function RenderWorldMap() {

}

RenderWorldMap.prototype.run = function() {
  this.select();
  this.legend();
}


 RenderWorldMap.prototype.select = function() {
  var country = document.body.querySelectorAll('path');
  country.forEach(function(path) {
    path.addEventListener('click', event => {
      country.forEach(function(paths) {
        paths.style.fill = 'black';
      })
      event.target.style.fill = 'red';
    });
    path.addEventListener('mouseenter', event => {
      if(event.target.style.fill === 'red') {
        event.target.style.fill = 'purple';
        return;
      }
      event.target.style.fill = 'blue';
    })
    path.addEventListener('mouseleave', event => {
      if(event.target.style.fill === 'purple' || event.target.style.fill === 'red') {
        event.target.style.fill = 'red';
        return;
      }
      event.target.style.fill = 'black';
    })
  });

RenderWorldMap.prototype.legend = function() {
  var legend = document.createElement('ul');
  var country = document.body.querySelectorAll('path');
  var hover = document.createElement('li');
  var selected = document.createElement('li');

  country.forEach(function(path) {
    path.addEventListener('mouseenter', event => {
      hover.textContent = 'Pays survoler : ' + event.target.id.toUpperCase();
      legend.appendChild(hover);
    });
    path.addEventListener('click', event => {
      selected.textContent = 'Pays sélectionner : ' + event.target.id.toUpperCase();
      legend.prepend(selected);
    });
  })
  document.body.appendChild(legend);
}

}

var map1 = new RenderWorldMap();
map1.run();