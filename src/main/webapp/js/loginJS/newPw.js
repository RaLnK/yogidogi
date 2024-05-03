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
	newHtp.send('memberId=' + id + '&memberPw=' + pw);
	newHtp.onload = function() {
		const result = JSON.parse(newHtp.response);
		if(result.retCode == 'Success') {
			
		}else{
			
		}
		
	}
}