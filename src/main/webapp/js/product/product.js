/**
 * product.js image, kakao 공유
 */
let image;
let pName;
let rPrice;
let dRate;
let dPrice;
$(function() {

	let reviewCnt = 0; // 리뷰 개수
	let starCnt = 0; // 별점 평균
	/* 리뷰 */
	svc2.reviewList(rvo = {
		order: 1,
		pno: pno
	}, function(result) {
		$('.side ul li').hide();
		let temp = $('.side ul li:eq(0)').clone().show();
		temp.appendTo($('.side ul'));
		temp.html('<a href ="productList.do">쇼핑 계속하기</a>');
		
		$('.navRe').on('click', e => {
			$('#detailContent').hide();
			$('#tab-pane-3').show();
			$('.oneReview:eq(0)').hide();
		})
		$('.navDetail').on('click', e => {
			$('#detailContent').show();
			$('#tab-pane-3').hide();
		})

		allReview(result);

		reviewCnt = result.length;
		$('.navRe').text('리뷰 (' + reviewCnt + ')');
		result.forEach(ele => {
			starCnt += ele.starCnt;
		})
		/* 상품 1개*/
		svc2.oneProduct(pno, function(product) {
			pName = product.productName;
			rPrice = product.productPrice;
			dRate =product.discountPct;
			
			$('.productDetail h3:eq(0)').text(product.productName);
			$('.productDetail input[name = rating][value =' + parseInt(starCnt / reviewCnt) + ']').prop('checked', true); // 리뷰 개슈
			$('.productDetail .pt-1').text('(리뷰 ' + reviewCnt + '개)');
			if (product.descText == null) {
				$('.productDetail .proddesc').text('');
			} else {
				$('.productDetail .proddesc').text(product.descText);
			}
			let discPrice = Math.round(parseInt(product.productPrice) * (1 - parseInt(product.discountPct) * 0.01) / 100) * 100;
			dPrice =discPrice;
			discPrice = discPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			let price = product.productPrice;
			price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$('.productDetail').attr('id', product.productNo);
			$('.productDetail .discPercent').text(product.discountPct);
			$('.productDetail .price').text(price + '원');
			$('.productDetail .discPrice').text(discPrice + '원');
			if (parseInt(product.discountPct) == 0) {
				$('.productDetail .discPercent').hide();
				$('.productDetail .discPercent').next().hide();
				$('.productDetail .price').hide();
				$('.showProduct .badge').hide();
			}
			if(parseInt(product.leftCnt) == 0){
				$('#btnCartAdd').html('품 절');
				$('#btnCartAdd').attr('disabled', ture);
			}
			switch (product.category) {
				case 0: image = '/yogidogi/images/기타잡화/' + product.productImg;
					$('.showProduct').find('.img').attr('src', '/yogidogi/images/기타잡화/' + product.productImg);
					$('.descDetail').find('.img').attr('src', '/yogidogi/images/기타잡화/' + product.descImg); break;
				case 1: image = '/yogidogi/images/사료간식/' + product.productImg;
					$('.showProduct').find('.img').attr('src', '/yogidogi/images/사료간식/' + product.productImg);
					$('.descDetail').find('.img').attr('src', '/yogidogi/images/사료간식/' + product.descImg); break;
				case 2: image = '/yogidogi/images/위생배변/' + product.productImg;
					$('.showProduct').find('.img').attr('src', '/yogidogi/images/위생배변/' + product.productImg);
					$('.descDetail').find('.img').attr('src', '/yogidogi/images/위생배변/' + product.descImg); break;
				case 3: image = '/yogidogi/images/의류/' + product.productImg;
					$('.showProduct').find('.img').attr('src', '/yogidogi/images/의류/' + product.productImg);
					$('.descDetail').find('.img').attr('src', '/yogidogi/images/의류/' + product.descImg); break;
				case 4: image = '/yogidogi/images/장난감/' + product.productImg;
					$('.showProduct').find('.img').attr('src', '/yogidogi/images/장난감/' + product.productImg);
					$('.descDetail').find('.img').attr('src', '/yogidogi/images/장난감/' + product.descImg); break;
				case 5: image = '/yogidogi/images/집/' + product.productImg;
					$('.showProduct').find('.img').attr('src', '/yogidogi/images/집/' + product.productImg);
					$('.descDetail').find('.img').attr('src', '/yogidogi/images/집/' + product.descImg); break;
				default: '';
			}
			
			//start of product detail fold, unfold
			$('.btn_open').on('click', e => {
				e.preventDefault();
				let classList = $('.detailinfo');
				
				if (classList.hasClass('showstep1')) {
					classList.removeClass('showstep1');
					$('.btn_open').addClass('hide');
				}

				if (!classList.hasClass('showstep1')) { //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시    
					$(e.target).addClass('hide');
					$('.btn_close').removeClass('hide');
				}
			});

			$('.btn_close').on('click', e => { // 감추기 버튼 이벤트 리스너
				$(e.target).addClass('hide');
				$('.btn_open').removeClass('hide');
				$('.detailinfo').addClass('showstep1');
			}) //end of product detail fold, unfold

		}, function(err) {
			console.error(err);
		})// end of oneProduct function

	}, function(err) {
		console.error(err);
	}) // end of reviewList

	/* 리뷰 최신순, 별점순 정렬*/
	$('#sortReview a').each((idx, ele) => {
		$(ele).on('click', e => {
			e.preventDefault();
			$(ele).siblings().removeClass('active');
			$(ele).addClass('active');
			if ($('#sortReview a:eq(0)').hasClass('active')) {
				order = 1;
			} else {
				order = 7;
			}

			svc2.reviewList(rvo = {
				order: order,
				pno: pno
			}, function(result) {
				allReview(result);

			}, function(err) {
				console.error(err);
			})
		})
	}) // end of sortReview


	// Product Quantity
	$('.quantity button').on('click', function() {
		let button = $(this);
		let oldValue = button.parent().parent().find('input').val();
		let newVal;
		if (button.hasClass('btn-plus')) {
			newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 1) {
				newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		button.parent().parent().find('input').val(newVal);
	});

});

//functions
function allReview(result) { // 리뷰
	$('.oneReview:gt(0)').remove();
	let row = $('#tab-pane-3');
	result.forEach((ele, idx) => {
		$('.oneReview:eq(0)').hide();
		let review = $('.oneReview:eq(0)').clone().show();
		console.log(ele.reviewPhoto);
		review.find('.reviewImg').attr('src', 'images/리뷰/' + ele.reviewPhoto); // 이미지 넣기
		review.find('.rinfo h6').text(ele.memberVO.memberName);
		review.find('.rinfo h6').append('<small> - </small>');
		review.find('.rinfo h6 small').append('<i/>');
		review.find('.rinfo h6 small i').text(ele.reviewDate);
		review.find('.rinfo p').text(ele.reviewContent);
		review.find('.rinfo fieldset input').attr('name', 'rating' + idx); // radio 버튼은 name 값을 다르게 해줘야 한다.
		review.find('.rinfo input[name="rating' + idx + '"][value="' + ele.starCnt + '"]').prop('checked', true);

		row.append(review);
	})

	if (result.length == 0) {
		let noReview = $('<h3>리뷰가 없습니다.</h3>');
		$('#sortReview').append(noReview);
		$('#sortReview').find('h3:gt(0)').remove();
	}

	modal();
}

function modal() {
	// Image Modal
	$(".reviewImg").on('click', function() {
		let img = new Image();
		img.style.objectFit = 'cover';
		img.style.maxWidth = '1200px';
		img.style.maxHeight = '1200px';
		img.src = $(this).attr("src")

		$('.modalBox').html(img);
		$(".modal").show();
	});

	$(".modal").click(function(e) {
		$(".modal").toggle();
	});
}



//공유하기
function shareTwitter() {
	let sendUrl = "http:localhost:8080/yogidogi/product.do?pno=" + pno; // 전달할 URL
	let sendText = "전국구 1위! 요기도기 사이트입니다~";
	window.open("https://twitter.com/intent/tweet?&url=" + sendUrl);
}

function shareFacebook() {
	let sendUrl = "http://localhost:8080/yogidogi/product.do?pno=" + pno; // 전달할 URL
	window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareKakao() {
	let pUrl = "http://localhost:8080/yogidogi/product.do?pno=" + pno;
	console.log(pUrl);
	console.log(image);
	// 사용할 앱의 JavaScript 키 설정
	window.Kakao.init('576fd4e419e207001968763ebc345c79');
	window.Kakao.isInitialized();
	
	// 카카오링크 버튼 생성
	window.Kakao.Link.createDefaultButton({
		container: '#btnKakao', // 카카오공유버튼ID
		objectType: 'commerce',
		content: {
			title: "애견용품 추천!", // 보여질 제목
    		description: "전국구 1위! 요기도기 사이트입니다~", // 보여질 설명
			imageUrl: "http://localhost:8080" + image, // 콘텐츠 URL
			link: {
				mobileWebUrl: pUrl,
				webUrl: pUrl
			},
		},
		commerce: {
			productName:pName,
			regularPrice: rPrice,
			discountRate:dRate,
			discountPrice:dPrice
		},
		buttons: [
			{
				title : '구매하기',
				link : {
					mobileWebUrl: pUrl,
					webUrl:pUrl,
				},
			},
			{
				title : '공유하기',
				link: {
					mobileWebUrl: pUrl,
					webUrl: pUrl, 
				}
			}
		]
	})
}
	
	
/*===================
 cartAdd
====================*/
$('#btnCartAdd').on('click', function() {
	let qty = $('#txtQty').val();

	fetch('cartListAdd.do', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'pno=' + pno + '&qty=' + qty
	})
		.then(response => response.json())
		.then(data => {
			//console.log(data);
			if (data.retCode == "Success") {
				alert('장바구니에 담겼습니다.')
			} else if (data.retCode == "Fail") {
				alert('장바구니에 담기 실패했습니다.')
			} else {
				alert('장바구니에 이미 담겨있습니다.')
			}
		})
})

const svc2 = {
	reviewList(rvo = {}, successCall, errorCall) {
		fetch('/yogidogi/reviewListAjax.do?order=' + order + '&pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}, oneProduct(pno = 0, successCall, errorCall) {
		fetch('/yogidogi/productAjax.do?pno=' + pno)
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}
