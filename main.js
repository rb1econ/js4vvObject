var x=true;


var y=true;


var victimsArrObj = [];
var volunteerArrObj = [];

while (x) {
	var victims = prompt("how many victims would you like to enter?");
	if (isNaN(victims))  { 
		alert("please enter a number");
	}
	else {
		x=false;

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


	 

while (y) {
	var volunteers = prompt("how many volunteers would you like to enter?");
	if (isNaN(volunteers)) {
		alert("please enter a number");
	}
	else {
		y=false;

		for (var i=volunteers; i>0; i--) {
			var a = prompt("thanks, please enter the name of one of the volunteers.");
			var b = prompt("please enter this volunteer's phone number");
			var c = prompt("please enter this volunteer's street name.");

			var set2 = {name: a, phone: b, street: c};

			volunteerArrObj.push(set2)
		}

	}
}



var finalAlertString = "The total number of victim(s) is " + victimsArrObj.length + ". ";
console.log(finalAlertString);
for (var i=victims-1; i>=0; i--) {
		var victimInfo = "Victim " + victimsArrObj[i]['name'] + "'s phone number is " + victimsArrObj[i].phone + " and he/she lives on " + victimsArrObj[i].street + " street. ";
		finalAlertString += victimInfo;
};
console.log(finalAlertString);

for (var i=volunteers-1; i>=0; i--) {
		console.log(volunteerArrObj[i])
		var volunteerInfo = "Volunteer" + volunteerArrObj[i].name + "'s phone number is " + volunteerArrObj[i].phone + " and he/she lives on " + volunteerArrObj[i].street + " street. ";
		finalAlertString += volunteerInfo;
};
console.log(finalAlertString);

alert(finalAlertString);

