/**
 * 
 */


const svc = {
	wishListAjax(successCall, errorCall) {
		fetch('/yogidogi/wishListAjax.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	wishListProduct(pno, successCall, errorCall) {
		fetch('/yogidogi/wishListProduct.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.wishListAjax(function(result) {
		result.forEach(pno => {
			svc.wishListProduct(pno, function(result){
				
			});
		});
		
		
		
		result.forEach((dog, idx) => {
			let temp = $('#base-form').clone(true);
			temp.css('display', 'block');
			let dogInfo = $('<input/>', { type: 'text', id: 'dogName' + idx }).val(dog.dogName);
			dogInfo.addClass('form-control').attr('readonly', true).css('border', 'none');
			temp.find('.name-div').append(dogInfo);
			temp.find('.breed-div').append(dogInfo.clone(true).attr('id', 'dogBreed' + idx).val(dog.dogBreed));
			temp.find('.birthday-div').append(dogInfo.clone(true).attr('id', 'dogBirthday' + idx).val(dog.dogBirthday));
			$('#dogList').append(temp);

			temp.find('#editBtn').click(function(e) {
				if ($(this).text() == '수정') {
					temp.find('input').attr('readonly', false);
					$(this).text('완료');
				} else if ($(this).text() == '완료') {
					var mvo = {};
					mvo.dogNo = dog.dogNo;
					mvo.dogName = $('#dogName' + idx).val();
					mvo.dogBreed = $('#dogBreed' + idx).val();
					mvo.dogBday = $('#dogBirthday' + idx).val();

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



















/*
<tr>
	<td class="product-thumbnail">
		<img src="images/product-1.png" alt="Image" class="img-fluid">
	</td>
	<td class="product-name">
		<h4 class="h5 text-black"></h4>
	</td>
	<td>$49.00</td>
	<td><button type="button" style="color:white;background-color:black;" id="addBtn">추가</button></td>
	<td><button type="button" style="color:white;background-color:black;" id="delBtn">삭제</button></td>
</tr>
*/