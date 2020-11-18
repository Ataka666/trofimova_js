/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');
let currentDrag;
let startX = 0;
let startY = 0;

document.addEventListener('mouseup', (e) => {
  if (currentDrag) {
    currentDrag.style.left = e.clientX - startX + 'px';
    currentDrag.style.left = e.clientY - startY + 'px';
  }
});

export function createDiv() {
  const div = document.createElement('div');
  div.textContent = '';

  div.style.background = generateColor();

  div.style.height = randomInteger(1, 300) + 'px';
  div.style.width = randomInteger(1, 300) + 'px';

  div.style.left = randomInteger(1, window.innerWidth) + 'px';
  div.style.top = randomInteger(1, window.innerHeight) + 'px';

  div.classList.add('draggable-div');

  div.addEventListener('mousedown', (e) => {
    currentDrag = div;
    startX = e.offsetX;
    startY = e.offsetY;
  });

  div.addEventListener('mouseup', (e) => (currentDrag = false));

  return div;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  homeworkContainer.appendChild(createDiv());
});

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
