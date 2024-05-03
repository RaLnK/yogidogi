/**
 * findPw.js
 */
console.log('findPw');
document.getElementById('login').addEventListener('click', findPw);

function findPw() {
	let id = document.querySelector('#memberId').value;
	let nm = document.querySelector('#memberName').value;
	
	const findHtp = new XMLHttpRequest();
	findHtp.open('POST', '/yogidogi/pwCheck.do');
	findHtp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	findHtp.send('memberId=' + id + '&memberName=' + nm);
	findHtp.onload = function() {
		const result = JSON.parse(findHtp.response);
		console.log(result);
		if(result.retCode == 'Success') {
			openModal();
			$('div.modal-content').append($('<p>새로운 비밀번호를 설정해주세요</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				location.href = '/yogidogi/newPwForm.do'
				$('div.modal-content p').remove();
			})
		}else {
			openModal();
			$('div.modal-content').append($('<p>이름과 아이디를 확인해주세요</p>'));
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