let doc = document.querySelector('html');
let width = document.documentElement.offsetWidth;
doc.style.fontSize = 30 * (width / 750) + 'px';
console.log(doc.style.fontSize)