import { makeRows } from '../grid/grid.js';
// import { resetGrid } from '../grid/reset-grid.js';

const container = document.getElementById('multiple-pointers');
makeRows(12, 12, container, 'grid-item ');

const boxes = document.querySelectorAll('.grid-item');
const reset = document.querySelector('.reset-mp');

reset.style.visibility = 'hidden';

const multiplePointers = async (color1, color2, delay) => {
  let index1 = 0;
  let index2 = boxes.length - 1;
  let box1 = Number(boxes[index1].className.slice(10));
  let box2 = Number(boxes[index2].className.slice(10));
  if (
    boxes[index1].style.backgroundColor === color1 ||
    boxes[index2].style.backgroundColor === color2
  )
    return;

  while (index1 < index2) {
    if (box1 < boxes.length) {
      boxes[index1].style.backgroundColor = 'green';
      await new Promise((resolve, reject) => setTimeout(resolve, delay));
      boxes[index1].style.backgroundColor = color1;
      index1++;
    }
    if (box2 > box1) {
      boxes[index2].style.backgroundColor = 'green';
      await new Promise((resolve, reject) => setTimeout(resolve, delay));
      boxes[index2].style.backgroundColor = color2;
      index2--;
    }
  }
  reset.style.visibility = 'visible';
};

const resetGrid = async () => {
  const boxes = document.querySelectorAll('.grid-item');
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

export { multiplePointers };
