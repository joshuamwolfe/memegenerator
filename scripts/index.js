console.log('Currentfile: memegenerator');

addEventListener("submit", function(e) {
  e.preventDefault();


  //find the value of the pic url
  let UIurl = document.getElementById("picurl");
  let memeToBe = UIurl.value;
  let num;

  //looking to classlist
  
  let img = document.createElement("img");
  img.setAttribute('id', num);
  img.setAttribute("src", memeToBe);
  
  // append to the document with set attribute using said variable
  let memeLocation = document.getElementById("location");
  memeLocation.appendChild(img);
  
  //url for pic test
  //https://www.fillmurray.com/640/360

  //find the value of the text upper
  let textUpper = document.getElementById('text_top');
  let textUpperValue = textUpper.value;
  // img.innerText(textUpperValue);
  
  //find the value of the text lower
  let textLower = document.getElementById('text_lower');
  let textLowerValue = textLower.value;

  //style image width html element

  
});


addEventListener ('click', function (e) {
  let currentClick = e.target;
  let img = document.getElementById('i');
  console.log(currentClick);

  if (currentClick === img) {
    document.getElementById('i').style.display = 'none';
  }
})

//how 