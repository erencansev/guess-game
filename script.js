"use strict";
/* 
document.querySelector(".message").textContent = "Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23; */

/* Returns a decimal number between zero and one */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🔴 No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🔥 Correct Number";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 too high!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 too low!";
  }
});
