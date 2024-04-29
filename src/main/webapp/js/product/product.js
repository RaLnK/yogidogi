/**
 * product.js image, kakao 공유
 */
$(function() {

	let reviewCnt = 0; // 리뷰 개수
	let starCnt = 0; // 별점 평균
	/* 리뷰 */
	svc2.reviewList(rvo = {
		order: 1,
		pno: pno
	}, function(result) {
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
			console.log(product);

			$('.productDetail h3:eq(0)').text(product.productName);
			$('.productDetail input[name = rating][value =' + parseInt(starCnt / reviewCnt) + ']').prop('checked', true); // 리뷰 개슈
			$('.productDetail .pt-1').text('(리뷰 ' + reviewCnt + '개)');
			if (product.descText == null) {
				$('.productDetail .proddesc').text('');
			} else {
				$('.productDetail .proddesc').text(product.descText);
			}
			let discPrice = Math.round(parseInt(product.productPrice) * (1 - parseInt(product.discountPct) * 0.01) / 100) * 100;
			$('.productDetail .discPercent').text(product.discountPct);
			$('.productDetail .price').text(product.productPrice + '원');
			$('.productDetail .discPrice').text(discPrice + '원');
			if (parseInt(product.discountPct) == 0) {
				$('.productDetail .discPercent').hide();
				$('.productDetail .discPercent').next().hide();
				$('.productDetail .price').hide();
				$('.showProduct .badge').hide();
			}
			switch (product.category) {
				case 0: $('.showProduct').find('.img').attr('src', 'images/기타잡화/' + product.productImg);
					$('.descDetail').find('.img').attr('src', 'images/기타잡화/' + product.descImg); break;
				case 1: $('.showProduct').find('.img').attr('src', 'images/사료간식/' + product.productImg);
					$('.descDetail').find('.img').attr('src', 'images/사료간식/' + product.descImg); break;
				case 2: $('.showProduct').find('.img').attr('src', 'images/위생배변/' + product.productImg);
					$('.descDetail').find('.img').attr('src', 'images/위생배변/' + product.descImg); break;
				case 3: $('.showProduct').find('.img').attr('src', 'images/의류/' + product.productImg);
					$('.descDetail').find('.img').attr('src', 'images/의류/' + product.descImg); break;
				case 4: $('.showProduct').find('.img').attr('src', 'images/장난감/' + product.productImg);
					$('.descDetail').find('.img').attr('src', 'images/장난감/' + product.descImg); break;
				case 5: $('.showProduct').find('.img').attr('src', 'images/집/' + product.productImg);
					$('.descDetail').find('.img').attr('src', 'images/집/' + product.descImg); break;
				default: '';
			}
			
			$('.btn_open').on('click', e => {
				e.preventDefault();
				let classList = $('.detailinfo');
				console.log(classList);
				let contentHeight = $('.detailinfo .descDetail').outerHeight(); // 컨텐츠 높이 얻기
				// 1단계이면 2단계로 
				if (classList.hasClass('showstep1')) {
					classList.removeClass('showstep1');
					$('.btn_open').addClass('hide');
				}

				//전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시        
				if (!classList.hasClass('showstep1')) {
					$(e.target).addClass('hide');
					$('.btn_close').removeClass('hide');
				}
			});//end of btn_open event

			// 감추기 버튼 이벤트 리스너
			$('.btn_close').on('click', e => {
				$(e.target).addClass('hide');
				$('.btn_open').removeClass('hide');
				$('.detailinfo').addClass('showstep1');
			})

		}, function(err) {
				console.error(err);
			})// end of oneProduct


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

			},// end of successCall;
				function(err) {
					console.error(err);
				})// end of errorCall
		})
	})


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
			let review = $('.oneReview:eq(0)').clone().show()
			//review.find('.rinfo img').text(ele.memberVO.memberName); 이미지 넣어야 됨!!!
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
	let sendUrl = "http://localhost:8080/yogidogi/product.do?pno=" + pno; // 전달할 URL
	window.open("https://twitter.com/intent/tweet?&url=" + sendUrl);
}

function shareFacebook() {
	let sendUrl = "http://localhost:8080/yogidogi/product.do?pno=" + pno; // 전달할 URL
	window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}





	const svc2 = {
		reviewList(rvo = {}, successCall, errorCall) {
			fetch('reviewListAjax.do?order=' + order + '&pno=' + pno)
				.then(result => result.json())
				.then(successCall)
				.catch(errorCall);
		}, oneProduct(pno = {}, successCall, errorCall) {
			fetch('productAjax.do?pno=' + pno)
				.then(result => result.json())
				.then(successCall)
				.catch(errorCall);
		}
	}