
let sentence = `Hello, my name is Katherine and I'm a recent graduate at the University of Washington Seattle campus majoring in
      Geography data science and minoring in Informatics. During my years of experience at UW I was involved in the Sisterhood Initiative for two years a seminar
      class for women of color. I've also been involved in the Geo Dat Club for winter quarter and spring quarter and
      participated in research. I was a co director for Geo Dat Club for my junior year and be able to grow
      this club so that more geography students can be able to have a space to explore different focuses in career.
      I also love to volunteer to be able to help in my community and am always open to have more opportunity like those.`;
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
