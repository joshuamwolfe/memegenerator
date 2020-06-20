addEventListener('submit', function(e) {
	e.preventDefault();
  let img = new Image();
  let div = document.getElementById('picurl');
   
   
  img.onload = function() {
   
    div.innerHTML += '<img src="'+img.src+'" />'; 
   
  };
   
   
  img.src = 'image.jpg';
  
  
});


