/**
 * productList.js 
 * 해야 할 것 : 페이징, 상품 좋아요, 정렬 판매순
 */
//const fields =['productNo','productName', 'productPrice', 'productImg', 'leftCnt', 'launchDate', 'discountPct', 'descImg', 'deleteChk', 'company', 'category'];

$(function() {
	// give active class to shop
	$('.nav-item').removeClass('active');
	$('.shop').addClass('active');
	
/*	
	<div class="center">
  <div class="pagination">
  <c:if test="${paging.prev}">
  	<a href="boardList.do?page=${paging.startPage-1}&searchCondition=${searchCondition}&keyword=${keyword}">&laquo;</a> <!--&laquo, &raquo : 꺽쇄  -->
  </c:if>
  
  <c:forEach var="p" begin="${paging.startPage}" end="${paging.endPage }">
  	<c:choose>
  		<c:when test="${p == paging.page}">
			 <a href="boardList.do?page=${p}&searchCondition=${searchCondition}&keyword=${keyword}" class = "active">${p}</a>
  		</c:when>
  		<c:otherwise>
  			<a href="boardList.do?page=${p}&searchCondition=${searchCondition}&keyword=${keyword}" >${p}</a>
  		</c:otherwise>
  	</c:choose>
  </c:forEach>
  
   <c:if test="${paging.next}">
  	<a href="boardList.do?page=${paging.endPage+1}&searchCondition=${searchCondition}&keyword=${keyword}">&raquo;</a> <!--&laquo, &raquo : 꺽쇄  -->
  </c:if>
  </div>
</div>*/
// p, pc
// n, s, d

	$('#sort #news').attr('href', 'productList2.do?page=' + page + '&searchCondition=P&sortCondition=N&keyword=' + keyword);
	$('#sort #sales').attr('href', 'productList2.do?page=' + page + '&searchCondition=P&sortCondition=S&keyword=' + keyword);
	$('#sort #sales').attr('href', 'productList2.do?page=' + page + '&searchCondition=P&sortCondition=D&keyword=' + keyword);
	
	$('.side ul li').each((idx, li) => {
		$(li).attr('href', 'productList2.do?page=' + page + '&searchCondition=PC&sortCondition=' + sortCondition + '&keyword=' + keyword);

		$('#sort #news').attr('href', 'productList2.do?page=' + page + '&searchCondition=PC&sortCondition=N&keyword=' + keyword);
		$('#sort #sales').attr('href', 'productList2.do?page=' + page + '&searchCondition=PC&sortCondition=S&keyword=' + keyword);
		$('#sort #sales').attr('href', 'productList2.do?page=' + page + '&searchCondition=PC&sortCondition=D&keyword=' + keyword);
	})
	
	if(pagePrev){
		$('.prevPage').attr('href', 'productList2.do?page='+(parseInt(startPage)-1)+'&searchCondition='+searchCondition+'&sortCondition='+sortCondition+'&keyword='+keyword);
	}
	
	$('.page:eq(0)').hide();
	for(let i=startPage; i<= endPage; i++){
		let page = $('.page').clone().show();
		if(i == page){
			page.attr('href', 'productList2.do?page=' + page + '&searchCondition=' + searchCondition + '&keyword=' + keyword);
			page.addClass('active');
		}else{
			page.attr('href', 'productList2.do?page=' + page + '&searchCondition=' + searchCondition + '&keyword=' + keyword);
			page.removeClass('active');
		}
		$('.prevPage').append(page);
	}
	
	if(pageNext){
		$('.nextPage').attr('href', 'productList2.do?page='+(parseInt(endPage)+1)+'&searchCondition='+searchCondition+'&keyword='+keyword);
	}
	
	like();

})
//functions 
function all(result) { // 전체 상품
	$('.product:gt(0)').remove();
	let row = $('.container .one');
	$('.product:eq(0)').hide();
	
	plist
	result.forEach(ele => {
		if (parseInt(ele.deleteChk) == 0) {
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

	$('.nav-item').on('click', e => { // nav의 메뉴가 바뀔때만 category를 all로 설정 => cart page 에선 유지
		$(window).on('unload', function() {
			sessionStorage.setItem('category', 'all');
		});

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


