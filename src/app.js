/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
function getRandomInt() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

middleNum.innerHTML = getRandomInt();

//  La página se refresca cada 10 segundos
setTimeout(() => {
  document.location.reload();
}, 10000);

function getSuit(suitNumber = 0) {
  switch (suitNumber) {
    case 1:
      return "♦";
    case 2:
      return "♥";
    case 3:
      return "♠";
    case 4:
      return "♣";
  }
}
function getSuits() {
  let theSuit = getSuit(Math.floor(Math.random() * 4) + 1);
  return theSuit;
}
console.log(getSuits());
let result = getSuits();

if (result == "♦" || result == "♥") {
  upperSuit.style.color = "red";
  bottmSuit.style.color = "red";
  middleNum.style.color = "red";
} else {
  upperSuit.style.color = "black";
  bottmSuit.style.color = "black";
  middleNum.style.color = "black";
}

upperSuit.innerHTML = result;
bottmSuit.innerHTML = result;
