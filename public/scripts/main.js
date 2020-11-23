$(document).ready(function() {


let calculator = {
	A: "",
	B: "",
	func: "",
	output: null,
	enter: null
}
console.log(calculator);

$("#plus").click(function(){ 
	if (!(calculator.A === "")) {
		calculator.func = "+";
		output(); 
	}
});

$("#minus").click(function(){ 
	if (!(calculator.A === "")) {
		calculator.func = "-";
		output(); 
	}
});

$("#del").click(function(){ 
	if (!(calculator.A === "")) {
		calculator.func = "/";
		output(); 
	}
});

$("#umn").click(function(){ 
	if (!(calculator.A === "")) {
		calculator.func = "*";
		output(); 
	}
});



$("#1").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "1";
	}
	else {
		calculator.B += "1";
	}
	output(); 
});

$("#2").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "2";
	}
	else {
		calculator.B += "2";
	}
	output(); 
});

$("#3").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "3";
	}
	else {
		calculator.B += "3";
	}
	output(); 
});

$("#4").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "4";
	}
	else {
		calculator.B += "4";
	}
	output(); 
});

$("#5").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "5";
	}
	else {
		calculator.B += "5";
	}
	output(); 
});

$("#6").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "6";
	}
	else {
		calculator.B += "6";
	}
	output(); 
});

$("#7").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "7";
	}
	else {
		calculator.B += "7";
	}
	output(); 
});

$("#8").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "8";
	}
	else {
		calculator.B += "8";
	}
	output(); 
});

$("#9").click(function(){ 
	if (calculator.func === ""){
		calculator.A += "9";
	}
	else {
		calculator.B += "9";
	}
	output(); 
});

$("#0").click(function(){ 
	if (!(calculator.A === "")) { 
		if (calculator.func === ""){
			calculator.A += "0";
			output(); 
		}
		else {
			if (!(calculator.B === "")){
				calculator.B += "0";
				output(); 
			}
		}
		
	}
});

$("#enter").click(function(){ 
	calculator.enter = "enter";
	output(); 
});

function output() { 
	if (calculator.enter === null) { 
		$("#output").text(calculator.A + calculator.func + calculator.B);

	}

	else if ((calculator.A === "") || (calculator.B === "") || (calculator.func === "")) {
		$("#output").text("Error"); 
		calculator.enter = null; 
		calculator.A = "";
		calculator.B = "";
		calculator.func = "";
	}

	else {  

		if (calculator.func === "+") {
			$("#output").text(String( Number(calculator.A) + Number(calculator.B)));
		}

		else if (calculator.func === "-") {
			$("#output").text(String( Number(calculator.A) - Number(calculator.B)));
		}

		else if (calculator.func === "/") {
			$("#output").text(String( Number(calculator.A) / Number(calculator.B)));
		}

		else {
			$("#output").text(String( Number(calculator.A) * Number(calculator.B)));
		}
		
		calculator.enter = null; 
		calculator.A = "";
		calculator.B = "";
		calculator.func = "";
	}
	
}});
