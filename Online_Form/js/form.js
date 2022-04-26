
var myDemo =document.getElementById("demo");
document.bgColor="white";

function pressButton(){

	
	var choice=0;
	// ask for user Input
    choice = parseInt(prompt("which website do you want\n 1: Age Care Guide-Home page\n 2: Age Care Guide-Product and Services\n 3: Age Care Guide-Contacts\n","1")); 
	// check for correct input
	while (choice<0 || choice>3)
	{
		// alert error
		alert("you have entered incorrect number.\n the number must be 1 to 3");
		 choice = parseInt(prompt("which website do you want\n 1: Age Care Guide-Home page\n 2: Age Care Guide-Product and Services\n 3: Age Care Guide-Contacts\n","1")); 
		
		
		
	}

	switch (choice) {
	case 1:
		// if user chosen 1 option open Age Care Guide home page
	       window.open( "https://www.agedcareguide.com.au/about", "myWindow", 
	      "status = 1, height = 800, width = 800, resizable = 0" );
	       return;
		   break;
		   // if user chosen 2 option open Age Care Guide Product and service page
	case 2:
			window.open( "https://www.agedcareguide.com.au/s/products-and-services", "myWindow", 
	      "status = 1, height = 800, width = 800, resizable = 0" );
	       return;	
		   break;
		   // if user chosen 1 option open Age Care Guide contact page
	case 3:
			window.open( "https://www.agedcareguide.com.au/contact", "myWindow", 
	      "status = 1, height = 800, width = 800, resizable = 0" );
	       return;
		   break;
		
		default:
				alert("Please choose number from 1 to 3 ");
			
}// end switch
}

// function for submit button 
 function validateUser()
{
	var firstName = document.getElementById("firstName");
	var firstNameError = document.getElementById("firstNameError");
	var lastName = 	document.getElementById("lastName");
    var lastNameError= document.getElementById("lastNameError");
	var postcode= 	document.getElementById("postcode");
    var postcodeError= document.getElementById("postcodeError");
	var email = document.getElementById("email");
    var emailError= document.getElementById("emailError");
    var number = document.getElementById("number");
    var numberError= document.getElementById("numberError");
	var ccv = document.getElementById("ccv");
    var ccvError = document.getElementById("ccvError");
    var cardmonth=document.getElementById("cardmonth").value;
    var cardyear=document.getElementById("cardyear").value;
    var date = new Date();
    var month =date.getMonth()+1;
    var year=date.getFullYear();
    var cardmonthError=document.getElementById("monthError");
    var cardyearError=document.getElementById("yearError");

  
	if(firstName.value=="")
	{
		
		firstNameError.style.color="blue";
		firstNameError.innerHTML="First Name required";
		firstName.focus();
		return false;
	}
	
	
    firstNameError.innerHTML="";
    firstName.style.color="black";
	lastName.focus();

 if (lastName.value=="")
	{
		lastNameError.style.color="blue";
		lastNameError.innerHTML="Last Name required";
		lastName.focus();//set focus back to the textfield to be fixed
		return false;//don’t clear the form entries
	}
	
	lastNameError.innerHTML="";//clear innerHTML error
	lastName.style.color="black";
	postcode.focus();

if (postcode.value=="")
	{
		postcodeError.style.color="blue";
		postcodeError.innerHTML="Postcode required";
		postcode.focus();//set focus back to the textfield to be fixed
		return false;//don’t clear the form entries
	}
	
	if(isNaN(postcode.value)||postcode.value.length!=4)
		 
	{
		
		postcodeError.style.color="blue";
		postcodeError.innerHTML="Postcode must be numeric and atleast 4 numbers.";
		postcode.focus();//set focus back to the textfield to be fixed
		return false;//don’t clear the form entries
    }

	
	
	postcodeError.innerHTML="";//clear innerHTML error
	postcode.style.color="black";
	email.focus();
	
	if(email.value=="")
	{
		emailError.style.color="blue";
		emailError.innerHTML="email address required ";
		email.focus();
		return false;
	}
	
	if (email.value.indexOf("@")==-1|| email.value.indexOf('.')==-1)
	{
		emailError.style.color="blue";
		emailError.innerHTML="email address is invalid- must contain '@' and '.' ";
		email.focus();
		return false;
	}

	// if email character is less than 8 return false
	if (email.value.length<8)
	{
		emailError.style.color="blue";
		emailError.innerHTML="email address must be minimum of 8 characters ";
		email.focus();
		return false;
	}
		
	emailError.innerHTML="";//clear innerHTML error
	email.style.color="black";
	number.focus();
	
	
	// if Card Number is blank
	if (number.value == "") {
    numberError.style.color = "blue";
    numberError.innerHTML = "Card Number required";
    number.focus();
    return false;
  }
// if cardnumber is not numeric or number is less than 16 
	if (number.value == "" || isNaN(number.value) || number.value.length != 16) {
    numberError.style.color = "blue";
    numberError.innerHTML = "credit card number must contain 16 numbers (not characters)";
    number.focus();
    return false;
  }
  numberError.innerHTML = "";
  number.style.background = "black";
  ccv.focus();
  
  // if CCV is blank 
  
   if (ccv.value == "") {
    ccvError.style.color = "blue";
    ccvError.innerHTML = "CCV required";
    ccv.focus();
    return false;
  }
  // if CCV is not numeric 
   if (isNaN(ccv.value)) {
    ccvError.style.color = "blue";
    ccvError.innerHTML = "CCV must be numeric";
    ccv.focus();
    return false;
  }
  
  
  
  
 // if CCV value is less than 3 
 if  (ccv.value.length != 3)
	{
    ccvError.style.color = "blue";
    ccvError.innerHTML = "ccv number must contain 3 numbers (not characters)";
    ccv.focus();
    return false;
    }
	
	ccv.innerHTML = "";
    ccv.style.background = "black";

if((cardmonth<month && cardyear==year)||cardyear<year)
{
	cardyearError.style.color="blue";
	cardyearError.innerHTML="Your card is not validated";
	return false;
}

cardyearError.innerHTML="";

return true;
  	
    
}  

// to change the backgroundColor
function changeBgd(textField) {
  textField.style.background = " lightblue ";
}

function resetBgd(textField) {
  textField.style.background = " yellow ";
}


// function for help button 
function helpButton(){

 
  var myWindow = window.open("", "", "width=500,height=500");
  myWindow.document.write("<p> Required fields cannot be left blank</p>");
  myWindow.document.write("<p> The email address must be a minimum of 5 characters and contain an @ and a .(dot)</p>");
  myWindow.document.write("<p> The postcode must contain four numbers</p>");
  myWindow.document.write("<p> The credit card month and year must be valid</p>");
  myWindow.document.write("<p> The CCV must be entered and must be a number</p>");
  myWindow.document.bgColor="pink";
}