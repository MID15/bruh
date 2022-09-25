// DOM SELECTION

// document.getElementById() => element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.innerHTML = "Yeaa";

// document.getElementsByTagName() => HTMLCollection
// hasilnya berupa array
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightBlue';

// document.getElementsByClassName => HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.style.color = 'green';

// document.querySelector() => element
const p2 = document.querySelector('#b p');
p2.style.backgroundColor = 'orange';

const li = document.querySelector('#b ul li:nth-child(2)');
li.style.backgroundColor = 'orange';

const p3 = document.querySelector('p'); // hanya mengambil element pertama
p3.innerHTML = "query selector hanya mengambil element pertama";

// document.querySelectorAll() => NodeList
const p4 = document.querySelectorAll('p');
p[2].style.backgroundColor = "red";

// mengubah node root
const sectionB = document.getElementById('b');
const p5 = sectionB.getElementsByTagName('p');
p5[0].innerHTML = "diubah setelah mengubah node root";