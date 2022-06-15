var btnSignUp = document.getElementById('signup_submit');
var email = document.getElementById('email');
var password = document.getElementById('password');
btnSignUp.addEventListener("click", function() {
	if (email.value.length == 0) {
		alert("Please enter email")
	}
	if (password.value.length == 0) {
		alert("Please enter Password")
	}
});