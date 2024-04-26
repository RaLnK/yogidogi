/**
 * findId.js
 */
console.log('findId');
document.getElementById('login').addEventListener('click', findId);

function findId() {
	let email = document.querySelector('#email').value;
	
	const findHtp = new XMLHttpRequest();
	findHtp.open('get', '/yogidogi/idCheck.do?email=' + email);
	findHtp.send();
	findHtp.onload = function() {
		let result = JSON.parse(findHtp.response)
		if(result.retCode != 'Fail') {
			openModal();
			$('div.modal-content').append($('<p>해당 이메일에 등록된 ID는 '+ result.retCode +' 입니다.</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				location.href = 'http://localhost:8080/yogidogi/loginForm.do'
				$('div.modal-content p').remove();
			})
		}else {
			openModal();
			$('div.modal-content').append($('<p>등록되지 않은 email입니다.</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				$('div.modal-content p').remove();
			})
		}
	}
}

function openModal() {
	$('.modal').css('display', 'block');
}

$('.logo').on('click', function() {
	location.href = 'http://localhost:8080/yogidogi/mainapp.tiles'
})