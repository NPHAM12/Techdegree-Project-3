/******************************************
Treehouse Techdegree:
FSJS project 3 - Build an Interactive Form
Exceeds Expectations
Nguyen Pham
******************************************/
//Set focus on the first text field
//When the page loads, the name text field should be in focus by default.
$(document).ready(function() {
  $('#name').focus();

  /* OTHER JOB ROLE SELECTION */
  // Hide Other Role describle section
  $('#otherRole').hide();
  $('#title').on('change', function(e) {
    if ($('#title option:selected').val() === 'other')
      $('#otherRole').show();
    else
      $('#otherRole').hide();
  });

  /* "T-SHIRT" SELECTION*/
  // hide Select Theme option
  $('#design option[value="js puns"]').prev().hide();
  // $('#design option[value="js puns"]').prop("selected",true);
  //hide color dropdown initially
  $('#color').parent().hide();
  $('#design').change(function(e) {
    $('#color').parent().show(); // show color dropdown option when selecting design option
    $('#color').children('option').hide(); // hide all options
    // if ($(this).val() === 'js puns') {
    if ($('#design option[value="js puns"]').prop("selected") === true) {
      $('#color').val('cornflowerblue'); // set a drop down box value to Cornflower value
      $('#color').children('option[value="cornflowerblue"]').show();
      $('#color').children('option[value="darkslategrey"]').show();
      $('#color').children('option[value="gold"]').show();
    } else {
      $('#color').val('tomato'); //set a drop down box value to Tomato value
      $('#color').children('option[value="tomato"]').show();
      $('#color').children('option[value="steelblue"]').show();
      $('#color').children('option[value="dimgrey"]').show();
    }
  });

  /*”REGISTER FOR ACTIVITIES” SECTION*/
  const $p = $('<h4 id="total"> </h4>');
  $(".activities").append($p); // insert Total to activities section
  $('.activities h4').hide();
  let cost = 0;
  $('.activities').on('click', function(e) {
    const target = e.target;
    // if Main Conference box is checked
    if (target === $('input[name="all"]').get(0)) {
      if ($('input[name="all"]:checked').length !== 0) {
        cost += 200;
      } else {
        cost -= 200;
      }
    }
    // JavaScript Frameworks
    if (target === $('input[name="js-frameworks"]').get(0)) {
      if ($('input[name="js-frameworks"]:checked').length !== 0) {
        $('input[name="express"]').attr('disabled', true);
        $('input[name="express"]').parent().css('color', 'grey');
        cost += 100;
      } else {
        $('input[name="express"]').attr('disabled', false);
        $('input[name="express"]').parent().css('color', 'black');
        cost -= 100;
      }
    }

    // JavaScript Libraries
    if (target === $('input[name="js-libs"]').get(0)) {
      if ($('input[name="js-libs"]:checked').length !== 0) {
        $('input[name="node"]').attr('disabled', true);
        $('input[name="node"]').parent().css('color', 'grey');
        cost += 100;
      } else {
        $('input[name="node"]').attr('disabled', false);
        $('input[name="node"]').parent().css('color', 'black');
        cost -= 100;
      }
    }
    //Express Workshop
    if (target === $('input[name="express"]').get(0)) {
      if ($('input[name="express"]:checked').length !== 0) {
        $('input[name="js-frameworks"]').attr('disabled', true);
        $('input[name="js-frameworks"]').parent().css('color', 'grey');
        cost += 100;
      } else {
        $('input[name="js-frameworks"]').attr('disabled', false);
        $('input[name="js-frameworks"]').parent().css('color', 'black');
        cost -= 100;
      }
    }
    // Node.js Workshop
    if (target === $('input[name="node"]').get(0)) {

      if ($('input[name="node"]:checked').length !== 0) {
        $('input[name="js-libs"]').attr('disabled', true);
        $('input[name="js-libs"]').parent().css('color', 'grey');
        cost += 100;
      } else {
        $('input[name="js-libs"]').attr('disabled', false);
        $('input[name="js-libs"]').parent().css('color', 'black');
        cost -= 100;
      }
    }
    // Build tools Workshop
    if (target === $('input[name="build-tools"]').get(0)) {
      if ($('input[name="build-tools"]:checked').length !== 0) {
        cost += 100;
      } else {
        cost -= 100;
      }
    }
    // npm Workshop
    if (target === $('input[name="npm"]').get(0)) {
      if ($('input[name="npm"]:checked').length !== 0) {
        cost += 100;
      } else {
        cost -= 100;
      }
    }
    // $('h4').html("Cost: $" + cost); // get the cost to html
    $('.activities h4').html(`Cost: $${cost}`).show(); // get the cost to html
  });

  /* "PAYMENT INFO" Section */
  // Hide Select Method option
  $('#payment option[value="select_method"]').hide();
  $('div p:contains("PayPal")').hide();
  $('div p:contains("Bitcoin")').hide();
  
  // credit card payment is default
  $('#credit-card').show();
  $('#payment option[value="credit card"]').prop('selected', true)

  // Show Payment Information
  $('#payment').change(function() {
    //Credit card Option
    // if($(this).val() === "credit card"){}
    if ($('#payment option:selected').val() === "credit card") {
      $('#credit-card').show();
      $('div p:contains("PayPal")').hide();
      $('div p:contains("Bitcoin")').hide();
    }
    //Paypal Option
    else if ($('#payment option:selected').val() === "paypal") {
      $('#credit-card').hide();
      $('div p:contains("Bitcoin")').hide();
      $('div p:contains("PayPal")').show();
    }
    //Bitcoin Option
    else {
      $('#credit-card').hide();
      $('div p:contains("PayPal")').hide();
      $('div p:contains("Bitcoin")').show();
    }
  });


  /*FORM VALIDATION*/
  //Error indicator
  function addNote(element, text) {
    let p = $('<span class="error-message"></span>');
    p.text(text);
    element.after(p);
  }

  //Error indicator
  function indicatorErr(element) {
    element.css({
      'border': '3px solid red'
    });
    element.prev().css({
      'color': 'red'
    });
    //special case: remove border at Main Conference checkbox
    if (element = $('.activities input[name="all"]').parent()) {
      element = element.css({
        'border': ''
      });
    }
  }

  // reset Error indicator
  function resetErr(element) {
    element.css({
      'border': ''
    });
    element.prev().css({
      'color': ''
    });
  }

  //Validate Name
  function checkName() {
    const pattern = /^[a-z\s]+$/i;
    const name = pattern.test($('#name').val()); //return true or false
    if (!name) {
      indicatorErr($('#name'));
      return name;
    }
    resetErr($('#name'));
    return name;
  }

  // Validate Email
  function checkEmail() {
    const pattern = /^[^@]+@[^@.]+\.[a-z]+$/i;
    const email = pattern.test($('#mail').val()); //return true or false
    if (!email) { // no correct input value
      indicatorErr($('#mail'));
      return email;
    }
    resetErr($('#mail'));
    return email;
  }
  //Validate Register for Activities
  function checkRegister() {
    if ($('.activities input[type="checkbox"]:checked').length === 0) {
      indicatorErr($('.activities input[name="all"]').parent());
      return false;
    }
    resetErr($('.activities input[name="all"]').parent());
    return true;
  }

  //Validate Card number
  function checkCardNumber() {
    const patternCardNumber = /^[\d]{13,16}$/;
    const cardNumber = patternCardNumber.test($('#cc-num').val());
    if (!cardNumber) {
      indicatorErr($('#cc-num'));
      return cardNumber;
    }
    resetErr($('#cc-num'));
    return cardNumber;
  }

  //Validate Zipcode
  function checkZipcode() {
    const patternZipCode = /^[\d]{5}$/;
    const zipCode = patternZipCode.test($('#zip').val());
    if (!zipCode) {
      indicatorErr($('#zip'));
      return zipCode;
    }
    resetErr($('#zip'));
    return zipCode;
  }

  //Validate CVV
  function checkCvv() {
    const patternCvv = /^[\d]{3}$/;
    const cvv = patternCvv.test($('#cvv').val());
    if (!cvv) {
      indicatorErr($('#cvv'));
      return cvv;
    }
    resetErr($('#cvv'));
    return cvv;
  }

  /*Submit Form*/
  $('button').on('click', function(e) {
    // Clear error message
    $("span.error-message").remove();
    //Check all requirements at first
    if (!checkName()) {
      e.preventDefault();
      addNote($('#name'), "Name should NOT be a number or blank!");
    }
    if (!checkEmail()) {
      e.preventDefault()
      addNote($('#mail'), "Email should NOT be empty or have 2 more than @!");
    };
    if (!checkRegister()) {
      e.preventDefault();
      addNote($('.activities'), "Do NOT forget to select at leat 1 option!");
    };
    if (!checkCardNumber()) {
      addNote($('#cc-num'), "Number should be 13 - 16 digits!");
    }
    if (!checkZipcode()) {
      addNote($('#zip'), "Number should be 5 digits!");
    }
    if (!checkCvv()) {
      addNote($('#cvv'), "Number should be 3 digits!");
    }

    //Validate payment method
    if ($('#payment option:selected').val() !== "credit card") {
      if ($('#payment option:selected').val() !== "paypal") {
        if ($('#payment option:selected').val() !== "bitcoin") {
          addNote($('#payment'), "Please, select a payment");
          e.preventDefault();
        }
      }
    } else {
      // Validate card information if payment method is credit card
      if ($('#payment option:selected').val() === "credit card") {
        if (!checkCardNumber()) {
          e.preventDefault();
        }
        if (!checkZipcode()) {
          e.preventDefault();
        }
        if (!checkCvv()) {
          e.preventDefault();
        }
      }
    }
    if (!confirm('Would you like to submit the application?')) {
      e.preventDefault();
    }

  });
});
