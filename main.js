var x=true;


var y=true


var victimsArrObj = []

while (x) {
	var victims = prompt("how many victims would you like to enter?");
	if (isNaN(victims)===true)  { 
		alert("please enter a number");
	}
	else {
		x=false;
		victimsArrObj.length = victims;
		
		for (var i=victims; i>0; i--) {
			var n = prompt("thanks, please enter the name of one of the victims.");
			var p = prompt("please enter this victim's phone number");
			var s = prompt("please enter this victim's street name.");

			var set = {name: n, phone: p, street: s};
			
			victimsArrObj.push(set);
		}
	}
}

console.log(victimsArrObj);


	 

// while (y) {
// 	var volunteers = prompt("how many volunteers would you like to enter?");
// 	if (isNaN(victims)===true) {
// 		alert("please enter a number");
// 	}
// 	else {
// 		y=false;

// 		for (var i=victims; i>0; i--) {
// 			var name = prompt("thanks, please enter the name of one of the volunteers.");
// 				nameArray2.push(name);
// 			var phone = prompt("please enter this volunteer's phone number");
// 				phoneArray2.push(phone);
// 			var street = prompt("please enter this volunteer's street name.");
// 				streetArray2.push(street);
// 		}

// 	}
// }






// var finalAlertString = "The total number of victim(s) is " + victims + ". ";

// for (var i=victims-1; i>=0; i--) {
// 		var victimInfo = "Victim " + nameArray[i] + "'s phone number is " + phoneArray[i] + " and he/she lives on " + streetArray[i] + " street. ";
// 		finalAlertString += victimInfo;
// };

// for (var i=victims-1; i>=0; i--) {
// 		var volunteerInfo = "Volunteer" + nameArray[i] + "'s phone number is " + phoneArray2[i] + " and he/she lives on " + streetArray2[i] + " street. ";
// 		finalAlertString += volunteerInfo;
// };

// alert(finalAlertString);