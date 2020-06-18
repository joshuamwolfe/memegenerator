addEventListener('click', function(e){
  let input = document.getElementsByTagName("input");
  let currentClick = e.target;
  if (input == currentClick ) {
    input.value = '';
  }

})

