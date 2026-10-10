
let sentence = `Hello, welcome to my portfolio! `;
let section = document.querySelector('.output');
let intro = document.querySelector('.sum');
let contents = document.querySelector('#content');
let count = 0;
window.onload = function selfType() {
  if (count < sentence.length) {
    document.querySelector('#content').innerHTML +=  sentence.charAt(count);
    count++;
    setTimeout(selfType, 50);
  }
}
