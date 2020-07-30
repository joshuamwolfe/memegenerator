console.log('Currentfile: memegenerator');
let img = document.getElementsByTagName('img');+
addEventListener('submit', function(e) {
  e.preventDefault();
  let UIurl = document.getElementById('picurl');
  let memeToBe = UIurl.value;

  let img = document.createElement('img');
  img.setAttribute('src', memeToBe);
  img.setAttribute('class', 'meme');
  
  let memeLocation = document.getElementById('location');
  memeLocation.appendChild(img);

  let divTop = document.createElement('div');
  let inputText = document.getElementById('text_top');
  let textValueTop = inputText.value;
  divTop.setAttribute('id', 'text-top');
  divTop.innerText = textValueTop;
  memeLocation.appendChild(divTop);


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
