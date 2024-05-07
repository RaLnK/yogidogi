/**
 * 
 */

Number.prototype.formatNumber = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
}

const svc = {
	myOrderProduct(ono, successCall, errorCall) {
		fetch('/yogidogi/myOrderProduct.do?ono=' + ono)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, myReview(successCall, errorCall) {
		fetch('/yogidogi/myreviewListAjax.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, addReview(formData, successCall, errorCall) {
		fetch('/yogidogi/addReview.do', {
			method: 'post',
			body: formData
		}).then(result => result.json())
		  .then(successCall)
		  .catch(errorCall);
	}, delReview(rvo = {}, successCall, errorCall) {
		fetch('/yogidogi/delReview.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'rno=' + rno
		}).then(result => result.json())
		  .then(successCall)
		  .catch(errorCall);
	}, chkReview(orderDetailNo, successCall, errorCall){
		fetch('/yogidogi/chkReview.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'orderDetailNo=' + orderDetailNo
		}).then(result => result.json())
		  .then(successCall)
		  .catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.myOrderProduct(ono, function(result) {
		let sumPrice = 0;
		result.forEach((product, idx) => {
			let orderQty = parseInt(product.orderQty);
			let productPrice = parseInt(product.productPrice);
			let discountPct = parseInt(product.discountPct);

			let tr = $('<tr />');

			let src = '/yogidogi/images/';
			switch (product.category) {
				case 0: src += ('기타잡화/' + product.productImg); break;
				case 1: src += ('사료간식/' + product.productImg); break;
				case 2: src += ('위생배변/' + product.productImg); break;
				case 3: src += ('의류/' + product.productImg); break;
				case 4: src += ('장난감/' + product.productImg); break;
				case 5: src += ('집/' + product.productImg); break;
				default: src = '';
			}

			tr.append($('<td />').append($('<img />').attr({ 'src': src, 'class': 'img-fluid', 'alt': 'Image' }).css({ 'width': '150', 'height': '150' })));
			tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text(product.productName)));
			tr.append($('<td />').attr('class', 'product-quantity').text(orderQty));
			if (discountPct == 0) {
				tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text((productPrice * orderQty).formatNumber() + '원')));
				sumPrice += (productPrice * orderQty);
			} else {
				let disc = $('<td />').append($('<span />').attr('class', 'text-muted text-decoration-line-through price'));
				disc.find('span').text(productPrice * orderQty);
				let newPrice = Math.floor((productPrice * (1 - discountPct * 0.01)) / 100) * 100;
				disc.append($('<h2 />').attr('class', 'h5 text-black').html('<br>' + newPrice.formatNumber() + '원'));
				tr.append(disc);
				sumPrice += newPrice;
			}
			
			$('#reviewBtn').hide();
			$('.product-review').hide();
			let reviewBtn = $('<td></td>').append($('#reviewBtn').clone().show());
			
			console.log(product.reviewChk);
			if (product.reviewChk == 0) {
				$('.product-review').show();
				tr.append(reviewBtn);
			}

			$('#backToList').on('click', e => {
				location.href = '/yogidogi/myOrder.do';
			});

			$('#backToShop').on('click', e => {
				location.href = '/yogidogi/productList.do';
			});

			$('#sumPrice').text(sumPrice);

			$('tbody').eq(0).append(tr);
			reviewBtn.find('button').css('color', 'white');
			reviewBtn.find('button').css('background-color', 'black');
			reviewBtn.find('input').attr('name', 'rating' + idx);
			reviewBtn.find('input[name=rating' + idx + ']').each((starId, star) => {
				let radioInput = $(star);
				let radioId = $(radioInput).prop('id');
				let labelFor = reviewBtn.find('label[for="' + radioId + '"]');
				labelFor.prop('for', radioId + idx);
				radioInput.prop('id', radioId + idx);
			})

			reviewBtn.find('.rmodal').on('click', function() {
				reviewBtn.find('.modal').modal('show');
			})
			
			reviewBtn.find('.send').on('click', function() {
				let reviewContent = reviewBtn.find('.reviewContent').val();
				let reviewPhoto = reviewBtn.find('.myImg')[0].files[0];
				let reviewStar = reviewBtn.find('input[name="rating' + idx + '"]:checked').val();

				let formData = new FormData();
				// key value 추가
				formData.append('pno', product.productNo);
				formData.append('rcontent', reviewContent);
				formData.append('rphoto', reviewPhoto);
				formData.append('rstar', reviewStar);

				
				svc.addReview(formData, function(result) {
					if (result.retCode == 'Success') {
						reviewBtn.find('.modal').modal('hide');
						reviewBtn.find('.reviewContent').val('');
						reviewBtn.find('.myImg').val('');
						reviewBtn.find('input[name="rating' + idx + '"]').prop('checked', false);
						svc.chkReview(product.orderDetailNo, function(result) {
							if (result.retCode == 'Success') {
								alert('리뷰 등록 완료!')
								
								reviewBtn.hide();
								if(product.length == 1){
									$('.product-review').hide();
								}
								
							} else {
								alert('등록에 실패하였습니다. 잠시후 다시 시도해주세요');
							}
						}, function(err) {
							console.error(err);
						});
					} else {
						alert('등록에 실패하였습니다. 잠시후 다시 시도해주세요');
					}
				}, function(err) {
					console.error(err);
				});

			})

			reviewBtn.find('.exit').on('click', function() {
				reviewBtn.find('.modal').modal('hide');

				reviewBtn.find('.reviewContent').val('');
				reviewBtn.find('.myImg').val('');
				reviewBtn.find('input[name="rating' + idx + '"]').prop('checked', false);
			})
			
			
		});
	}, function(err) {
		console.log(err);
	});

});












