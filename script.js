// const listItems = document.querySelectorAll("li");

// function toggleDone(e) {
//   if (!e.target.className) {
//     e.target.className = "done";
//   } else {
//     e.target.className = "";
//   }
// }

// listItems.forEach((item) => {
//   item.addEventListener("click", toggleDone);
// });



//-------------------------------------callbck funtion----------------------------//
// function makesandwich(callback) {
//   console.log("making your sandwich");
//   callback();
// }
// function callme() {
//   console.log("sandwich is ready, please come and eat.");

// }
// makesandwich(callme);

//2
// function funA(fun){
//   console.log('i will execute some statement  ')
//   console.log('and the when im done or whenever i want ')
//   console.log('i will call the callback function')
//   console.log('im done now, so im callig the callback next')
//   fun();
// }

// function funB() {
//   console.log('im from function B');
// }

// funA(funB)();


////-------------------------------------delay genarator----------------------------//
// setTimeout(() => {
//   console.log('printed now')
  
// }, 1000);

// setInterval(() => {
//   console.log('printed now')
// }, 1000);

//-------------------------------------with contineous dealy----------------------------//
// let ticks = 1;
// setInterval(() => {
//   console.log(ticks++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 11 * 1000);

//-----------------------------------------------------------------//

function patternGenerator(rows, patternFn) {
  for (let i = 1; i <= rows; i++) {
    console.log(patternFn(i, rows));
  }
}
patternGenerator(4, (i) => '$'.repeat(i));