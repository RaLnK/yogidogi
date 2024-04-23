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
			$('.product:eq(0)').hide();
			let product = $('.product:eq(0)').clone().show();
			//console.log(product.find('.title').text());
			product.find('.title').text(ele.productName);
			product.find('.price').text(ele.productPrice);
			switch (ele.category) {
				case 0: product.find('.img').attr('src', 'images/기타잡화/' + ele.productImg); break;
				case 1: product.find('.img').attr('src', 'images/사료간식/' + ele.productImg); break;
				case 2: product.find('.img').attr('src', 'images/위생배변/' + ele.productImg); break;
				case 3: product.find('.img').attr('src', 'images/의류/' + ele.productImg); break;
				case 4: product.find('.img').attr('src', 'images/장난감/' + ele.productImg); break;
				case 5: product.find('.img').attr('src', 'images/집/' + ele.productImg); break;
				default: '';
			}
			row.append(product);
		}
		)

	}, function(err) {
		console.error(err);
	})
	
	$('.side ul li').each((idx, ele) => {
		console.log(ele);
		$(ele).on('click', function(e) {
			e.preventDefault();
			let target = $(e.target);
			let targetId = target.$('id');
			console.log(targetId);
	$('nav li')
	//const fields =['productNo','productName', 'productPrice', 'productImg', 'leftCnt', 'launchDate', 'discountPct', 'descImg', 'deleteChk', 'company', 'category'];
	//const category =[0, 1, 2, 3, 4, 5]
	//$('.product').hide();
	let row = $('.container .one');
	//상품 리스트 
	svc.productList(function(result) {

		result.forEach(ele => {
			$('.product:eq(0)').hide();
			let product = $('.product:eq(0)').clone().show();
			//console.log(product.find('.title').text());
			product.find('.title').text(ele.productName);
			product.find('.price').text(ele.productPrice);
			switch (ele.category) {
				case 0: product.find('.img').attr('src', 'images/기타잡화/' + ele.productImg); break;
				case 1: product.find('.img').attr('src', 'images/사료간식/' + ele.productImg); break;
				case 2: product.find('.img').attr('src', 'images/위생배변/' + ele.productImg); break;
				case 3: product.find('.img').attr('src', 'images/의류/' + ele.productImg); break;
				case 4: product.find('.img').attr('src', 'images/장난감/' + ele.productImg); break;
				case 5: product.find('.img').attr('src', 'images/집/' + ele.productImg); break;
				default: '';
			}
			row.append(product);

		})


		})
	})	


})
		// 카테고리별 
		$('.side ul li').each((idx, category) => {
			//console.log(ele);
			$(category).on('click', function(e) {
				e.preventDefault();
				$('.product').hide();
				let targetId = e.target.parentElement.id;
				//console.log(targetId);
				result.forEach(ele => {
					if (parseInt(targetId) == ele.category) {
						$('.product:eq(0)').hide();
						let product = $('.product:eq(0)').clone().show();
						//console.log(product.find('.title').text());
						product.find('.title').text(ele.productName);
						product.find('.price').text(ele.productPrice);
						switch (ele.category) {
							case 0: product.find('.img').attr('src', 'images/기타잡화/' + ele.productImg); break;
							case 1: product.find('.img').attr('src', 'images/사료간식/' + ele.productImg); break;
							case 2: product.find('.img').attr('src', 'images/위생배변/' + ele.productImg); break;
							case 3: product.find('.img').attr('src', 'images/의류/' + ele.productImg); break;
							case 4: product.find('.img').attr('src', 'images/장난감/' + ele.productImg); break;
							case 5: product.find('.img').attr('src', 'images/집/' + ele.productImg); break;
							default: '';
						}
						row.append(product);
					} else if (targetId == 'all' || targetId =='yogi') {
						$('.product').hide();
						result.forEach(ele => {
							$('.product:eq(0)').hide();
							let product = $('.product:eq(0)').clone().show();
							//console.log(product.find('.title').text());
							product.find('.title').text(ele.productName);
							product.find('.price').text(ele.productPrice);
							switch (ele.category) {
								case 0: product.find('.img').attr('src', 'images/기타잡화/' + ele.productImg); break;
								case 1: product.find('.img').attr('src', 'images/사료간식/' + ele.productImg); break;
								case 2: product.find('.img').attr('src', 'images/위생배변/' + ele.productImg); break;
								case 3: product.find('.img').attr('src', 'images/의류/' + ele.productImg); break;
								case 4: product.find('.img').attr('src', 'images/장난감/' + ele.productImg); break;
								case 5: product.find('.img').attr('src', 'images/집/' + ele.productImg); break;
								default: '';
							}
							row.append(product);

						})

					}
				})
			})// end of choose category
		})

	}, function(err) {
		console.error(err);
	})// end of productList



const svc ={
	//상품 리스트
	productList(successCall, errorCall){
		fetch('productListAjax.do')
		.then(result => result.json())
		.then(successCall)
		.catch(errorCall);
	}
}