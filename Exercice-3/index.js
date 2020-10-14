'use strict';

/**
 * Exercice 3
 */

/**
 * Generate Draw bar
 * @param {arg} gamersX
 * @param {arg} gamersO
 * @param {arg} gamer
 * @return {diplay} run
 */

var MyMorpionXO = function MyMorpionXO (gamersX, gamersO, gamer){
  this.gamersX = gamersX ;
  this.gamersO = gamersO ; 
  this.gamer = gamers[0];
}

MyMorpionXO.prototype.zone = function(){

if (gamer === gamers[0]) {
  if (document.getElementById(zone).className.indexOf('filled') >= 0) {
        alert("You can't do that...");
      } else {
        document.getElementById(zone).className += " filled";
        document.getElementById(zone).textContent = "  ";
        gamer = gamers[1];
      }
    }
    else if (gamer === gamers[1]) { 
      if (document.getElementById(zone).className.indexOf('filled') >= 0) {
        alert("You can't do that...");
      } else {
        document.getElementById(zone).className += " filled";
        document.getElementById(zone).textContent = " ";
        gamer = gamers[0];
      }
    }
    checking();
  }
    

MyMorpionXO.prototype.checking = function () {
  one = document.getElementById('Zonea1').textContent;
  two = document.getElementById('Zonea2').textContent
  three = document.getElementById('Zonea3').textContent;
  four = document.getElementById('Zoneb1').textContent;
  five = document.getElementById('Zoneb2').textContent;
  six = document.getElementById('Zoneb3').textContent;
  seven = document.getElementById('Zonec1').textContent;
  eight = document.getElementById('Zonec2').textContent;
  nine = document.getElementById('Zonec3').textContent;
  if (one === two && one === three ||
  four === five && four === six ||
  seven === eight && seven === nine ||
  one === five && one === nine ||
  three === five && three === seven ||
  one === four && one === seven ||
  two === five && two === eight ||
  three === six && three === nine) {
  if (gamer === gamers[0]) {
    alert('Player O WIN');
  } else if (gamer === gamers[1]) {
    alert('Player X WIN');
  }
  document.getElementById("rejouer").style.visibility = "visible";
  document.getElementById("rejouer").onclick = function() {
    location.reload();
  }
}


