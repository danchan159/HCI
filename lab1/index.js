function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


var menuList = document.getElementById("menu");
var menuPages = document.getElementsByClassName("page");

for (var i = 0; i < menuPages.length; i++){
	menuPages[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += "active";
	});
}

function quoteChange() {
	var quotes = ["I'm not a crazy cat lady<br/>- Owns 3 Cats", 
	"Cats are connoisseurs of comfort<br/> - Brooklyn Resident",
	"The average dog is a nicer person than the average person<br/>- School Teacher",
	"Don't sweat the petty things and don't pet the sweaty things<br/>- Wise Guy"]
	var iter = Math.floor(Math.random() * Math.floor(quotes.length));
	document.getElementById("introQuote").innerHTML = quotes[iter];
}

function volumeControl(){
	document.getElementById("sound").volume = .4;
}