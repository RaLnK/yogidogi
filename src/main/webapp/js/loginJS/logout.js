/**
 * logout.js
 */
console.log('logout');
document.getElementById('login').addEventListener('click', logout);

function logout() {
	$.ajax({
		url: 'logout.do',
		method: 'get'
	})
	.done(
		location.href = 'http://localhost:8080/yogidogi/loginForm.do'
	)
}