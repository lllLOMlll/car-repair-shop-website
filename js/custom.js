$(document).ready(function(){

/***************************************************************************************************************
 *********************************************   TOOLTIP *****************************************************
 **************************************************************************************************************/ 
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

/***************************************************************************************************************
 *********************************************   CAROUSEL *****************************************************
 **************************************************************************************************************/ 
   $('.owl-carousel').owlCarousel({
     loop:true,
     margin:40,
     responsiveClass:true,
     responsive:{
        0:{
            items:1,
            nav:false
        },
        425:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            // loop:false
        }
    }


})

});

/***************************************************************************************************************
 *********************************************   FORM *****************************************************
 **************************************************************************************************************/ 

$(document).ready(function() {
  var errorColor = "#c11717"; /* RED */
  var validColor = "#00ff00"; /* GREEN */
  var defaultColor = "#808080"; /* GRAY */

/********************************************************************************************************
                                          FORM VALIDATION
 ********************************************************************************************************/
  /* setting up an event handler for when the form is submitted */
 $("form").submit(function() {
  var fname = $("input[name='fname']"),
  lname = $("input[name='lname']"),
  gender = $("input[name='gender']"),
  age = $("input[name='age']"),
  email = $("input[name='email']")



  /* add other fields of the form */
  isValidated = true,
  formValue = "";

/********************************************************************************************************
                                             RESET
 ********************************************************************************************************/
  $('#reset').click(function() {
    // Hide the span
    $('span').hide();

    // RESET COLOR AND BOX SHADOW
    
    // Gender 
    $(gender).parent().parent().find('span').hide();
  // Remove outline from the radio button that is not checked
    $('input[name="gender"]:not(:checked)').css({
      'outline': 'none'
    });
    $('input[name="gender"]:checked').css({
      'outline': 'none'
    });



    // Last name
    $(lname).css({
      'border-color': '',
      'box-shadow': ''
    });

    // First name
    $(fname).css({
      'border-color': '',
      'box-shadow': ''
    });

    // Age
    $(age).css({
      'border-color': '',
      'box-shadow': ''
    });

    // Phone
    $(email).css({
      'border-color': '',
      'box-shadow': ''
    })



    // reset the isValidated variable
    isValidated = true;
  });

/********************************************************************************************************
                                          FIELDS VALIDATION
 ********************************************************************************************************/
/************* GENDER  *************/
  if (!gender.is(':checked')) {
    $(gender).parent().parent().find('span').text("Gender is required.");
    $(gender).parent().parent().find('span').show("slow");
    $('.radio-male, .radio-female').css({
     'outline': '1px solid ' + errorColor
   });
    isValidated = false;
  } else {
    $(gender).parent().parent().find('span').hide();
  // Remove outline from the radio button that is not checked
    $('input[name="gender"]:not(:checked)').css({
      'outline': 'none'
    });
  // Apply a green outline only to the checked radio button
    $('input[name="gender"]:checked').css({
      'outline': '1px solid ' + validColor,
      'border-color': '',
      'box-shadow': ''
    });
  }




/************ LAST NAME ************/
  if ($(lname).val().length < 2 && $(lname).val().length != 0) {
    $(lname).next().text("Last Name cannot be less than 2 char.");
    $(lname).next().show("slow");
    $(lname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(lname).val().length == 0) {
    $(lname).next().text("Last name is required.");
    $(lname).next().show("slow");
    $(lname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if (!/^[a-zA-Z\-]+$/.test($(lname).val())) {
    $(lname).next().text("Last name can only contain letters and hyphen.");
    $(lname).next().show("slow");
    $(lname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }

/************ FIRST NAME ************/
  if ($(fname).val().length < 2 && $(fname).val().length != 0) {
    $(fname).next().text("First Name cannot be less than 2 char.");
    $(fname).next().show("slow");
    $(fname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(fname).val().length == 0) {
    $(fname).next().text("First name is required.");
    $(fname).next().show("slow");
    $(fname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if (!/^[a-zA-Z\-]+$/.test($(fname).val())) {
    $(fname).next().text("First name can only contain letters and hyphen.");
    $(fname).next().show("slow");
    $(fname).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }

/************* AGE  *************/
  if ($(age).val() == "") {
    $(age).next().text("Age is a required field");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(age).val() < 0) {
    $(age).next().text("Age cannot be a negative number");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(age).val() == 0 || $(age).val() < 18) {
    $(age).next().text("You must be over 18!");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  } else if ($(age).val() > 120) {
    $(age).next().text("You are over 120 years old. Really???");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
    isValidated = false;
  }


/************ EMAIL VALIDATION ************/
if ($(email).val().length == 0) {
  $(email).next().text("Email address is required.");
  $(email).next().show("slow");
  $(email).css({
    'border-color': errorColor,
    'box-shadow': 'none'
  });
  isValidated = false;
} else if (!/\S+@\S+\.\S+/.test($(email).val())) {
  $(email).next().text("Please enter a valid email address.");
  $(email).next().show("slow");
  $(email).css({
    'border-color': errorColor,
    'box-shadow': 'none'
  });
  isValidated = false;
}




/********************************************************************************************************
                                          DISPLAYING THE FORM
 ********************************************************************************************************/

  if (isValidated) {
    formValue += "> Form submitted <" + "\n\n";
    formValue += "Last Name:  " + $(lname).val() + "\n";
    formValue += "First Name:  " + $(fname).val() + "\n";
    formValue += "Age:  " + $(age).val() + "\n";
    formValue += "Courriel: " + $(email).val() + "\n";



    isValidated = confirm(formValue + "\n\nAre you sure you want to submit this form?\n");
  }

  return isValidated;
});

 /********************************************************************************************************
                                           FOCUS AND BLUR (ORANGE)
 ********************************************************************************************************/
$(fname).add(lname).add(age).add(email).focus(function() {

  $(this).css({
    'border-color': '#ffa500', /* ORANGE */
    '-moz-box-shadow' : '1px 1px 10px #ffA500',  
    '-webkit-box-shadow' : '1px 1px 10px #ffA500', 
    'box-shadow': '1px 1px 10px #ffa500'
  });
});

$(fname).add(lname).add(age).add(email).blur(function() {
  $(this).css({
    // 'border-color': '', /* Remove the border color */
    // '-moz-box-shadow' : '', /* Remove the Firefox box shadow */ 
    // '-webkit-box-shadow' : '', /* Remove the Chrome box shadow */ 
    // 'box-shadow': '' /* Remove the standard box shadow */
  });
});





 /********************************************************************************************************
                                           BLUR
 ********************************************************************************************************/
 /************* GENDER  *************/


 /************ LAST NAME ************/
$(lname).blur(
  function() {
    if ($(lname).val().length < 2 && $(lname).val().length != 0) {
      $(lname).next().text("Last Name cannot be less than 2 char.");
      $(lname).next().show("slow");
      $(lname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if ($(lname).val().length == 0) {
      $(lname).next().text("Last name is required.");
      $(lname).next().show("slow");
      $(lname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if (!/^[a-zA-Z\-]+$/.test($(lname).val())) {
      $(lname).next().text("Last name can only contain letters and hyphen.");
      $(lname).next().show("slow");
      $(lname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

 /************ FIRST NAME ************/
$(fname).blur(
  function() {
    if ($(fname).val().length < 2 && $(fname).val().length != 0) {
      $(fname).next().text("First Name cannot be less than 2 char.");
      $(fname).next().show("slow");
      $(fname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if ($(fname).val().length == 0) {
      $(fname).next().text("First name is required.");
      $(fname).next().show("slow");
      $(fname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else if (!/^[a-zA-Z\-]+$/.test($(fname).val())) {
      $(fname).next().text("Last name can only contain letters and hyphen.");
      $(fname).next().show("slow");
      $(fname).css({
        'border-color': errorColor,
        'box-shadow': 'none'
      });
    } else {
      $(this).next().hide("slow");
      $(this).css({
        'border-color': validColor,
        'box-shadow': 'none'
      });
    }
  });

 /************ AGE ************/
$(age).blur(function() {
  if ($(age).val() == ""){
    $(age).next().text("Age is a required");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if ($(age).val() < 0){
    $(age).next().text("Age cannot be a negative number");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if ($(age).val() == 0 || $(age).val() < 18){
    $(age).next().text("You must be over 18!");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if ($(age).val() > 120) {
    $(age).next().text("You are over 120 years old. Really???");
    $(age).next().show("slow");
    $(age).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else {
    $(this).next().hide("slow");
    $(this).css({
      'border-color': validColor,
      'box-shadow': 'none'
    });
  }
});

 /************ EMAIL VALIDATION ************/
$(email).blur(function() {
  if ($(email).val().length == 0) {
    $(email).next().text("Email address is required.");
    $(email).next().show("slow");
    $(email).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else if (!/\S+@\S+\.\S+/.test($(email).val())) {
    $(email).next().text("Please enter a valid email address.");
    $(email).next().show("slow");
    $(email).css({
      'border-color': errorColor,
      'box-shadow': 'none'
    });
  } else {
    $(this).next().hide("slow");
    $(this).css({
      'border-color': validColor,
      'box-shadow': 'none'
    });
  }
});


 /********************************************************************************************************
                                           KEYPRESS
 ********************************************************************************************************/
$(fname).add(lname).add(age).add(email).keypress(function() {
  if ($(this).val().length < 1) {
    $(this).css({
      'border-color': errorColor,
      '-moz-box-shadow' : '1px 1px 10px #F44336',
      'webkit-box-shadow' : '1px 1px 10px #F44336',
      'box-shadow': '1px 1px 10px #F44336',   /* RED */
    });
  } else {
    $(this).css({
      'border-color': validColor,
      '-moz-box-shadow' : '1px 1px 10px #00FF00',
      'webkit-box-shadow' : '1px 1px 10px #00FF00',
      'box-shadow': '1px 1px 10px #00FF00',   /* GREEN */
    });
  }
});

});



