'use strict';

function getDogImage(userInput, breed) {
  fetch('https://dog.ceo/api/breed/'+breed+'/images/random/'+userInput)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    .catch(error => alert("Breed not found! :-("));
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
    let breed = $("#breed").val();
    getDogImage(userInput, breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});