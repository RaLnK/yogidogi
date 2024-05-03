/**
 * addMember.js
 */
console.log('addMember');
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
	if(password != passwordCheck) {
		$('.pwc-no').text('비밀번호와 일치하지 않습니다')
		return;
	}
	addHtp.send('memberId=' + id + '&memberName=' + nm + '&memberPw=' + password
				+ '&email=' + email + '&phone=' + phone);
	addHtp.onload = function() {
		const result = JSON.parse(addHtp.response);
		if(result.cnt == 0) {
			$('.id-no').text('');
			$('.pw-no').text('');
			$('.pwc-no').text('');
			$('.email-no').text('');
			$('.phone-no').text('');
			openModal();
			$('div.modal-content').append($('<p>새로운 회원이 되신 것을 환영합니다</p>'));
			successClose();
		}else{
			$('.id-no').text(result.id);
			$('.pw-no').text(result.pw);
			$('.email-no').text(result.email);
			$('.phone-no').text(result.phone);
			$('.id-no').text(result.idDup);
			$('.email-no').text(result.emailDup);
			$('.phone-no').text(result.phoneDup);
		}
	}
}

function openModal() {
	$('.modal').css('display', 'block');
}

function closeModal() {
	$('.close').on('click', function() {
		$('.modal').css('display', 'none');
		$('div.modal-content p').remove();
	})
}

function successClose() {
	$('.close').on('click', function() {
		$('.modal').css('display', 'none');
		location.href = '/yogidogi/loginForm.do'
	})
}

$('.logo').on('click', function() {
	location.href = '/yogidogi/mainapp.tiles'
})