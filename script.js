// wait for the page to load before running AJAX request
$(document).ready(function() {
  // start the AJAX GET request. the first parameter is the URL with the data. the second parameter is a function that handles that response
  $.get('sentence.html', function(response) {
    // get the element on the page with the id of sentences and insert the response
    $('#sentences').html(response);
  });
});

$.get('this_doesnt_exist.html', function (data) {
  // won't get called because the .html file request doesn't exist
  doSomethingGood();
}).fail(function (error) {
  // this is called when an error occurs
  console.log('Something went wrong: ' + error.statusText);
});