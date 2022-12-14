/**
 * JS DOM
 * Getting the value of the form
 */

// let formName = document.getElementById("form-name");
// let formMail = document.getElementById("form-mail");
// let formMessage = document.getElementById("form-message");
// let submitForm = document.getElementById("submit-form");
// let result = document.getElementById("result");
// let contact = document.getElementById("contact");

// contact.addEventListener("submit", function(event) {
//   event.preventDefault();
//   console.log(formName.value);
// })

$(document).ready(function() {
  let formName = $("#form-name");
  let formMail = $("#form-mail");
  let formMessage = $("#form-message");
  let submitForm = $("#submit-form");
  let result = $("#result");
  let contact = $("#contact");
  console.log("Triggered");

  $("#contact").submit(function (event) {
    event.preventDefault();
    
    $("#result").html(`${formName.val()}<br>${formMail.val()}<br>${formMessage.val()}`)
    $('#result').text($("input[name=form-name]").val());
  })
});
