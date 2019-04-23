	'use strict'

// Close modal js

var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
	modal.style.display = 'block';
}	

span.onclick = function() {
	modal.style.display = 'none';
}	

window.onclick = function(event) {
	if (event.target == modal) {
	    modal.style.display = 'none';
	  		}
		}

// Login modal

var modal2 = document.getElementById('myModal2');

var btn2 = document.getElementById('loginBtn');

var span2 = document.getElementsByClassName('close2')[0];

btn2.onclick = function() {
	modal2.style.display = 'block';
}	

span2.onclick = function() {
	modal2.style.display = 'none';
}	

window.onclick = function(event) {
	if (event.target == modal2) {
	   		modal2.style.display = 'none';
	  	}
	}

// Left menu open/close

var hamburger = document.getElementById('hamburger');

var leftNavbar = document.getElementById('leftnav');

var container = document.getElementById('bodyGeneral');	

hamburger.addEventListener('click', function(){	
	leftNavbar.classList.toggle('left-nav-width');
});
		
hamburger.addEventListener('click', function(){	
	container.classList.toggle('body-when-mobile-menu-open');
});		

// logout button on mobile

var btnMobile = document.getElementById('myBtnMobile');

btnMobile.onclick = function() {
	modal.style.display = 'block';
}	

