/**
 * productList.js 
 * 해야 할 것 : 페이징, 상품 좋아요, 정렬 판매순
 */
//const fields =['productNo','productName', 'productPrice', 'productImg', 'leftCnt', 'launchDate', 'discountPct', 'descImg', 'deleteChk', 'company', 'category'];

$(function() {
	let pvc ={
		order: 1,
		category: 0
	}
	
	let order = pvc.order;

	
	$('#sort a').each((idx, sortMenu) =>{
		$(sortMenu).on('click', e => {
			$(sortMenu).siblings().removeClass('active');
			$(sortMenu).addClass('active');
			if($('#news').hasClass('active')){
				pvc.order = 1;
			}else if($('#news').hasClass('active')){
				pvc.order = 11;
			}else if($('#news').hasClass('active')){
				pvc.order = 11;
			}
		})
	})

	$('.side ul li').each((idx, cate) => {
		$(cate).on('click', function(e) {
			$(cate).siblings().removeClass('active');
			$(cate).addClass('active');
			pvc.category = $(cate).attr('id');
		})
	})
	
	//오류있음
	svc.sortProductList(pvc, function(){
		all(result);
	})
	// give active class to shop
	$('.nav-item').removeClass('active');
	$('.shop').addClass('active');

	console.log(order);
	svc.productList(order, function(result) {	// start of productList
		all(result); // 처음 들어 갔을 때 show all category
		allCnt(result); // 전체 수량 cnt
		cateCnt(result); // category cnt

		like();
	}, function(err) {
		console.error(err);
	})// end of productList
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
}

function like() { // 좋아요 기능
	$('.button-like').on('click', e => {
		e.preventDefault();
		let id = $(e.target).closest('.item').find('.title').attr('id');
		console.log(e);
		if ($(e.target).closest('.button-like').hasClass('liked')) {
			$(e.target).closest('.button-like').removeClass('liked');
		} else {
			$(e.target).closest('.button-like').addClass('liked');
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

function cateChoose(result) {
	let sortCate = []; // sort된 카테고리 담아줄 배열
	let row = $('.container .one');
	let targetId;
	$('.side ul li').each((idx, cate) => {
		$(cate).on('click', function(e) {
			e.preventDefault();
			$('.showProduct').remove();
			$('#sort').show();
			$('.section').show();
			$('.product:gt(0)').remove();
			targetId = e.target.parentElement.id;
			sortCate = [];
			result.forEach(ele => {
				if (parseInt(targetId) == ele.category && parseInt(ele.deleteChk) == 0) {
					sortCate.push(ele); // 같은 category 배열에 저장
					$('.product:eq(0)').hide();
					let product = $('.product:eq(0)').clone().show();
					product.find('.title').text(ele.productName);
					product.find('.title').attr('id', ele.productNo);
					product.find('.price').text(ele.productPrice);
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
				} else if (targetId == 'all' || targetId == 'yogi') {
					$('.product:gt(0)').remove();
					sortCate.push(ele);
					all(result); // 전체 보기 or 요기도기 클릭 시 전체 항목 보여주기
				}
			})
			
			$('#sort a').each((idx, sortMenu) => { // 정렬을 위해
				$(sortMenu).on('click', e => {
					e.preventDefault();
					// give active class when click sorts
					$(sortMenu).siblings().removeClass('active');
					$(sortMenu).addClass('active');
					let sort = sortCate;// sortCate 담은 애들 정렬
					if ($(sortMenu).prop('id') == 'discount') {
						sort = sortCate.sort(function(a, b) {
							return b.discountPct - a.discountPct
						});
					} else if ($(sortMenu).prop('id') == 'sales') {
						sort = sortCate.sort(function(a, b) {
							return b.discountPct - a.discountPct
						});
					} else if ($(sortMenu).prop('id') == 'news') {
						sort = sortCate.sort(function(a, b) {
							return new Date(b.productNo) - new Date(a.productNo)
						});
					}
					$('.product:gt(0)').remove();
					sort.forEach(cateSort => { // sortCate 담은 애들 forEach
						if (parseInt(targetId) == cateSort.category && parseInt(cateSort.deleteChk) == 0) {
							$('.product:eq(0)').hide();
							let product = $('.product:eq(0)').clone().show();
							product.find('.title').text(cateSort.productName);
							product.find('.title').attr('id', cateSort.productNo);
							product.find('.price').text(cateSort.productPrice);
							product.find('.item').attr('href', 'product.do?pno=' + cateSort.productNo);
							let discPrice = Math.round(parseInt(cateSort.productPrice) * (1 - parseInt(cateSort.discountPct) * 0.01) / 100) * 100;
							product.find('.discPrice').text(discPrice);
							product.find('.price').text(cateSort.productPrice);
							if (parseInt(cateSort.discountPct) == 0) {
								product.find('.price').hide();
								product.find('.badge').hide();
							}
							switch (cateSort.category) {
								case 0: product.find('.img').attr('src', 'images/기타잡화/' + cateSort.productImg); break;
								case 1: product.find('.img').attr('src', 'images/사료간식/' + cateSort.productImg); break;
								case 2: product.find('.img').attr('src', 'images/위생배변/' + cateSort.productImg); break;
								case 3: product.find('.img').attr('src', 'images/의류/' + cateSort.productImg); break;
								case 4: product.find('.img').attr('src', 'images/장난감/' + cateSort.productImg); break;
								case 5: product.find('.img').attr('src', 'images/집/' + cateSort.productImg); break;
								default: '';
							}
							row.append(product);
						} else if (targetId == 'all' || targetId == 'yogi') {
							$('.product:gt(0)').remove(); // gt : greater than. 첫번째 요소 제외 지우기
							all(sort); // 전체 보기 or 요기도기 클릭 시 전체 항목 보여주기
						}
					})
				})
			}) //end of sort
		})
	})
}// end of choose category

const svc = {
	//상품 리스트
	productList(order= 1, successCall, errorCall) {
		fetch('productListAjax.do?order='+order) /*최신순 : 1, 할인순: 11*/
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, sortProductList(pvc ={order: 1, category: 1}, successCall, errorCall) {
		fetch('sortProductListAjax.do?order='+order+'&category='+category)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, wishListAdd(pno = 0, successCall, errorCall) {
		fetch('/yogidogi/wishListAdd.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, wishListDel(pno = 0, successCall, errorCall) {
		fetch('/yogidogi/delFromWishList.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pno=' + pno
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}