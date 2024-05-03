/**

 * cartList.do

 */
const svc = {
	cartListAjax(successCall, errorCall) {
		fetch('/yogidogi/cartListJson.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartListDel(cno, successCall, errorCall) {
		fetch('/yogidogi/cartListDel.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'cno=' + cno
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartUpDate(cartNo, quantity, successCall, errorCall) {
        fetch('cartUpDate.do', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'cno=' + cartNo + '&qty=' + quantity
        })
            .then(response => response.json())
            .then(successCall)
            .catch(errorCall);
    }
}

Number.prototype.formatNumber = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};
document.addEventListener('DOMContentLoaded', function(e) {
	svc.cartListAjax(function(result) {
		result.forEach(product => {
			let tr = $('<tr />').data('product', product); // 상품 데이터 저장
			// 이미지 출력
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
			tr.append($('<td />').append($('<img />').attr({ 'src': src, 'class': 'img-fluid', 'alt': 'Image' })));
			tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text(product.productName)));

			// 할인율 가격 출력
			let totalProduct = totalPriceCalculate(product, product.quantity); // 총 가격 계산
			let discPrice = Math.round(parseInt(product.productPrice) * (1 - parseInt(product.discountPct) * 0.01) / 100) * 100;
			let badge = $('<span />').css('color', 'red').addClass('badge').text('(' + product.discountPct + '%)');
			// let priceText = product.discountPct === 0 ? product.productPrice + '원' : `<del>${product.productPrice}원</del> ${discPrice}원`;
			let priceText = product.discountPct === 0 ? product.productPrice.formatNumber() + '원' : `<del>${product.productPrice.formatNumber()}원</del> ${discPrice.formatNumber()}원`;
			let priceCell = $('<td />').addClass('product-price').html(priceText + '<br/>').append(badge);
			tr.append(priceCell);
			if (parseInt(product.discountPct) === 0) {
				badge.hide();
			}
			// 수량 출력
			let qtyDiv = $('<div />').addClass('input-group mb-3 d-flex align-items-center quantity-container').css('max-width', '120px');
			let minusBtn = $('<button />').addClass('btn btn-outline-black btn-minus decrease').attr('type', 'button').text('−');
			let qtyInput = $('<input />').addClass('form-control text-center quantity-amount').attr({ 'type': 'text', 'id': 'qty', 'placeholder': '', 'aria-label': 'Example text with button addon', 'aria-describedby': 'button-addon1', 'data-min': '1', 'data-max': '100' }).val(product.quantity);
			let plusBtn = $('<button />').addClass('btn btn-outline-black btn-plus increase').attr('type', 'button').text('+');
			qtyDiv.append($('<div />').addClass('input-group-prepend').append(minusBtn),
				qtyInput, $('<div />').addClass('input-group-append').append(plusBtn));
			tr.append($('<td />').append(qtyDiv));
			
			// 토탈 가격 출력
			tr.append($('<td />').addClass('product-totalprice').text(totalProduct.formatNumber() + "원"));

			// 삭제 버튼
			let delBtn = $('<button />', { type: 'button', id: 'delBtn' + product.cartNo }).text('X');
			delBtn.on('click', e => {
				svc.cartListDel(product.cartNo, function(result) {
					if (result.retCode == 'Success') {
						$('#delBtn' + product.cartNo).parent().parent().remove();
						alert('장바구니에서 삭제했습니다.');
					} else {
						alert('장바구니에서 삭제 실패했습니다.');
					}
				}, function(err) {
					console.log(err);
				});
			});
			tr.append($('<td />').append(delBtn));
			$('tbody').eq(0).append(tr);
		});
		updateProductPrice();
	}, function(err) {
		console.log(err);
	});
});
$(document).on('click', '.btn-plus', function() {
	let qtyInput = $(this).parent().parent().find('.quantity-amount');
	let currentQty = parseInt(qtyInput.val());
	let maxQty = parseInt(qtyInput.data('max'));
	if (currentQty < maxQty) {
		qtyInput.val(currentQty + 1);
		updateTotalPrice($(this)); // 수량 변경에 따라 총 가격 업데이트
		qtyUpdate($(this)); // 서버로 변경된 수량 전송
		updateProductPrice();
	}
});
$(document).on('click', '.btn-minus', function() {
	let qtyInput = $(this).parent().parent().find('.quantity-amount');
	let currentQty = parseInt(qtyInput.val());
	let minQty = parseInt(qtyInput.data('min'));
	if (currentQty > minQty) {
		qtyInput.val(currentQty - 1);
		updateTotalPrice($(this)); // 수량 변경에 따라 총 가격 업데이트
		qtyUpdate($(this)); // 서버로 변경된 수량 전송
		updateProductPrice();
	}
});
function qtyUpdate(button) {
	let quantity = button.closest('tr').find('.quantity-amount').val();
	let cartNo = button.closest('tr').data('product').cartNo;
	svc.cartUpDate(cartNo, quantity, function(result) {
		console.log('수량 변경 성공')
	}, function(err) {
		console.log('수량 변경 실패.')
	});
}
function updateTotalPrice(button) {
	let qtyInput = button.parent().parent().find('.quantity-amount');
	let currentQty = parseInt(qtyInput.val());
	let product = button.closest('tr').data('product'); // 상품 데이터 가져오기
	let totalPriceCell = qtyInput.closest('tr').find('.product-totalprice');
	let totalPrice = totalPriceCalculate(product, currentQty); // 총 가격 계산
	totalPriceCell.text(totalPrice.formatNumber() + '원'); // totalProduct를 totalPrice로 수정
}
function updateProductPrice() {
    let totalPrice = 0;
    // 각 상품의 가격을 합산
    $('.product-totalprice').each(function() {
        totalPrice += parseInt($(this).text().replace('원', '').replaceAll(',', ''));
    });
    $('#productprice').text(totalPrice.formatNumber() + '원');
    $('#totalprice').text(totalPrice.formatNumber() + '원');
}
function totalPriceCalculate(product, quantity) {
	let price = disPrice(product); // 할인된 가격 계산
	let totalPrice = price * quantity; // 총 가격 계산
	return totalPrice;
}
function disPrice(product) {
	if (parseInt(product.discountPct) > 0) {
		let discPrice = Math.round(parseInt(product.productPrice) * (1 - parseInt(product.discountPct) * 0.01));
		return discPrice;
	} else {
		return parseInt(product.productPrice); // 할인이 적용되지 않은 경우 상품 가격 그대로 반환
	}
}





//   makeTotal();
//   removeCartEvent();
//   modifyCartEvent();
//   orderBtnEvent();

