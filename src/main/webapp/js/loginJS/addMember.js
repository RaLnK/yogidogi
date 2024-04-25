/**
 * addMember.js
 */
console.log('start');
document.getElementById('login').addEventListener('click', addMember);

function addMember() {
	let id = document.querySelector('#id').value;
	let nm = document.querySelector('#name').value;
	let password = document.querySelector('#password').value;
	let passwordCheck = document.querySelector('#passwordCheck').value;
	let email = document.querySelector('#email').value;
	let phone = document.querySelector('#phone').value;
	
	const addHtp = new XMLHttpRequest();
	addHtp.open('POST', '/yogidogi/addMember.do');
	addHtp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	addHtp.send('memberId=' + id + '&memberName=' + nm + '&memberPw=' + password
				+ '&email=' + email + '&phone=' + phone);
	addHtp.onload = function() {
		const result = JSON.parse(addHtp.response);
		if(result.retCode == 'Success' && password.length < 8 || password.length > 20) {
			openModal();
			$('div.modal-content').append($('<p>비밀번호를 확인해주세요</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				$('div.modal-content p').remove();
			})
		}else if(result.retCode == 'fail') {
			openModal();
			$('div.modal-content').append($('<p>모든 정보를 입력해주세요</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				$('div.modal-content p').remove();
			})
		}else if(result.retCode == 'Success' && password != passwordCheck) {
			openModal();
			$('div.modal-content').append($('<p>비밀번호와 비밀번호확인이 동일하지 않습니다</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				$('div.modal-content p').remove();
			})
		}else if(result.retCode == 'Success' && email.search("@") < 0) {
			openModal();
			$('div.modal-content').append($('<p>이메일 주소를 올바른 형식으로 입력해주세요</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				$('div.modal-content p').remove();
			})
		}else if(result.retCode == 'Success' && id.length < 5 || id.length >12) {
			openModal();
			$('div.modal-content').append($('<p>아이디를 확인해주세요</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				$('div.modal-content p').remove();
			})
		}else if(result.retCode == 'Success') {
			openModal();
			$('div.modal-content').append($('<p>새로운 회원이 되신것을 환영합니다</p>'));
			$('.close').on('click', function() {
				$('.modal').css('display', 'none');
				location.href = 'http://localhost:8080/yogidogi/loginForm.do'
			})
		}else{
			alert('모든 정보를 입력해주세요')
		}
	}
}

function openModal() {
	$('.modal').css('display', 'block');
}

$('.logo').on('click', function() {
	location.href = 'http://localhost:8080/yogidogi/mainapp.tiles'
})