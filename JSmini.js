
// script with two varaibles/numbers 


var num1 = 3;
var num2 = 5;
var result = num1 +num2


console.log(result);
alert(result);


// script with two varaibles/string 


var str1 = "blue" ;
var str2 = "sky" ;
var str3 = str2 + " is " + str1; 

console.log(str3);
alert(str3);


//  multidimensional array

var environment = ["oceans","ice", "air", "ground"];
var changes = ["rising", "melting", "levels"];
var climatechange = [environment,changes];

console.log(climatechange[0][0] + " " + climatechange[1][2] + " "+ "are" + " " + climatechange[1][0]);

console.log(climatechange[0][1] + " " + "cups" + " " + "are" + " " + climatechange[1][1]); 


// check if var is less than 100

var x = 117


if ( x < 100 ) {
	alert("your number is less than 100");

}

if ( x >100 ){
	alert("your number is bigger than 100, and equals" + " " + x );
}

// name function 

// option 1

function person(firstName,lastName) {
		return alert (firstName + " " + lastName)

}

var result  = person("Dana", "Uchto");


// option 2 

var firstName = prompt("Please enter your name",);
var lastName = prompt("Please enter your last name",);
var person = firstName + " " + lastName; 

if (person) {
	alert("Hello " + person + "! How are you today?") 

} 


// function "virtual door "

function openGate(gateNum){

	if (gateNum === 1) {
		alert("YOU OPENED DOOR NUMBER 1");
		alert("YOU WON A CHOCOLATE CAKE");
	} else if (gateNum === 2) {
		alert("YOU OPENED DOOR NUMBER 2")
		alert("YOU WON GIRL SCOUT COOKIES");
	} else if (gateNum === 3) {
		alert("YOU OPENED DOOR NUMBER 3")
		alert("YOU WON A CHEESKAKE");
	}

}

// openGate(1)
openGate(2)
// openGate(3)   







