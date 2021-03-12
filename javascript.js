// JavaScript Documentwindow.addEventListener('DOMContentLoaded', () => {

// Show portfolio items
function openPortfolio(portfolioItem){
	activatedButton(portfolioItem.concat("button"));
	var i;
	var x = document.getElementsByClassName("portfolio-items");
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	
	var element = document.getElementById(portfolioItem);
	element.style.display = "flex";
}

// Activate portfolio button
function activatedButton(portfolioButton){
	var i;
		var x = document.getElementsByClassName("portfolio-button");
	for (i = 0; i < x.length; i++){
		x[i].className = "portfolio-button";
	}
	
	var element = document.getElementById(portfolioButton);
	element.classList.add("portfolio-activated");
}

// Animation on scroll
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// Scrollspy
(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', '.sidebar-activated');
      }
    }
  };
})();