/**
 * productList.js 
 * 해야 할 것 : 페이징, 상품 좋아요, 정렬 판매순
 */
//const fields =['productNo','productName', 'productPrice', 'productImg', 'leftCnt', 'launchDate', 'discountPct', 'descImg', 'deleteChk', 'company', 'category'];
let param;
let pvc;
$(function() {
	// give active class to shop
	$('.nav-item').removeClass('active');
	$('.shop').addClass('active');
	
	param = {
		order: 2,
		page:1
	}

	pvc = {
		order: 1,
		category: 1
	}
	
	let cate = pvc.category;
	let order = param.order;

	// 첫화면
	svc.productList(param, function(result) {	// start of productList
		//all(result); // 처음 들어 갔을 때 show all category
		let cateId = sessionStorage.getItem('category');
		if (cateId == null) {
			cateId = 'all';
		} else {
			cateId = sessionStorage.getItem('category');
		}
		category(".side-bar #" + cateId + ' a');
		allCnt(); // 전체 수량 cnt
		cateCnt(); // category cnt

	}, function(err) {
		console.error(err);
	})// end of productList


	//최신순, 판매순, 할인율순
	$('#sort a').on('click', e => {
		e.preventDefault();
		$(e.target).siblings().removeClass('active');
		$(e.target).addClass('active');
		let findCate = $('.side ul').find('.active').prop('id');
		param.order = $(e.target).data('order');

		if (findCate == 'all' || findCate == 'yogi') {
			order = param.order;
			svc.productList(param, function(result) {
				all(result);
			}, function(err) {
				console.error(err);
			})

		} else {
			pvc.category = findCate;
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
		let targetId = $(e.target).parent().prop('id');
		sessionStorage.setItem('category', targetId);
		category(e.target);
	})//end show each category

	function category(obj) {
		$(obj).closest('ul').find('.active').removeClass('active'); // 선택 시 li tag에 active 줌
		$(obj).parent().addClass('active');

		let targetId = $(obj).parent().prop('id');
		if (targetId == 'all' || targetId == 'yogi') {
			svc.productList(param, function(result) {
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
	}

})
//functions 
function all(result) { // 전체 상품
	$('.product:gt(0)').remove();
	let row = $('.container .one');
	$('.product:eq(0)').hide();
	result.forEach(ele => {

		let product = $('.product:eq(0)').clone().show();
		product.find('.title').text(ele.productName);
		product.find('.title').attr('id', ele.productNo);
		product.find('.item').attr('href', 'product.do?pno=' + ele.productNo);
		let discPrice = Math.round(parseInt(ele.productPrice) * (1 - parseInt(ele.discountPct) * 0.01) / 100) * 100;
		product.find('.discPrice').text(discPrice+'원');
		product.find('.price').text(ele.productPrice+'원');
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

	})
	like();
	svc.allCnt(createPageList, function(err) {console.error(err);});
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

	$('.nav-item').on('click', e => { // nav의 메뉴가 바뀔때만 category를 all로 설정 => cart page 에선 유지
		$(window).on('unload', function() {
			sessionStorage.setItem('category', 'all');
		});

	})

}



function cateCnt() { // 카테고리 count
	for (let i = 0; i <= 5; i++) {
		svc.selectCnt(i, function(result) {
			menu = $('.side #' + i).text();
			$('.side #' + i + ' a').text(menu + '(' + result.totalCount + ')');

		}, function(err) {
			console.log(err);
		})
	}
}

function allCnt() { // 전체 count
	svc.allCnt(function(result) {
		allMenu = $('#all a').text();
		$('#all a').text(allMenu + '(' + result.totalCount + ')');
	}, function(err) {
		console.log(err);
	})

}


//paging 생성
let page =1; // page 초기값
let pageTarget = document.querySelector('div.pagination');

function createPageList(result) {
	//기존 태그가 존재하면 초기화
	pageTarget.innerHTML = '';

	//console.log(result); // {"totalCount": 64}
	let totalCnt = result.totalCount;
	let startPage, endPage; // 시작 페이지, 마지막 페이지
	let next, prev; // 이전, 이후
	let realEnd = Math.ceil(totalCnt / 5); // 실제 페이지

	endPage = Math.ceil(page / 5) * 5; // 계산 상의 페이지. 실제 페이지는 다름
	startPage = endPage - 4;
	endPage = endPage > realEnd ? realEnd : endPage;

	next = endPage < realEnd ? true : false;
	prev = startPage > 1;
	
	console.log(realEnd);

	
	if (prev) {
		let aTag = document.createElement('a');
		aTag.innerHTML = "&laquo;";
		aTag.href = "#"; //링크 모양을 주려고
		aTag.setAttribute('data-page', (startPage - 1));
		pageTarget.appendChild(aTag);
	}

	// a 태그 생성
	for (let pg = startPage; pg <= endPage; pg++) {
		let aTag = document.createElement('a');
		aTag.innerHTML = pg;
		aTag.href = "#"; //링크 모양을 주려고
		aTag.setAttribute('data-page', pg); // 값 담을 때
		pageTarget.appendChild(aTag);
		if (pg == page) {
			aTag.className = 'active';
		}

	}

	if (next) {
		let aTag = document.createElement('a');
		aTag.innerHTML = "&raquo;";
		aTag.href = "#"; //링크 모양을 주려고
		aTag.setAttribute('data-page', (endPage + 1));
		pageTarget.appendChild(aTag);
	}

	//pagination 이동
	document.querySelectorAll('.pagination>a').forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault(); // 페이지 이동 차단 : a 태그는 원래 클릭하면 다른 페이지로 넘어가기 때문
			console.log(item.dataset.page); // 값 가져올 때
			page = item.dataset.page;
			svc.productList(param, function(result) {	// start of productList
				//all(result); // 처음 들어 갔을 때 show all category
				let cateId = sessionStorage.getItem('category');
				if (cateId == null) {
					cateId = 'all';
				} else {
					cateId = sessionStorage.getItem('category');
				}
				category(".side-bar #" + cateId + ' a');
				allCnt(); // 전체 수량 cnt
				cateCnt(); // category cnt

			}, function(err) {
				console.error(err);
			})// end of productList;
		})
	})

}//end of createPageList;

const svc = {
	//상품 리스트
	productList(param={order:2, page:1}, successCall, errorCall) {
		fetch('/yogidogi/productListAjax.do?order=' + param.order +'&page='+ param.page) /*최신순 : 1, 할인순: 11*/
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, sortProductList(pvc = { order: 2, category: 1 }, successCall, errorCall) {
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
	}, allCnt(successCall, errorCall){
		fetch('/yogidogi/getProdCount.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, selectCnt(category =0, successCall, errorCall){
		fetch('/yogidogi/selectProdCount.do?category='+ category)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}


