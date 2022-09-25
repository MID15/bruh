const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

// thumbs.forEach(function(thumb){
//   thumb.addEventListener('click', function(e){
//     e.target.style.display = 'none'
//   });
// });

container.addEventListener('click', function(e){
  if(e.target.className == 'thumb'){
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(() => {
      jumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(function(thumb){
      if(thumb.classList.contains('active')){
        thumb.classList.remove('active');
      }

      // thumb.className = 'thumb';
    });
    
    e.target.classList.add('active');
  }
});

