/**
 * login.js
 */
console.log('login');
$('form').on('submit', function(e) {
	e.preventDefault();
});
document.getElementById('login').addEventListener('click', login);

function login() {
	let id = document.querySelector('#memberId').value;
	let pw = document.querySelector('#memberPw').value;
	
	const findHtp = new XMLHttpRequest();
	findHtp.open('post', '/yogidogi/login.do');
	findHtp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	findHtp.send('memberId=' + id + '&memberPw=' + pw);
	findHtp.onload = function() {
		let result = JSON.parse(findHtp.response)
		if(result.retCode == 'Fail') {
			openModal();
			$('div.modal-content').append($('<p>ID와 비밀번호를 확인하세요</p>'));
		}else {
			location.href = '/yogidogi/mainapp.tiles'
		}
	}
}

function openModal() {
	$('.modal').css('display', 'block');
}

$('.close').on('click', function() {
	$('.modal').css('display', 'none');
	$('div.modal-content p').remove();
})

$('.logo').on('click', function() {
	location.href = '/yogidogi/mainapp.tiles'
})