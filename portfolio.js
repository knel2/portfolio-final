//import React from 'react'
// let string = document.querySelector('');
// for(let i = 0; i < string.length; i++) {

// }
// let links = document.querySelectorAll('li');
// //let navlink = document.querySelector('.nav-links');
// function clicklinks () {
//   console.log("works")
// }

// for(let i = 0; i < links.length; i++) {
// links[i].addEventListener("click", clicklinks)
// }


let sentence = "Hello welcome to my portfolio my name is Katherine I'm a junior at the University of Washington studying Geography Data Science with a minor in Leadership & Informatics";
let section = document.querySelector('.output');
let intro = document.querySelector('.projects');
let contents = document.querySelector('#content');
let count = 0;
window.onload = function selfType() {
  if (count < sentence.length) {
    document.querySelector('#content').innerHTML +=  sentence.charAt(count);
    count++;
    setTimeout(selfType, 50);
  }
}


/*
let string = "Hello welcome to my portfolio my name is Katherine I'm a junior at the University of Washington studying at Geography Data Science"
let section = document.querySelector('.output');
let contents = document.querySelector('#content');
for(let i = 0; i < string.length; i++) {
  let appendString = string.charAt(i);
  content.innerHTML = appendString;
}

*/