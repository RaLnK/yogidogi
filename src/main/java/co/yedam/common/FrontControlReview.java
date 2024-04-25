package co.yedam.common;

import java.util.Map;

import co.yedam.control.delReviewControl;
import co.yedam.review.ReviewListControl;
import co.yedam.review.addReviewControl;
import co.yedam.review.addReviewPageControl;

public class FrontControlReview {
	
	public static void push(Map<String, Control> map){
		
		// 리뷰
		map.put("/ReviewList.do", new ReviewListControl());
		map.put("/addReviewControl.do", new addReviewControl());
		map.put("/addReview.do", new addReviewPageControl());
		map.put("/delReview.do", new delReviewControl());
		
		
	}

}
