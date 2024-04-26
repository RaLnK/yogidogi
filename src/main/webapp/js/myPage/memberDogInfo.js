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
	memberDogUpdate(mvo = {}, successCall, errorCall) {
		fetch('/yogidogi/memberDogUpdate.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'dogNo=' + mvo.dogNo + '&dogName=' + mvo.dogName + '&dogBreed=' + mvo.dogBreed + '&dogBday=' + mvo.dogBday
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.memberDogList(function(result) {
		result.forEach((dog, idx) => {
			console.log(typeof dog.dogBirthday);
			
			let temp = $('#base-form').clone(true);
			temp.css('display', 'block');
			let dogInfo = $('<input/>', { type: 'text', id: 'dogName' + idx }).val(dog.dogName);
			dogInfo.addClass('form-control').attr('readonly', true).css('border', 'none');
			temp.find('.name-div').append(dogInfo);
			temp.find('.breed-div').append(dogInfo.clone(true).attr('id', 'dogBreed' + idx).val(dog.dogBreed));
			temp.find('.birthday-div').append(dogInfo.clone(true).attr('id', 'dogBirthday' + idx).val(dog.dogBirthday));
			$('#dogList').append(temp);
			
			temp.find('#editBtn').click(function(e){
				if($(this).text() == '수정'){
					temp.find('input').attr('readonly', false);
					$(this).text('완료');
				} else if ($(this).text() == '완료') {
					var mvo = {};
					mvo.dogNo = dog.dogNo;
					mvo.dogName = $('#dogName'+idx).val();
					mvo.dogBreed = $('#dogBreed'+idx).val();
					mvo.dogBday = $('#dogBirthday'+idx).val();
					
					svc.memberDogUpdate(mvo, function(result) {
						if (result.retCode == 'Success') {
							temp.find('input').attr('readonly', true);
							temp.find('#editBtn').text('수정');
						}
					});
				}
			});
			
		});

	}, function(err) {
		console.log(err);
	});

});










