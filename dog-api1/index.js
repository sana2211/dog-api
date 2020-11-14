
'use strict';

function getDogImage(numbers) {
  fetch('https://dog.ceo/api/breed/chow/images/random/'+numbers)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
}

function watchForm() {
  $('form').submit(event => {
     event.preventDefault();
    let numbers = $("#numbers").val();
    if(numbers >= 1 && numbers <= 50)
    {
       getDogImage(numbers);
    }
   else
   {
     alert("Please enter a number between 1 and 50");
     return;
   }
   
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});






/*'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}
function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}
  
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});*/