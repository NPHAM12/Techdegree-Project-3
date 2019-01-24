//”REGISTER FOR ACTIVITIES” SECTION
const $p = $('<h4 id="total"> <h4>');
$(".activities").append($p); // insert Total to activities section
let total = 0;

$('.activities').on('click', function(e){
  // if Main Conference box is checked
              
  //JavaScript Frameworks
  if($('input[name="js-frameworks"]:checked').length !== 0){

    $('input[name="express"]').attr('disabled', true);
    $('input[name="express"]').parent().css('color', 'grey');

    $('input[name="build-tools"]').attr('disabled', true);
    $('input[name="build-tools"]').parent().css('color', 'grey');
  }
  else {
    $('input[name="express"]').attr('disabled', false);
    $('input[name="express"]').parent().css('color', 'black');

    $('input[name="build-tools"]').attr('disabled', false);
    $('input[name="build-tools"]').parent().css('color', 'black');
  }

  //Express Workshop
  if($('input[name="express"]:checked').length !== 0){

    $('input[name="js-frameworks"]').attr('disabled', true);
    $('input[name="js-frameworks"]').parent().css('color', 'grey');

    $('input[name="build-tools"]').attr('disabled', true);
    $('input[name="build-tools"]').parent().css('color', 'grey');
  }
  else {
    $('input[name="js-frameworks"]').attr('disabled', false);
    $('input[name="js-frameworks"]').parent().css('color', 'black');

    $('input[name="build-tools"]').attr('disabled', false);
    $('input[name="build-tools"]').parent().css('color', 'black');
  }

// JavaScript Libraries
if($('input[name="js-libs"]:checked').length !== 0){
  $('input[name="node"]').attr('disabled', true);
  $('input[name="node"]').parent().css('color', 'grey');

  $('input[name="npm"]').attr('disabled', true);
  $('input[name="npm"]').parent().css('color', 'grey');
}
else {
  $('input[name="node"]').attr('disabled', false);
  $('input[name="node"]').parent().css('color', 'black');

  $('input[name="npm"]').attr('disabled', false);
  $('input[name="npm"]').parent().css('color', 'black');
}

// Node.js Workshop
if($('input[name="node"]:checked').length !== 0){
  // alert("b");
  $('input[name="js-libs"]').attr('disabled', true);
  $('input[name="js-libs"]').parent().css('color', 'grey');

  $('input[name="npm"]').attr('disabled', true);
  $('input[name="npm"]').parent().css('color', 'grey');
}
else {
  $('input[name="js-libs"]').attr('disabled', false);
  $('input[name="js-libs"]').parent().css('color', 'black');

  $('input[name="npm"]').attr('disabled', false);
  $('input[name="npm"]').parent().css('color', 'black');
}
