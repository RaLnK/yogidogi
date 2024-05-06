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
	},
	deleteDog(dno, successCall, errorCall) {
		fetch('/yogidogi/memberDogDelete.do?dno='+dno)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	chooseDogLeader(dno, successCall, errorCall) {
		fetch('/yogidogi/chooseDogLeader.do?dno='+dno)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.memberDogList(function(result) {
		dogList(result);

	}, function(err) {
		console.log(err);
	});
	
	$('#addDogBtn').on('click', e=>{
		location.href = '/yogidogi/addDogForm.do';
	});
	
	$('#setLeaderBtn').on('click', e=>{
		$('#chooseModal').css('display', 'block');
	});

});


function dogList(result) {
	let dogCnt = result.length;
	result.forEach((dog, idx) => {

		let temp = $('.border').eq(0).clone(true);
		temp.append($('<input />', { type:'hidden', id:'dogNo'+dog.dogNo}));
		temp.css('display', 'block');
		let dogInfo = $('<input/>', { type: 'text', id: 'dogName' + idx }).val(dog.dogName);
		dogInfo.addClass('form-control').attr('readonly', true).css('border', 'none');
		temp.find('.name-div').append(dogInfo);
		temp.find('.breed-div').append(dogInfo.clone(true).attr('id', 'dogBreed' + idx).val(dog.dogBreed));
		temp.find('.birthday-div').append(dogInfo.clone(true).attr('id', 'dogBirthday' + idx).val(dog.dogBirthday));
		$('#dogList').append(temp);
		temp.find('input').css('background-color', 'white');

		temp.find('#editBtn').click(function(e) {
			if ($(this).text() == '수정') {
				temp.find('input').attr('readonly', false).css('background-color', '#eff2f1');
				$(this).text('완료');
			} else if ($(this).text() == '완료') {
				var mvo = {};
				mvo.dogNo = dog.dogNo;
				mvo.dogName = $('#dogName' + idx).val();
				mvo.dogBreed = $('#dogBreed' + idx).val();
				mvo.dogBday = $('#dogBirthday' + idx).val();

				svc.memberDogUpdate(mvo, function(result) {
					if (result.retCode == 'Success') {
						temp.find('input').attr('readonly', true).css('background-color', 'white');
						temp.find('#editBtn').text('수정');
					}
				});
			}
		});
		
		temp.find('#delBtn').on('click', e=>{
			if(dogCnt > 1){
				if(dog.dogLeader == 1){
					alert('대표 강아지는 등록 삭제할 수 없습니다');
				}else{
					delModal(dog.dogNo);					
				}
			}else{
				delModal(dog.dogNo);
			}
		});
		
		let rd = $('<input />', {type:'radio', id:'option'+idx, name:'option'}).val(dog.dogNo);
		let lb = $('<label />').attr('for', 'option'+idx).text(dog.dogName);
		
		$('#leaderForm').append(rd).append(lb).append($('<br>'));
		
	});

	$('h6').css('text-align', 'center');

	let dogIcon = $('<i />').attr('class', 'fa-solid fa-award fa-2x').css({ 'top': '0.5rem', 'left': '0.5rem' });
	$('.border').eq(1).find('.form-group').eq(0).append(dogIcon);
	$('.border').eq(1).attr('class', 'p-3 p-lg-5 col-md-12 border').css('background-color', '#f0d881');
	//$('.border').eq(1).find('.row').last().
	
	$('#leaderForm').find('#option0').attr('checked', true);
}



function delModal(dno) {
	$('#delModal').css('display', 'block');
	$('#delDogNo').val(dno);
	//$('#delModal p').text('등록을 취소하시겠습니까?');
}

$('#delNo').on('click', function() {
	$('#delModal').css('display', 'none');
});

$('#delYes').on('click', function() {
	let dogNo = $('#delDogNo').val();
	svc.deleteDog(dogNo, function(result){
		if(result.retCode == 'Success'){
			alert('삭제했습니다');
			$('#dogNo'+ dogNo).parent().remove();
		}else{
			alert('실패했습니다');
		}
	}, function(err) {
		console.log(err);
	});
	
	$('#delModal').css('display', 'none');
});

$('.close').on('click', function() {
	$('.modal').css('display', 'none');
});

$('#setBtn').on('click', function(){
	let newNo = $('input:radio[name=option]:checked').val();
	let leaderNo = $('input:radio[name=option]').eq(0).val();
	if (newNo == leaderNo){
		alert('이미 대표 강아지로 설정되어있습니다');
		$('.modal').css('display', 'none');
	}else{
		svc.chooseDogLeader(newNo, function(result){
			if(result.retCode == 'Success'){
				alert('성공했습니다!');
				location.href = '/yogidogi/memberDogInfo.do';
			}else{
				alert('변경에 실패했습니다');
				$('.modal').css('display', 'none');
			}
		});		
	}
});



