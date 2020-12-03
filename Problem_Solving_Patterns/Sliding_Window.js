import { makeRows } from '../grid/grid.js';

const container = document.getElementById('sliding-window');

let row = 12;
let col = 12;
makeRows(row, col, container, 'brid-item ');

const reset = document.querySelector('.reset-sw');
const boxes = document.querySelectorAll('.brid-item');
reset.style.visibility = 'hidden';

function setTimer(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

const boxCounter = async (secondary1, secondary2, delay) => {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = secondary1;
    await setTimer(delay);
    boxes[i].style.backgroundColor = secondary2;
  }
};

const slidingWindow = async (color1, color2, delay, secondary1, secondary2) => {
  let index1 = 0;
  let index2 = 0;
  let window = Number(boxes[index1].className.slice(10));
  if (
    boxes[index1].style.backgroundColor === color1 ||
    boxes[index2].style.backgroundColor === color2
  )
    return;

  await boxCounter(secondary1, secondary2, delay / 3);

  while (index2 < boxes.length) {
    if (index2 % row === 0) {
      boxes[index2].style.backgroundColor = color1;
      index2++;
    }
    if (window - 1 < index1) {
      boxes[index1 - 1].style.backgroundColor = color2;
    }
    await setTimer(delay);
    boxes[index2].style.backgroundColor = color1;
    boxes[index1].style.backgroundColor = color1;
    index1++;
    index2++;
    boxes[index1 - 1].style.backgroundColor = color2;
  }
  reset.style.visibility = 'visible';
};

const resetGrid = async () => {
  const boxes = document.querySelectorAll('.brid-item');
  let index1 = 0;
  let index2 = boxes.length - 1;
  let box1 = Number(boxes[index1].innerText);
  let box2 = Number(boxes[index2].innerText);
  reset.style.visibility = 'hidden';
  await new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (box1 < boxes.length) {
        boxes[index1].style.backgroundColor = 'white';
        index1++;
      }
      if (box2 > index1) {
        boxes[index2].style.backgroundColor = 'white';
        index2--;
      }
      if (index1 > index2) {
        clearInterval(interval);
        resolve();
      }
    }, 0);
  });
};
reset.addEventListener('click', resetGrid);

export { slidingWindow };
