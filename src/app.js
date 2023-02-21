/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // for (let i = 0; i < 10; i++) {
  //   document.getElementByClass("container").innerHTML = [i];

  console.log("Hello Rigo from the console!");
};
for (let suit = 1; suit <= 4; suit++) {
  console.log("these are the suits" + suit);
}
for (let numbrs = 1; numbrs <= 10; numbrs++) {
  console.log("these are the numbers " + numbrs);
}
/* 
    La página se refresca cada 10 segundos
*/
setTimeout(() => {
  document.location.reload();
}, 10000);
