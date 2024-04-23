/**
 * productList.js
 */
$(function() {
	
	//const fields =['productNo','productName', 'productPrice', 'productImg', 'leftCnt', 'launchDate', 'discountPct', 'descImg', 'deleteChk', 'company', 'category'];
	//const category =[0, 1, 2, 3, 4, 5]
	//$('.product').hide();
	let row = $('.container .one');
	
	//상품 리스트 
	
	svc.productList(function(result) {
		result.forEach(ele => {
			//if (ele.category == 5) {
				$('.product:eq(0)').hide();
				let product = $('.product:eq(0)').clone().show();
				console.log(product.find('.title').text());
				//console.log(product.find('.price'));
				//console.log(ele.category);
				product.find('.title').text(ele.productName);
				product.find('.price').text(ele.productPrice);
				//product.find('.img').attr('src', ele.productImg);

			    row.append(product);
			//}

		})

	}, function(err) {
		console.error(err);
	})
	
	


})

const svc ={
	//상품 리스트
	productList(successCall, errorCall){
		fetch('productListAjax.do')
		.then(result => result.json())
		.then(successCall)
		.catch(errorCall);
	}
}