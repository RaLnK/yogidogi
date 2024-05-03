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
		fetch('/yogidogi/myOrderProduct.do?ono='+ono)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.myOrderProduct(ono, function(result) {
		let sumPrice = 0;
		result.forEach(product => {
			let orderQty = parseInt(product.orderQty);
			let productPrice = parseInt(product.productPrice);
			let discountPct = parseInt(product.discountPct);
			
			let tr = $('<tr />');
			
			let src = '/yogidogi/images/';
			switch (product.category) {
				case 0: src += ('기타잡화/'+product.productImg); break;
				case 1: src += ('사료간식/'+product.productImg); break;
				case 2: src += ('위생배변/'+product.productImg); break;
				case 3: src += ('의류/'+product.productImg); break;
				case 4: src += ('장난감/'+product.productImg); break;
				case 5: src += ('집/'+product.productImg); break;
				default: src='';
			}
			
			tr.append($('<td />').append($('<img />').attr({'src': src, 'class': 'img-fluid', 'alt': 'Image'}).css({'width':'150', 'height':'150'})));
			tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text(product.productName)));
			tr.append($('<td />').attr('class', 'product-quantity').text(orderQty));
			if(discountPct == 0){
				tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text((productPrice * orderQty).formatNumber() + '원')));
				sumPrice += (productPrice * orderQty);
			}else{
				tr.append($('<td />').append($('<span />').attr('class', 'text-muted text-decoration-line-through price').text(productPrice * orderQty)));
				let newPrice = Math.floor((productPrice * (1 - discountPct*0.01))/100)*100;
				tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text('<br>'+newPrice.formatNumber() + '원')));
				sumPrice += newPrice;
			}
			
			$('#backToList').on('click', e=>{
				location.href='/yogidogi/myOrder.do';
			});
			
			$('#backToShop').on('click', e=>{
				location.href='/yogidogi/productList.do';
			});
			
			$('#sumPrice').text(sumPrice);
			
			$('tbody').eq(0).append(tr);
		});
	}, function(err) {
		console.log(err);
	});

});
















