/**
 * addDog.js
 */
console.log('start');
document.getElementById('login').addEventListener('click', addDog);

function addDog() {
	let memberNo = document.querySelector('#memberNo').value;
	let dogName = document.querySelector('#dogName').value;
	let dogBreed = document.querySelector('#dogBreed').value;
	let dogBirthDay = document.querySelector('#dogBirthDay').value;
	
	const addHtp = new XMLHttpRequest();
	addHtp.open('POST', '/yogidogi/addDog.do');
	addHtp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	addHtp.send('memberNo=' + memberNo + '&dogBreed=' + dogBreed + 
				'&dogBirthDay=' + dogBirthDay + '&dogName=' + dogName);
	addHtp.onload = function() {
		const result = JSON.parse(addHtp.response);
		if(result.retCode == 'Success') {
			openModal();
			$('div.modal-content').append($('<p>강아지 등록이 완료되었습니다</p>'))
								  .append($('<p>My Page에서 확인해주세요</p>'));
			successClose();
		}else{
			openModal();
			$('div.modal-content').append($('<p>모든 정보를 입력해주세요</p>'));
			closeModal();
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
};

function successClose() {
	$('.close').on('click', function() {
		$('.modal').css('display', 'none');
		$('div.modal-content p').remove();
		location.href = 'http://localhost:8080/yogidogi/mainapp.tiles'
	})
}