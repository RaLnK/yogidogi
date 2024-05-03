package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.ProductVO;
import co.yedam.vo.ReviewVO;

public interface ReviewMapper {

	// 리뷰 리스트
	public List<ReviewVO> reviewList(ReviewVO rvo);
	
	// 내 리뷰
	public List<ReviewVO> myReview(ReviewVO rvo);
	
	// 리뷰 등록
	public int addReview(ReviewVO rvo);
	
	// 리뷰 삭제
	public int delReview(ReviewVO rvo);

}
