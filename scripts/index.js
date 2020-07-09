console.log('Currentfile: memegenerator');
let img = document.getElementsByTagName('img');

addEventListener('submit', function(e) {
  e.preventDefault(); 

  //target inputs by id
  let UIurl = document.getElementById('picurl');
  let inputTextTop = document.getElementById('text_top');
  let inputTextLower = document.getElementById('text_lower');

  //target inputs by value
  let memeToBe = UIurl.value;
  let memeTextTop = inputTextTop.value;
  let memeTextLower = inputTextLower.value;

  //create an image and add attributes
  let img = document.createElement('img');  
  img.setAttribute('src', memeToBe);
  img.setAttribute('class', 'meme');
   

  // append to the document with set attribute using said variable
  let memeLocation = document.getElementById('location');
  let memeTextLocationLower = document.getElementById('top-left');
  let memeTextLocationTop = document.getElementById('bottom-left');
  memeTextLower.innerText = memeTextLower;

  memeLocation.appendChild(img);
  memeTextLocationTop.appendChild(memeTextTop);
  memeTextLocationLower.appendChild(memeTextLower);
  // memeLocation.appendChild(memeTextTop);
  // memeLocation.appendChild(memeTextLower);
  
  
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
  let clickedElement = e.target;
  console.log(clickedElement);       
  
  let targetCheck = clickedElement.classList.contains('meme');
  
  if (targetCheck){  
    clickedElement.remove(); 
  }
})


//verb/noun for naming

//clean code book

//delete hint

//Just like with submitting a new meme, to delete a meme you may need access to the event object. When you click on delete, take a look at what the e.target is. Using JavaScript, can you navigate from the target to the meme, and then remove the meme from the DOM?
//add text hint

//You could do this by:
//1.Add a div around your img and text and give it a position: relative.

//2.To position text divs, give them each a position: absolute and set their positioning by using the properties of top, right, bottom and left.

//3.If you need help on positioning, check out our free resources.

// let meme = document.querySelector('.meme'); 

// let div = document.getElementById('picurl');

// let img = document.getElementsByTagName('img');

// let class = document.getElementsByClassName('meme');

// //looking to classlist

// //generate unique ID for picture

// let generate = function() {
  //   let counter = 0;
  //   for(let counter of count) {
    //    counter++; 
    //   }
//   return counter;
// };

//url for pic test
//https://www.fillmurray.com/640/360
// console.log(div.classList.contains("foo"));