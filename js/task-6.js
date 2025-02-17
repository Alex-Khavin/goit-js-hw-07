function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");

const inputNumber = document.querySelector(".input");
inputNumber.addEventListener("input", getNumber);

function getNumber(event) {
  const input = event.target;
  const result = input.value;
}

const boxes = document.querySelector("#boxes");

const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", () => {
  const countDiv = parseInt(inputNumber.value);

  const markupBox = document.createElement("div");
  markupBox.style.width = "30px";
  markupBox.style.height = "30px";
  markupBox.style.backgroundColor = getRandomHexColor();
  boxes.append(markupBox);
})

const destroyBtn = document.querySelector(".destroy-btn");
// destroyBtn.addEventListener("click",)

// ЩЕ ДУМАЮ НАД ЦІЄЮ ЗАДАЧОЮ