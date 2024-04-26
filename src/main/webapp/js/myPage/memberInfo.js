/**
 * 
 */

const fields = ['bookCode', 'bookTitle', 'author', 'company', 'price'];

const svc = {
	memberList(successCall, errorCall) {
		fetch('../memberList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartUpdate(mvo = {}, successCall, errorCall) {
		fetch('editCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + cvo.no + '&qty=' + cvo.qty
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.memberList(function(member) {
		let info = $('<input/>', { type: 'text', name: 'memberId' }).val(member.memberId);
		info.addClass('form-control').attr('readonly', true).css('border', 'none');
		$('#id-div').append(info);
		
		info = $('<input/>', { type: 'password', name: 'memberPw' }).val(member.memberPw);
		info.addClass('form-control').attr('readonly', true).css('border', 'none');
		$('#pw-div').append(info);
		
		info = $('<input/>', { type: 'text', name: 'memberName' }).val(member.memberName);
		info.addClass('form-control').attr('readonly', true).css('border', 'none');
		$('#name-div').append(info);
		
		info = $('<input/>', { type: 'email', name: 'email' }).val(member.email);
		info.addClass('form-control').attr('readonly', true).css('border', 'none');
		$('#email-div').append(info);
		
		info = $('<input/>', { type: 'text', name: 'phone' }).val(member.phone);
		info.addClass('form-control').attr('readonly', true).css('border', 'none');
		$('#phone-div').append(info);
		
		info = $('<input/>', { type: 'number', name: 'point' }).val(member.point);
		info.addClass('form-control').attr('readonly', true).css('border', 'none');
		$('#point-div').append(info);
		
	}, function(err) {
		console.log(err);
	})
})








