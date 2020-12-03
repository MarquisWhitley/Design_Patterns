import { multiplePointers } from './Problem_Solving_Patterns/Multiple_Pointers.js';
import { slidingWindow } from './Problem_Solving_Patterns/Sliding_Window.js';
import {
  caseSensCheck,
  specCheck,
  areThereDuplicates,
  resetInput,
} from './Problem_Solving_Patterns/Frequency_Counter.js';

// Utility Variables

// Multiple Pointers / Sliding Window
const speed = document.querySelectorAll('#speed');
const primaryColor = document.querySelectorAll('#primary-color');
const secondaryColor = document.querySelectorAll('#secondary-color');

const startMP = document.querySelector('.start-mp');
const resetMP = document.querySelector('.reset-mp');

const startSW = document.querySelector('.start-sw');
const resetSW = document.querySelector('.reset-sw');

// ***************************************************

// Frequency Counter

const speedFC = document.querySelector('#speed-fc');
const startFC = document.querySelector('#start-fc');
const resetFC = document.querySelector('#reset-fc');

const input = document.querySelector('#word');

const spec = document.querySelector('.specialChars');
const caseSens = document.querySelector('#case-sensitive');
// ***************************************************

// Multiple Pointers

primaryColor[0].addEventListener('input', () => updateColor(primaryColor[0]));
secondaryColor[0].addEventListener('input', () =>
  updateColor(secondaryColor[0])
);
speed[0].addEventListener('input', () => updateSpeed(speed[0]));
resetMP.style.visibility = 'hidden';
startMP.addEventListener('click', () =>
  multiplePointers(
    primaryColor[0].value,
    secondaryColor[0].value,
    speed[0].value
  )
);
multiplePointers;

// Sliding Window

primaryColor[1].addEventListener('input', () => updateColor(primaryColor[1]));
secondaryColor[1].addEventListener('input', () =>
  updateColor(secondaryColor[1])
);
speed[1].addEventListener('input', () => updateSpeed(speed[1]));
resetSW.style.visibility = 'hidden';
startSW.addEventListener('click', () =>
  slidingWindow(
    primaryColor[1].value,
    secondaryColor[1].value,
    speed[1].value,
    'red',
    'orange'
  )
);
slidingWindow;

// Frequency Counter

const checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function () {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else checkList.classList.add('visible');
};

startFC.addEventListener('click', () =>
  areThereDuplicates(input.value, speedFC.value)
);
resetFC.addEventListener('click', () => resetInput(speedFC.value));
resetFC.style.visibility = 'hidden';

caseSens.addEventListener('input', () => caseSensCheck());
spec.addEventListener('input', () => specCheck());

// CallBack Functions

const updateSpeed = (speed) => {
  return speed.value;
};

const updateColor = (color) => {
  return color.value;
};
