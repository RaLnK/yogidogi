/**
 * productList.js 
 * 해야 할 것 : 페이징, 상품 좋아요, 정렬 판매순
 */
//const fields =['productNo','productName', 'productPrice', 'productImg', 'leftCnt', 'launchDate', 'discountPct', 'descImg', 'deleteChk', 'company', 'category'];

$(function() {
	// give active class to shop
	$('.nav-item').removeClass('active');
	$('.shop').addClass('active');

	let pvc = {
		order: 1,
		category: 1
	}
	let order = pvc.order;

	// 첫화면
	svc.productList(order, function(result) {	// start of productList
		all(result); // 처음 들어 갔을 때 show all category
		allCnt(result); // 전체 수량 cnt
		cateCnt(result); // category cnt

	}, function(err) {
		console.error(err);
	})// end of productList


	//최신순, 판매순, 할인율순
	$('#sort a').on('click', e => {
		e.preventDefault();
		$(e.target).siblings().removeClass('active');
		$(e.target).addClass('active');
		
		let findCate = $('.side ul').find('.active').prop('id');

		if(findCate == 'all' || findCate == 'yogi'){
			if ($('#news').hasClass('active')) {
				pvc.order = 1;
			} else if ($('#sales').hasClass('active')) {
				pvc.order = 11;
			} else if ($('#discount').hasClass('active')) {
				pvc.order = 11;
			}
			order = pvc.order;
			svc.productList(order, function(result) {
				all(result);
			}, function(err) {
				console.error(err);
			})
			
		}else{
			pvc.category = findCate;
			if ($('#news').hasClass('active')) {
				pvc.order = 1;
			} else if ($('#sales').hasClass('active')) {
				pvc.order = 11;
			} else if ($('#discount').hasClass('active')) {
				pvc.order = 11;
			}
			console.log(pvc);
			svc.sortProductList(pvc, function(result) {
				all(result);
			}, function(err) {
				console.error(err);
			})
		}
	})

	//start show each category
	$('.side ul li').on('click', function(e) {
		e.preventDefault();
		$(e.target).closest('ul').find('.active').removeClass('active'); // 선택 시 li tag에 active 줌ㄴ
		$(e.target).parent().addClass('active');
		let targetId = $(e.target).parent().prop('id');
		if (targetId == 'all' || targetId == 'yogi') {
			svc.productList(order, function(result) {
				all(result);
			}, function(err) {
				console.log(err);
			})
		} else {
			pvc.category = parseInt(targetId);
			svc.sortProductList(pvc, function(sortResult) {
				all(sortResult);
			}, function(err) {
				console.log(err);
			})
		}
	})//end show each category
	
})


//functions 
function all(result) { // 전체 상품
	$('.product:gt(0)').remove();
	let row = $('.container .one');
	result.forEach(ele => {
		if (parseInt(ele.deleteChk) == 0) {
			$('.product:eq(0)').hide();
			let product = $('.product:eq(0)').clone().show();
			product.find('.title').text(ele.productName);
			product.find('.title').attr('id', ele.productNo);
			product.find('.item').attr('href', 'product.do?pno=' + ele.productNo);
			let discPrice = Math.round(parseInt(ele.productPrice) * (1 - parseInt(ele.discountPct) * 0.01) / 100) * 100;
			product.find('.discPrice').text(discPrice);
			product.find('.price').text(ele.productPrice);
			if (parseInt(ele.discountPct) == 0) {
				product.find('.price').hide();
				product.find('.badge').hide();
			}
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
	})
	like();
}

function like() { // 좋아요 기능
	if (memberNo != '') {
		svc.wishList(memberNo, function(result) { // 이미 좋아요한 상품에 좋아요 표시하기
			result.forEach(liked => {
				$('.title').each((idx, item) => {
					if (parseInt($(item).attr('id')) == liked.productNo) { // productList에 like 표시
						$(item).closest('.product').find('.button-like').addClass('liked');
					}
				})
				if (parseInt($('.productDetail').attr('id')) == liked.productNo) {// product에 like 표시
					$('#' + liked.productNo).find('.button-like').addClass('liked');
				}
			})
		})
	}
	
	$('.button-like').on('click', e => {
		if (memberNo == '') {
			alert('로그인을 해주세요');
			location.href = '/yogidogi/loginForm.do'
		} else {
			let pno = 0;
			console.log($(e.target).parent().attr('id'));
			if ($(e.target).parent().attr('id') == 'productListLike') {
				pno = $(e.target).closest('.product').find('.title').attr('id');
			} else if ($(e.target).parent().attr('id') == 'productLike') {
				const urlParams = new URL(location.href).searchParams; // url pno 값 가져오기
				pno = urlParams.get('pno');
			}
			if ($(e.target).closest('.button-like').hasClass('liked')) {
				svc.delFromWishList(parseInt(pno), function(result) {
					if (result.retCode == 'Success') {
						alert('위시리스트에서 제거되었습니다.');
						$(e.target).closest('.button-like').removeClass('liked');
					} else {
						alert('실패했습니다');
					}

				}, function(err) {
					console.log(err);
				})
			} else {
				svc.addToWishList(parseInt(pno), function(result) {
					if (result.retCode == 'Success') {
						alert('위시리스트에 담았습니다.')
						$(e.target).closest('.button-like').addClass('liked');
					} else {
						alert('실패했습니다');
					}
				}, function(err) {
					console.log(err);
				})
			}


		}
	})
}

function cateCnt(result) { // 카테고리 count
	for (let i = 0; i <= 5; i++) {
		let cateCnt = [];
		let cateMenu;
		result.forEach(ele => {
			if (parseInt(ele.category) == i && parseInt(ele.deleteChk) == 0) { // 카테고리 찾기
				cateCnt.push(ele.category);
				let li = $('.side li');
				li.each((idx, findLi) => { // id 찾기
					if (parseInt(findLi.id) == i) {
						cateMenu = $('#' + i).children().text();
					}
				})
			}
		})
		$('#' + i).children().text(cateMenu + '(' + cateCnt.length + ')')
	}
}

function allCnt(result) { // 전체 count
	let allCnt = [];
	let allMenu;
	result.forEach(ele => {
		if (parseInt(ele.deleteChk) == 0) {
			allCnt.push(ele.deleteChk);
			allMenu = $('#all a').text();
		}
	})
	$('#all a').text(allMenu + '(' + allCnt.length + ')');
}


const svc = {
	//상품 리스트
	productList(order = 1, successCall, errorCall) {
		fetch('/yogidogi/productListAjax.do?order=' + order) /*최신순 : 1, 할인순: 11*/
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, sortProductList(pvc = { order: 1, category: 1 }, successCall, errorCall) {
		fetch('/yogidogi/sortProductListAjax.do?order=' + pvc.order + '&category=' + pvc.category)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, addToWishList(pno = 0, successCall, errorCall) {
		fetch('/yogidogi/addToWishList.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, delFromWishList(pno = 0, successCall, errorCall) {
		fetch('/yogidogi/delFromWishList.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, wishList(memberNo = 0, successCall, errorCall ){
		fetch('/yogidogi/wishListAjax.do?memberNo=' + memberNo) /*최신순 : 1, 할인순: 11*/
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}