/**
 * 
 */

const svc = {
	memberDogList(successCall, errorCall) {
		fetch('/yogidogi/memberDogList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	/*memberUpdate(mvo = {}, successCall, errorCall) {
		fetch('../memberUpdate.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'memberPw=' + mvo.memberPw + '&memberName=' + mvo.memberName + '&email=' + mvo.email + '&phone=' + mvo.phone
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}*/
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.memberDogList(function(result) {
		result.forEach((dog, idx) => {
			let temp = $('#base-form').clone(true);
			temp.css('display', 'block');
			let dogInfo = $('<input/>', { type: 'text', name: 'dogName'+idx }).val(dog.dogName);
			dogInfo.addClass('form-control').attr('readonly', true).css('border', 'none');
			temp.find('.name-div').append(dogInfo);
			temp.find('.breed-div').append(dogInfo.clone(true).attr('name', 'dogBreed'+idx).val(dog.dogBreed));
			temp.find('.birthday-div').append(dogInfo.clone(true).attr('name', 'dogBirthday'+idx).val(dog.dogBirthday));
			$('#dogList').append(temp);
			
			
			
			temp.find('div.img img').attr('src', 'image/' + cart.productNm + '.jpg');
			temp.find('div.pname span').text(cart.productNm);

			temp.attr('data-id', cart.no);
			temp.find('div.basketprice').text(cart.price.formatNumber() + '원');
			temp.find('div.basketprice').prepend($('<input />').attr({ 'type': 'hidden', 'name': 'p_price', 'id': 'p_price' + cart.no }).addClass('p_price').val(cart.price));

			temp.find('div.sum').text((cart.price * cart.qty).formatNumber() + '원');
			temp.find('div.sum').attr('id', 'p_sum' + cart.no);
			temp.find('div.updown input').val(cart.qty);
			temp.find('div.updown input').attr('id', 'p_num' + cart.no);

			// keyup, click 등록.
			temp.find('div.updown input').keyup(() => basket.changePNum(cart.no));
			temp.find('div.updown span').click(() => basket.changePNum(cart.no));

			temp.appendTo('#basket');
		});

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

})










