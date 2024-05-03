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
	}, myReview(successCall, errorCall){
		fetch('/yogidogi/myreviewListAjax.do')
		.then(successCall)
		.catch(errorCall);
	}, addReview(rvo ={}, successCall, errorCall){
		fetch('/yogidogi/addReview.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno +'rcontent' + rcontent + 'rphoto' + rphoto + 'rstar'+rstar
		})
		.then(successCall)
		.catch(errorCall);
	}, delReview(rvo ={}, successCall, errorCall){
		fetch('/yogidogi/delReview.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'rno=' + rno
		})
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
				let disc = $('<td />').append($('<span />').attr('class', 'text-muted text-decoration-line-through price'));
				disc.find('span').text(productPrice * orderQty);
				console.log(disc)
				let newPrice = Math.floor((productPrice * (1 - discountPct*0.01))/100)*100;
				disc.append($('<h2 />').attr('class', 'h5 text-black').html('<br>'+newPrice.formatNumber() + '원'));
				tr.append(disc);
				sumPrice += newPrice;
			}
			$('#reviewBtn').hide();
			console.log($('#reviewBtn:eq(-1)'));
			let reviewBtn = $('<td></td>').append($('#reviewBtn').clone().show());
			tr.append(reviewBtn);
			
			$('#backToList').on('click', e=>{
				location.href='/yogidogi/myOrder.do';
			});
			
			$('#backToShop').on('click', e=>{
				location.href='/yogidogi/productList.do';
			});
			
			$('#sumPrice').text(sumPrice);
			
			$('tbody').eq(0).append(tr);
			$('.product-review:eq(1) button').css('color' , 'white');
			$('.product-review:eq(1) button').css('background-color' , 'black');
			console.log(result);
			$('.rmodal').on('click', function(){
				$('.modal').modal('show');
				
				
				
				rvo = {
					pno: product.productNo,
					rcontent:reContent,
					rphoto: rePhoto,
					rstar: reStar
				}
				
				$('.send').on('click', function(e) {
					svc.addReview(rvo, function(result) {

					}, console.error(err));

				})
			})

			$('.exit').on('click', function(){
				$('.modal').modal('hide');
				let reContent = $('.reviewContent').val();
				let rePhoto = $('.myImg input[name=myImg]');
				let reStar =$('.rating input[name = rating]:checked').val() ;
				console.log(reContent);
				console.log(rePhoto);
				console.log(reStar);
			})
		});
	}, function(err) {
		console.log(err);
	});

});












