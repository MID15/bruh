// // element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Diubah menggunakan js</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// // element.style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'salmon';

// // element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'indra');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.getAttribute('href');
// a.removeAttribute('id');

// // element.classList()
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label');
// p2.classList.item(1);
// p2.classList.contains('label');
// p2.classList.replace('label', 'labels');

// Node Manipulation
// buat elemen baru
const pBaru = document.createElement('p');
const pIsi = document.createTextNode('paragraf baru');

// simpan tulisan ke element
pBaru.appendChild(pIsi);

// meletakkan element
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const lBaru = document.createElement('li');
const lIsi = document.createTextNode('item baru');

lBaru.appendChild(lIsi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(lBaru, li2);

const a = document.querySelector('a');
sectionA.removeChild(a);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const hBaru = document.createElement('h2');
const hIsi = document.createTextNode('Judul Baru')

hBaru.appendChild(hIsi);

sectionB.replaceChild(hBaru, p4);

pBaru.style.backgroundColor = 'lightGreen';
lBaru.style.backgroundColor = 'lightGreen';
hBaru.style.backgroundColor = 'lightGreen';