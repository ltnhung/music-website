
var btnSignUp = document.getElementById('btn-sign-up');
var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
btnSignUp.addEventListener("click", function() {
	if (fullname.value.length == 0) {
		alert("Please enter Fullname")
	}
	if (email.value.length == 0) {
		alert("Please enter email")
	}
	if (password.value.length == 0) {
		alert("Please enter Password")
	}
	if (password2.value.length == 0) {
		alert("Please enter Comfirm Password")
	}
	if (password.value != password2.value) {
		alert("Please enter Password right")
	}
});