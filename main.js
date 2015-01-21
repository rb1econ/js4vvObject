var x=true;


var y=true;


var victimsArrObj = [];
var volunteerArrObj = [];

var volunteerCount = [];
var victimCount = [];


while (x) {
	var n = prompt("please enter a victim's name");
	if (n!=null)  { 

			var p = prompt("please enter this victim's phone number");
			var s = prompt("please enter this victim's street name.");
			var set = {name: n, phone: p, street: s};
				
			victimsArrObj.push(set);

			victimCount.push(n);
			

			if (!confirm("would you like to enter another victim?")) {

				x=false;

				}
	}
	else {x=false}
}

while (y) {
	var a = prompt("please enter the name of one of the volunteers.");
	if (a!=null) {
			var b = prompt("please enter this volunteer's phone number");
			var c = prompt("please enter this volunteer's street name.");

			var set2 = {name: a, phone: b, street: c};

			volunteerArrObj.push(set2)
			
			volunteerCount.push(a);


			if (!confirm("would you like to enter another volunteer?")) {

				y=false;
			}
	}
	else {y=false}
	
}

var finalAlertString = "The total number of victim(s) is " + victimsArrObj.length + ". ";

for (var i=victimCount.length-1; i>=0; i--) {
		
		var victimInfo = "Victim " + victimsArrObj[i]['name'] + "'s phone number is " + victimsArrObj[i].phone + " and he/she lives on " + victimsArrObj[i].street + " street. ";
		finalAlertString += victimInfo;
};


for (var i=volunteerCount.length-1; i>=0; i--) {
		var volunteerInfo = "Volunteer " + volunteerArrObj[i].name + "'s phone number is " + volunteerArrObj[i].phone + " and he/she lives on " + volunteerArrObj[i].street + " street. ";
		finalAlertString += volunteerInfo;
};


alert(finalAlertString);


if (victimCount.length >0 && volunteerCount.length>0) {
	
	for (var i=victimCount.length-1; i>=0; i--) {
		console.log(victimsArrObj[i].street)
		for (var j=volunteerCount.length-1; j>=0; j--) {
			console.log(volunteerArrObj[j].street)
			if (victimsArrObj[i].street === volunteerArrObj[j].street) {
				alert("Victim " + victimsArrObj[i].name + " and volunteer " + volunteerArrObj[j].name + " both live on " + victimsArrObj[i].street + ".");
			}
		} 
		// if (victimsArrObj[i].street === volunteerArrObj[i].street) {
		// 	alert("Victim " + victimsArrObj[i].name + " and volunteer " + volunteerArrObj[i].name + " both live on " + victimsArrObj[i].street + ".");
		// }
	}
}


else { alert("no matches, no volunteers")
	// for (var i=volunteerCount.length-1; i>=0; i--) {
	// 	if (victimsArrObj[i].street === volunteerArrObj[i].street) {
	// 		alert("Victim " + victimsArrObj[i].name + " and volunteer " + volunteerArrObj[i].name + " both live on " + victimsArrObj[i].street + ".");
	// 	}
	// }
}




victimsArrObj[0].name

























