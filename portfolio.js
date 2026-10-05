
let sentence = `Hello welcome to my portfolio my name is Katherine. 
I'm a recent graduate at the University of Washington with 
a Bachelors of Arts in Geography Data Science with a minor in Informatics(IT)`;
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
