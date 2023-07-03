"use strict";

const board = document.querySelector("#board");
const colors = [
  "blue",
  "red",
  "green",
  "purple",
  "yellow",
  "pink",
  "orange",
  "white",
];
const SQUARES_NUMBER = 811;

for (let i = 1; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div"); // Динамически создаем html элемент
  square.classList.add("square"); // создаем класс

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square); // добавляем класс в board(html) при помощи метода "append";
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
