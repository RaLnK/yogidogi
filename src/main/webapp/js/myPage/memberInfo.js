/**
 * 
 */


const svc = {
	memberList(successCall, errorCall) {
		fetch('../memberList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	memberUpdate(mvo = {}, successCall, errorCall) {
		fetch('../memberUpdate.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'memberPw='+mvo.memberPw+'&memberName='+mvo.memberName+'&email='+mvo.email+'&phone='+mvo.phone
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
	});
	
	$('#editBtn').click(function(e){
		if($(this).text() == '수정'){
			$('input').slice(1,5).attr('readonly', false);
			$(this).text('완료');
		}else if($(this).text() == '완료'){
			var mvo = {};
			mvo.memberPw = $('input').eq(1).val();
			mvo.memberName = $('input').eq(2).val();
			mvo.email = $('input').eq(3).val();
			mvo.phone = $('input').eq(4).val();
			svc.memberUpdate(mvo, function(result){
				if(result.retCode == 'Success'){
					$('input').attr('readonly', true);
					$('#editBtn').text('수정');
				}
			})
		}
	});
	
});








