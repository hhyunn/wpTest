// import plus from './plus.js';
// import './style.css';

// console.log(plus(2, 3));



import './style.css';
import rabbit from './rabbit.png';  // 아까는 css에서 불러왔는데, 지금은 js에서 불러오고 있다는 차이점이 있음

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${rabbit}"/>`;
})