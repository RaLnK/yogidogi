/**
 * 
 */
$(function() {
	/* 상품 1개*/
	svc2.oneProduct(pno, function(result){
		console.log(result);
		$('.productDetail h3:eq(0)').text(result.productName);
		
		
	}, function(err){
		console.error(err);
	})
	
	/* 리뷰 */
	svc2.reviewList(rvo = {
		order: 1,
		pno: pno
	}, function(result) {
		allReview(result);
		
	},// end of successCall;
		function(err) {
			console.error(err);
		})// end of errorCall
	
	
	/* 리뷰 최신순, 별점순 정렬*/
	$('#sortReview a').each((idx, ele) => {
		$(ele).on('click', e => {
			e.preventDefault();
			$(ele).siblings().removeClass('active');
			$(ele).addClass('active');
			if ($('#sortReview a:eq(0)').hasClass('active')) { // ???
				order = 1;
			} else{
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
	
	
	
	
	 // Image Modal
	 $(".reviewImg").on('click',function(){
        let img = new Image();
        img.style.objectFit = 'cover';
        img.style.maxWidth = '1200px';
        img.style.maxHeight = '1200px';
        img.src = $(this).attr("src")

        $('.modalBox').html(img);
        $(".modal").show();
    });

    $(".modal").click(function (e) {
        $(".modal").toggle();
    });

    // Product Quantity
    $('.quantity button').on('click', function () {
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
function allReview(result) { // 전체 상품
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
		review.find('.rinfo fieldset input').attr('name', 'rating'+idx); // radio 버튼은 name 값을 다르게 해줘야 한다.
		review.find('.rinfo input[name="rating'+idx+'"][value="'+ele.starCnt+'"]').prop('checked', true);
		
		row.append(review);
		
	})
}





const svc2 = {
	reviewList(rvo={}, successCall, errorCall) {
		fetch('reviewListAjax.do?order='+ order + '&pno='+ pno)
		.then(result => result.json())
		.then(successCall)
		.catch(errorCall);
	}, oneProduct(pno={}, successCall, errorCall){
		fetch('productAjax.do?pno='+pno)
		.then(result => result.json())
		.then(successCall)
		.catch(errorCall);
	}
}