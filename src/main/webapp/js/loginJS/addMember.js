/**
 * addMember.js
 */
console.log('start');
const id = document.querySelector('#id'),
	nm = document.querySelector('#name'),
	password = document.querySelector('#password'),
	passwordCheck = document.querySelector('#passwordCheck'),
	email = document.querySelector('#email'),
	phone = document.querySelector('#phone'),
	addBtn = document.querySelector('#login');
	
addBtn.addEventListener('click', addMember);
	
function addMember() {
	const req = {
		mid : id.value,
		mnm : nm.value,
		mpw : password.value,
		pwc : passwordCheck.value,
		email : email.value,
		phone : phone.value
	};
	
	fetch('addMember.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(req)
	})
	.then((result) => result.json())
	.then((result) => {
		if(result.retCode == 'Success') {
			locatin.href = 'loginForm.do'
			alignModal();
		}else {
			
		}
	})
	.catch((err) => {
		console.log(err);
	})
}

function alignModal() {
	var modalDialog = $(this).find(".modal-dialog");
	modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}
$(".modal").on("shown.bs.modal", alignModal);

$(window).on("resize", function() {
	$(".modal:visible").each(alignModal);
});   
