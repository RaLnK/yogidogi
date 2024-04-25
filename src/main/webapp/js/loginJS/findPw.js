/**
 * findPw.js
 */
console.log('start');
document.getElementById('login').addEventListener('click', findPw);

function findPw() {
	let id = document.querySelector('#id').value;
	
	const findHtp = new XMLHttpRequest();
	findHtp.open('get', '/yogidogi/pwCheck.do?memberId=' + id);
	findHtp.send();
	findHtp.onload = function() {
		let result = JSON.parse(findHtp.response)
		if(result.retCode != 'Fail') {
			openModal();
			$('div.modal-content').append($('<p>해당 ID에 등록된 비밀번호는 '+ result.retCode +' 입니다.</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				location.href = 'http://localhost:8080/yogidogi/loginForm.do'
			})
		}else {
			openModal();
			$('div.modal-content').append($('<p>등록되지 않은 ID입니다.</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
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