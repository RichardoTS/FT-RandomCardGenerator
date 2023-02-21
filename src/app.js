/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // for (let i = 0; i < 10; i++) {
  //   document.getElementByClass("container").innerHTML = [i];
  /* console.log("Hello Rigo from the console!"); */
};
function getRandomInt() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}
/* console.log(getRandomInt()); */

middleNum.innerHTML = getRandomInt();
// for (let numbrs = 1; numbrs <= 10; numbrs++) {
//   console.log("these are the numbers " + numbrs);
// }
/* 
    La página se refresca cada 10 segundos
*/
setTimeout(() => {
  document.location.reload();
}, 10000);

function getSuit(suitNumber = 0) {
  //make sure parameter is a number and not a string by converting the value to int:

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
  // for (let i = 0; i < 4; i++) {
  let theSuit = getSuit(Math.floor(Math.random() * 4) + 1);
  return theSuit;
  // }
}
console.log(getSuits());
let result = getSuits();
upperSuit.innerHTML = result;
bottmSuit.innerHTML = result;
