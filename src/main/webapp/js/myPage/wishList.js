/**
 * 
 */

const svc = {
	wishListAjax(successCall, errorCall) {
		fetch('/yogidogi/memberWishListAjax.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	wishListAdd(pno, successCall, errorCall) {
		fetch('/yogidogi/wishListAdd.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	wishListDel(pno, successCall, errorCall) {
		fetch('/yogidogi/wishListDel.do', {
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
		result.forEach(product => {
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
			
			tr.append($('<td />').append($('<img />').attr({'src': src, 'class': 'img-fluid', 'alt': 'Image'}).css({'width':'200', 'height':'200'})));
			tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text(product.productName)));
			tr.append($('<td />').attr('class', 'product-name').text(product.productPrice));
			
			let addBtn = $('<button />', {type:'button', id:'addBtn'+product.productNo}).css({'color':'white','background-color':'black'}).text('추가');
			addBtn.on('click', e=>{
				svc.wishListAdd(product.productNo, function(result){
					if(result.retCode == 'Success'){
						alert('장바구니에 추가했습니다');
					}else if(result.retCode == 'Already'){
						alert('이미 장바구니에 담긴 상품입니다');
					}else{
						alert('실패했습니다');
					}
				}, function(err){
					console.log(err);
				});
			});
			
			let delBtn = $('<button />', {type:'button', id:'delBtn'+product.productNo}).css({'color':'white','background-color':'black'}).text('삭제');
			delBtn.on('click', e=>{
				svc.wishListDel(product.productNo, function(result){
					if(result.retCode == 'Success'){
						$('#delBtn'+product.productNo).parent().parent().remove();
						alert('삭제했습니다');
					}else{
						alert('실패했습니다');
					}
					
				}, function(err) {
					console.log(err);
				});
			});
			
			tr.append($('<td />').append(addBtn));
			tr.append($('<td />').append(delBtn));
			$('tbody').eq(0).append(tr);
		});
	}, function(err) {
		console.log(err);
	});

});
















