addEventListener('submit', function(e) {
	e.preventDefault();
  // let img = new Image();
  let UIurl = document.getElementById('picurl');
  let test = UIurl.value; // rename variable
  console.log(test);
  let img = document.createElement('img');
  img.setAttribute('src', test);
  // append to the document with set attribute using said variable
  let memeLocation = document.getElementById('location');
  memeLocation.appendChild(img);
  // img.onload = function() {
   
  //   div.innerHTML += '<img src="'+img.src+'" />'; 
   
  // };
   
   
  // img.src = 'image.jpg';
  
  
});


