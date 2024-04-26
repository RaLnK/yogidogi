package co.yedam.common;

import java.util.Map;

import co.yedam.review.ReviewListAjaxControl;
import co.yedam.review.addReviewControl;
import co.yedam.review.addReviewPageControl;
import co.yedam.review.delReviewControl;

public class FrontControlReview {
	
	public static void push(Map<String, Control> map){
		
		// 리뷰
		map.put("/reviewListAjax.do", new ReviewListAjaxControl());
		
		// 리뷰 추가
		map.put("/addReviewControl.do", new addReviewControl());
		map.put("/addReview.do", new addReviewPageControl());
		
		// 리뷰 삭제
		map.put("/delReview.do", new delReviewControl());
		
		
	}

}
