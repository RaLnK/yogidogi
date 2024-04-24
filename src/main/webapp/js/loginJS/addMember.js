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
			console.log(result);
		}else if(result.retCode == 'fail') {
			alert('모든 정보를 입력해주세요.')
		}else {
			alert('모든 정보를 입력해주세요.')
		}
	}
}