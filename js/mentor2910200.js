// // Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх,
// вниз, вілво, вправо //

// Напишіть код JavaScript, щоб кубик рухався, коли настискати стрілки вверх, вниз, вілво, вправо

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>Change the content of a cell</title>
// <style>
//   .cube {
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   background: green;
// }
// </style>
// </head>
// <body>
//
// <div class="cube" style="top: 0; left: 0;"></div>
// </body>
// </html>

// const cube = document.querySelector('.cube');

// console.log(cube);

// window.addEventListener('keydown', onMove);

// function onMove(evt) {
// 	console.log(evt);
// 	if (evt.code === 'ArrowRight') {
// 		console.log(parseInt(cube.style.left));
// 		cube.style.left = `${parseInt(cube.style.left) + 10}px`;
// 	} else if (evt.code === 'ArrowLeft') {
// 		console.log(parseInt(cube.style.left));
// 		cube.style.left = `${parseInt(cube.style.left) - 10}px`;
// 	} else if (evt.code === 'ArrowDown') {
// 		cube.style.top = `${parseInt(cube.style.top) + 10}px`;
// 	} else if (evt.code === 'ArrowUp') {
// 		cube.style.top = `${parseInt(cube.style.top) - 10}px`;
// 	}
// };

// Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

// <!DOCTYPE html>
// <html><head>
{
  /* <meta charset=utf-8 />
  <title>Remove items from a dropdown list</title>
// </head>
// <body>
<form>
  <select id="colorSelect">
    <option>Red</option>
    <option>Green</option>
    <option>White</option>
    <option>Black</option>
  </select>
  <input id="removeOption" type="button" value="Select and Remove">
    <br/>
    <br/>
    <br/>
    <label htmlFor="add">Add new option</label> <br/>
    <input id="add" type="text" placeholder="New option">
    <input id="addOption" type="button" value="Add option">
</form>
// </body>
// </html> */
}

// const selectRef = document.getElementById('colorSelect');
// console.log(selectRef);
// const input = document.getElementById('add');

// const removeBtn = document.getElementById('removeOption');
// const addBtn = document.getElementById('addOption');

// removeBtn.addEventListener('click', onRemoveOption);
// addBtn.addEventListener('click', onAddEl);

// function onRemoveOption() {
//     selectRef.selectedOptions[0].remove();
// }

// function onAddEl() {
//     if (!input.value) {
//         return
//     }
//     const newEl = `<option>${input.value}</option>`;
//     selectRef.insertAdjacentHTML('beforeend', newEl);
//     input.value = '';
// }

// Напишіть програму JavaScript, щоб виділяти жирні слова (<strong>) наступного абзацу, наводячи курсор миші на посилання

/* <head>
  <meta charSet="UTF-8">
    <title>Get And Style All Tags</title>
</head>
<body>
<p>[<a href="#" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following
  paragraph will be highlighted</a>]</p>
<p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to
  intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and
  write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
</body> */

// const linkRef = document.querySelector("#link");
// const textRef = document.querySelector("#text");

// linkRef.addEventListener("mouseover", onMouseOver);
// textRef.addEventListener("mouseout", onMouseOut);

// function onMouseOver() {
//     console.log("mouseover");
//     changeColor('red');
// }
// function onMouseOut() {
//     console.log("mouseout");
//     changeColor('green');
// }

// function changeColor(color) {
//   const allListStrong = textRef.querySelectorAll("strong");
//   console.log(allListStrong);
//     allListStrong.forEach((el) => {
//         el.style.color = color;
//   });
// }

// // onMouseOut('green');
// // onMouseOver('red');

// Делегування подій
// 1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
// 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// 3. Після перезавантаження сторінки активна комірка зберігається

// <style>
//   table {
//   margin: 0 auto;
//   border-collapse: collapse;
// }

//   td {
//   width: 30px;
//   height: 30px;
//   border: 1px solid #ccc;
//   cursor: pointer;
// }/




// </style>

// <body>
// <div class="board">
//   <table>
//     <tbody>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td class="active"></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr style="display: block;">
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     </tbody>
//   </table>
// </div>


// const boardRef = document.querySelector(".board");

// boardRef.addEventListener('click', onTableClick);

// function onTableClick(e) {
//     // console.dir(e.target);
//     console.log('onTableClick');
//     // console.log(e.currentTarget);
//     if (e.target.tagName === 'TD') {
//         e.target.style.backgroundColor= "green"
//     }

// }

// const tdActive = document.querySelector(".active");

// tdActive.addEventListener('click', onTdActiveClick);

// function onTdActiveClick(e) {
//     e.stopPropagation();
//     e.target.style.backgroundColor = 'red';
//      console.log('onTdActiveClick');
// }
//  Напишіть програму JavaScript TodoList для добавлення нових завдань у список

// <form>
//   <label htmlFor="add">Add new task</label> <br/>
//   <input id="add" type="text" placeholder="New task">
//     <input id="addTask" type="button" value="Add task">


// </form>
// <ul id="tasks"></ul>

const form = document.querySelector('form');
const tasks = document.querySelector('#tasks');

form.addEventListener('submit', onAddTaskSubmit);

function onAddTaskSubmit(e) {
    e.preventDefault()
    // console.dir(e.target);
    const value = e.target[0].value;
    const newTaskLi = `<li class='item'>${value} <button type="button" data-action="remove">Remove</button></li>`
    tasks.insertAdjacentHTML('beforeend', newTaskLi);
    e.target[0].value = '';
}

tasks.addEventListener('click', onRemoveClick);

function onRemoveClick(e) {
    console.dir(e.target);
    // dataset: DOMStringMap { action → "remove" }
    console.log(e.target.dataset.action);
action: "remove"
    if (e.target.dataset.action === 'remove') {
        e.target.closest(".item").remove();

        console.log(e.target.dataset.action);
    }
}