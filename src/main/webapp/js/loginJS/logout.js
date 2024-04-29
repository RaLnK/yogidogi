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
		location.href = '/yogidogi/loginForm.do'
	)
}

$('.logo').on('click', function() {
	location.href = '/yogidogi/mainapp.tiles'
})

