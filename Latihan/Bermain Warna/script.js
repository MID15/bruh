const tChange = document.getElementById('tChange');

tChange.addEventListener('click', function(){
  document.body.classList.toggle('biruMuda');
});

const tRandom = document.createElement('button');
const tRandomText = document.createTextNode('Warna Random');
tRandom.appendChild(tRandomText);
tRandom.setAttribute('type', 'button');
tChange.after(tRandom);

tRandom.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ r + ', '+ g + ', '+ b + ')';
});

const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function(){
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = 'rgb('+ r + ', '+ g + ', '+ b + ')';
});

sGreen.addEventListener('input', function(){
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = 'rgb('+ r + ', '+ g + ', '+ b + ')';
});

sBlue.addEventListener('input', function(){
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = 'rgb('+ r + ', '+ g + ', '+ b + ')';
});

document.body.addEventListener('mousemove', function(event){
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos + ', '+ yPos + ', 100)';
});