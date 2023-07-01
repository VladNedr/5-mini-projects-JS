"use strict";

const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart); //Обращение к самому элементу
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover); // над элементом placeholder
  placeholder.addEventListener("dragenter", dragenter); // зашли на элемент
  placeholder.addEventListener("dragleave", dragleave); // вышли из элемента
  placeholder.addEventListener("drop", dragdrop); // отпустили

  // перемещение элементов
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  // event.target.classList.remove("hold", "hide");  (classList - это некий обьект, у которого есть методы).
  event.target.className = "item"; // 2 вариант написания(более короче). className - работает со строчкой.
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add("hovered");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item); // перемещение item по placeholder (с одного в другой)
}
