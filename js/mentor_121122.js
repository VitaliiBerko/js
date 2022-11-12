// Отримати дані з API та вивести їх на сторінку
// http://universities.hipolabs.com/search?country=Ukraine
// http://universities.hipolabs.com/search?country=United+States

// const inputRefs = document.querySelector("#add");

// const btnSearch = document.querySelector("button");
// const listRefs = document.querySelector('.coutry-list');

// // console.log(listRefs);

// btnSearch.addEventListener("click", onClickGetCountryList);

// function onClickGetCountryList(e) {
//   e.preventDefault();
//   fetch(`http://universities.hipolabs.com/search?country=${inputRefs.value}`)
//     .then((r) => r.json())
//     .then((data) => renderCountryList(data));
// }

// function renderCountryList(list) {
//   const marcup = list.map(
//       ({ name, web_pages }) =>  {
//          const [url]=web_pages
//           return `
//         <li>
//       <a href="${url}" target ='_blank'>${name}</a>
//     </li>
//     `}
//     ).join('');
    
//     listRefs.insertAdjacentHTML('afterbegin', marcup);
// }


fetch('https://api.publicapis.org/entries')
//     {
//     method: 'PUT',
//     body: JSON.stringify({
//     "name": "morpheus",
//     "job": "zion resident"
// }
// )
// })    
// .then(responce => responce.json())
// .then(responce => renderList(responce.result) )

function renderList(list) {
  const markup = list.map(([r,g,b]) => `<li style="background:rgb(${r},${g},${b}); width: 50px; height:50px; list-style:none;"></li>`).join("")
  imgs.insertAdjacentHTML("beforeend", markup)

}
