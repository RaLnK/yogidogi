/**
 * findId.js
 */
console.log('start');
document.getElementById('login').addEventListener('click', findId);

function findId() {
	let email = document.querySelector('#email').value;
	
	const findHtp = new XMLHttpRequest();
	findHtp.open('get', '/yogidogi/idCheck.do?email=' + email);
	findHtp.send();
	findHtp.onload = function() {
		let result = JSON.parse(findHtp.response)
		if(result.retCode == 'Success') {
			console.log(result);
		}else {
			alert('error');
		}
	}
}