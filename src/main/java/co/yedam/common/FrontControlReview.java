package co.yedam.common;

import java.util.Map;

import co.yedam.review.AddReviewControl;
import co.yedam.review.DelReviewControl;
import co.yedam.review.MyReviewAjaxControl;
import co.yedam.review.ReviewListAjaxControl;

public class FrontControlReview {
	
	public static void push(Map<String, Control> map){
		
		// 상품별 리뷰리스트
		map.put("/reviewListAjax.do", new ReviewListAjaxControl());
		
		// 멤버별 리뷰리스트
		map.put("/myreviewListAjax.do", new MyReviewAjaxControl());
		
		// 리뷰 추가
		map.put("/addReview.do", new AddReviewControl());
		
		// 리뷰 삭제
		map.put("/delReview.do", new DelReviewControl());
		
		
	}

}
