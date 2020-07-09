console.log('Currentfile: memegenerator');
let img = document.getElementsByTagName('img');

addEventListener('submit', function(e) {
  e.preventDefault();

  let UIurl = document.getElementById('picurl');
  let memeToBe = UIurl.value;  

  let img = document.createElement('img');  
  img.setAttribute('src', memeToBe);
  img.setAttribute('class', 'meme');
  
  // append to the document with set attribute using said variable
  let memeLocation = document.getElementById('location');
  memeLocation.appendChild(img);
  
  //url for pic test
  //https://www.fillmurray.com/640/360

  //add text to image
  //get text values
  let inputText = document.getElementById('text_top');
  let textValue = inputText.value;
  console.log('input value: ' + textValue);
  
});


addEventListener ('click', function (e) {
  let clickedElement = e.target;
  console.log(clickedElement);

  let targetCheck = clickedElement.classList.contains("meme");

  if (targetCheck) {
    clickedElement.remove();
  }
})