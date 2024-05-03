/**
 * newPw.js
 */
console.log('newPw');
document.getElementById('login').addEventListener('click', newPw);

function newPw() {
	let id = document.querySelector('#memberId').value;
	let pw = document.querySelector('#memberPw').value;
	let pwc = document.querySelector('#memberPwCheck').value;

	const newHtp = new XMLHttpRequest();
	newHtp.open('POST', '/yogidogi/newPw.do');
	newHtp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	if(pw != pwc) {
		alert('비밀번호와 비밀번호확인이 일치하지 않습니다');
		return;
	}
	newHtp.send('memberId=' + id + '&memberPw=' + pw);
	newHtp.onload = function() {
		const result = JSON.parse(newHtp.response);
		if(result.retCode == 'Success') {
			openModal();
			$('div.modal-content').append($('<p>비밀번호가 변경되었습니다</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				location.href = '/yogidogi/loginForm.do'
				$('div.modal-content p').remove();
			})
		}else{
			openModal();
			$('div.modal-content').append($('<p>비밀번호를 확인해주세요</p>'));
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
	location.href = '/yogidogi/mainapp.tiles'
})