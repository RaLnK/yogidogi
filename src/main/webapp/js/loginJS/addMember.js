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
		if(result.retCode == 'Success') {
			alert('회원가입을 환영합니다');
		}else if(result.retCode == 'fail') {
			alert('모든 정보를 입력해주세요.');
		}else if(result.retCode == 'Success' || password != passwordCheck) {
			alert('비밀번호와 비밀번호확인이 동일하지 않습니다.');
		}else if(result.retCode == 'Success' || email.search("@") < 0) {
			alert('이메일 주소를 올바른 형식으로 입력해주세요')
		}else if(result.retCode == 'Success' || id.length < 5 || id.length >12) {
			alert('아이디를 확인해주세요')
		}else if(result.retCode == 'Success' || password.length < 8 || password.length > 20) {
			alert('비밀번호를 확인해주세요')
		}else{
			alert('모든 정보를 입력해주세요')
		}
	}
}