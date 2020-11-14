'use strict';

function getDogImage(userInput) {
  fetch('https://dog.ceo/api/breeds/image/random/'+userInput)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  $('.results-images').html("");
  responseJson.forEach((img)=> $('.results-images').append(
    `<img src="${img}">`
  ))
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $("#number-pics").val();
      getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});