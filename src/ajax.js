'use strict';

// High level dev notes: the require statement below is currently throwing an error because requirejs isnt being properly referenced - it has been a while since I've set up an environment from scratch.

// import $ from "jquery";

var $ = require("jquery");

// Inent was to fire the function below when the submit button is click -> make ajqa requet to php file. Once you can echo the variables from the php file, the rest is easy. Look into the php mail() function

// See for reference. https://stackoverflow.com/questions/20738329/how-to-call-a-php-function-on-the-click-of-a-button



$('#btnContactUs').click(function() {
  // prevent page from refreshing on button click
  event.preventDefault();
  console.log('firing function from pewdost.js');

  var url = "contact.php";

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // var data = [name, email, subject, message];
  //
  // data = "name=" + name + "&email=" +  email + "&subject=" + subject + "&message=" + message;

  $.ajax({
    type: "POST",
    url: url,
    data: {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    // data: data
  }).done(function(msg) {
    alert("Data Saved: " + msg);
  });


  // clear form fields after submission.
  setTimeout(function() {
    $('#contact-form input[type="text"]').val('');
    $('#contact-form input[type="email"]').val('');
    $('#message').val('');
  }, 5000);

});
