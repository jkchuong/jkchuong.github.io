// JavaScript Documentwindow.addEventListener('DOMContentLoaded', () => {

function openPortfolio(portfolioItem){
	var i;
	var x = document.getElementsByClassName("portfolio-items");
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	
	var element = document.getElementById(portfolioItem);
	element.style.display = "flex";
	activatedButton(portfolioItem.concat("button"));
}

function activatedButton(portfolioButton){
	var i;
		var x = document.getElementsByClassName("portfolio-button");
	for (i = 0; i < x.length; i++){
		x[i].className = "portfolio-button";
	}
	
	var element = document.getElementById(portfolioButton);
	element.classList.add("activated");
}