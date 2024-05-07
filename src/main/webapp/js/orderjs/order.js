/**
 * orderList.do
 */
const svc = {
	orderListJson(successCall, errorCall) {
		fetch('/yogidogi/orderListJson.do',{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	orderView(successCall, errorCall) {
		fetch('/yogidogi/orderView.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);

	},
	orderInfo(data, successCall, errorCall) {
		fetch('/yogidogi/orderInfo.do',{
			method: 'post',
			body: 'param=' + JSON.stringify(data),
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}
function submitOrder() {
    // 입력된 정보를 가져옴
        let targetName = $('#c_fname').val();
        let targetPhone = $('#c_phone').val();
        let orderAddr = $('#c_address').val();
        let orderAddr2 = $('#c_address2').val();
        let orderReq = $('#c_order_notes').val();

    // 주문 정보 객체 생성
        let orderInfo = {
            targetName: targetName,
            targetPhone: targetPhone,
            orderAddr: orderAddr,
            orderAddr2: orderAddr2,
            orderReq: orderReq,
        	products: []
    };

    // 장바구니에 담긴 각 상품의 정보 가져오기
    $('#orderDetailsBody tr.product').each(function() {
        let product = $(this).data('product');
		orderInfo.products.push({
			productNo: product.productNo,
			productName: product.productName,
			productPrice: product.productPrice,
			orderQty: product.quantity
		})
	})
	// 서버로 주문 정보를 전송
	return orderInfo;
};

document.addEventListener('DOMContentLoaded', function(e) {
    svc.orderView(function(result) {
        let totalPrice = 0; // 총 주문 가격 초기화
        
		// 테이블과 tbody 생성
		let table = $('<table class="table site-block-order-table mb-5"></table>');
		let tbody = $('<tbody id="orderDetailsBody"></tbody>'); // 수정된 부분

		result.forEach(product => {
			// 데이터를 담을 tr 생성
			let tr = $('<tr class="product"></tr>').data('product', product);

			// 상품 정보 채우기
			tr.append($('<td>').text(product.productName).append($('<strong/>').text('x').addClass('mx-2')).append(product.quantity));

			// 상품 가격 출력
			let totalProduct = totalPriceCalculate(product, product.quantity);
			let discPrice = Math.round(parseInt(product.productPrice) * (1 - parseInt(product.discountPct) * 0.01) / 100) * 100;
			let originalPriceText = (product.productPrice * product.quantity).formatNumber() + '원'; // 원래 가격
			let priceText = originalPriceText; // 가격 텍스트 초기화

			// 할인율이 적용된 경우
			if (parseInt(product.discountPct) > 0) {
				originalPriceText = `<del>${originalPriceText}</del>`; // 원래 가격을 del 태그로 처리
				let discountPriceText = (discPrice * product.quantity).formatNumber() + '원'; // 할인된 가격
				priceText = `${originalPriceText} <span style="color: red;">(${product.discountPct}%)</span> ${discountPriceText}`; // 할인율과 할인된 가격을 함께 출력
			}

			tr.append($('<td />').addClass('productsum').html(priceText).append($('<br>')));
			// tbody에 tr 추가
			tbody.append(tr);

			// 상품 가격 합산하여 총 주문 가격 계산
			totalPrice += discPrice * product.quantity;
		});

        // 총 주문 가격 출력
        let totalRow = $('<tr></tr>');
        totalRow.append('<td class="text-black font-weight-bold text-danger"><strong>주문 금액</strong></td>');
        totalRow.append('<td class="text-black">' + totalPrice.formatNumber() + '원</td>'); // 총 주문 가격을 포맷하여 출력
        tbody.append(totalRow);

        let paymentRow = $('<tr></tr>');
        paymentRow.append('<td class="text-black font-weight-bold text-danger"><strong>결제 금액</strong></td>');
        paymentRow.append('<td class="text-black font-weight-bold"><strong>' + totalPrice.formatNumber() + '원</strong></td>'); // 결제 금액도 포맷하여 출력
        tbody.append(paymentRow);

        // tbody를 테이블에 추가
        table.append(tbody);

        // orderDetailsBody에 테이블 추가
        $('#orderDetailsBody').html(table);
    }, function(err) {
        console.log(err);
    });
});

function requestPay() {
    console.log('test');

    let totalPrice = 0;
    let productName = $('#orderDetailsBody').val();
    let targetName = $('#c_fname').val(),
        targetPhone = $('#c_phone').val(),
        orderAddr = $('#c_address').val(),
        orderAddr2 = $('#c_address2').val(),
        orderReq = $('#c_order_notes').val();

    fetch('orderView.do')
        .then(resolve => resolve.json())
        .then((product) => {
            product.forEach(product => {
                totalPrice += totalPriceCalculate(product, product.quantity);
                productName += `${product.productName},`;
            });
            return initiatePayment(totalPrice, productName, targetName, targetPhone, orderAddr, orderAddr2);
        })
        .catch(error => {
            console.error('카트 데이터 가져오기 실패', error);
        });
}

function initiatePayment(totalPrice, productNames, targetName, targetPhone, orderAddr, orderAddr2) {
    //가맹점 식별코드
    IMP.init('imp06781844');
    IMP.request_pay({
        pg: 'kakaopay',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: productNames, //결제창에서 보여질 이름
        amount: totalPrice, //실제 결제되는 가격
        buyer_email: '',
        buyer_name: targetName,
        buyer_tel: targetPhone,
        buyer_addr: `${orderAddr}, ${orderAddr2}`,
    }, function(rsp) {
        console.log(rsp);
        if (rsp.success) {
            Swal.fire({
                title: "결제완료",
                html: "고유ID: " + rsp.imp_uid + "<br/>" + "상점거래 ID: " + rsp.merchant_uid +
                    "<br/>" + "결제 금액: " + rsp.paid_amount.formatNumber() + "원<br/>" +
                    "카드승인번호: " + rsp.apply_num,
                icon: "success",
                confirmButtonColor: "#ff3368",
                confirmButtonText: "확인",
            }).then((result) => {
				let data = submitOrder();
				data.orderPrice = rsp.paid_amount;
				svc.orderInfo(data,  (result)=>{		
					if (result.retCode == 'Success') {
						console.log('주문 정보가 성공적으로 전송되었습니다.');
						//location.href = 'myOrder.do';
					} else {
						console.error('주문 정보 전송에 실패했습니다.');
					}			
				},(err)=>{
					 console.error('주문 정보 전송 중 오류가 발생했습니다.', err);
				})
				
				           })
        } else {
            Swal.fire({
                title: "결제실패",
                html: "에러내용: " + rsp.error_msg,
                icon: 'error',
                confirmButtonColor: 'ff3368',
                confirmButtonText: '확인'
            })
        }
    });
}

// '다음' 주소찾기

function execution_daum_address(){
 		console.log("동작");
	   new daum.Postcode({
	        oncomplete: function(data) {
                let addr = ''; // 주소 변수
                let extraAddr = ''; // 참고항목 변수
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }
                if(data.userSelectedType === 'R'){
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                      addr += extraAddr;
                
                } else {
                	addr += ' ';
                }
                $("#c_address").val(data.zonecode);
                $("#c_address").val(addr);				
                // 커서를 상세주소 필드로 이동한다.
                $("#c_address2").attr("readonly", false);
                $("#c_address2").focus();	 
	        }
	    }).open();  	
}

// 숫자 , 표시
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
// 할인된 가격
function disPrice(product) {
    if (parseInt(product.discountPct) > 0) {
        let discPrice = Math.round(parseInt(product.productPrice) * (1 - parseInt(product.discountPct) * 0.01));
        return discPrice;
    } else {
        return parseInt(product.productPrice); // 할인이 적용되지 않은 경우 상품 가격 그대로 반환
    }
}
// 총 가격 계산  
function totalPriceCalculate(product, quantity) {
	let price = disPrice(product); // 할인된 가격 계산
	let totalPrice = price * quantity; // 총 가격 계산
	return totalPrice;
}