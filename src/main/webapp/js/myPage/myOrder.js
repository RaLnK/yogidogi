/**
 * 
 */

const svc = {
	myOrderList(successCall, errorCall) {
		fetch('/yogidogi/myOrderList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	getFirstProductName(ono, successCall, errorCall) {
		fetch('/yogidogi/getFirstProductName.do?ono='+ono)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	wishListAdd(pno, successCall, errorCall) {
		fetch('/yogidogi/wishListAdd.do?pno=' + pno)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.myOrderList(function(result) {
		result.forEach((order, idx) => {
			
			let tr = $('<tr />');
			
			tr.append($('<td />').attr('class', 'order-date').append($('<h2 />').attr('class', 'h5 text-black').text(order.orderDate)));
			tr.append($('<td />').attr('class', 'product-name').append($('<h2 />').attr('class', 'h5 text-black')));
			tr.append($('<td />').attr('class', 'order-status').append($('<h2 />').attr('class', 'h5 text-black').text(order.orderStatus)));
			tr.append($('<td />').attr('class', 'order-price').append($('<h2 />').attr('class', 'h5 text-black').text(order.orderPrice)));
			
			let detailBtn = $('<button />', {type:'button', id:'detailBtn'+order.orderNo}).css({'color':'white','background-color':'black'}).text('상세보기');
			detailBtn.on('click', e=>{
				location.href = '/yogidogi/myOrderDetail.do?ono='+order.orderNo;
			});
			
			tr.append($('<td />').append(detailBtn));
			
			svc.getFirstProductName(order.orderNo, function(result){
				$('tbody tr').eq(idx).find('td').eq(1).text(result.productName);
				console.log(productName, result.productName);
			}, function(err){
				console.log(err);
			});
			
			$('tbody').eq(0).append(tr);
		});
	}, function(err) {
		console.log(err);
	});

});










