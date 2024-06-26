package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.ReviewVO;

public interface ReviewService {
	// 리뷰 리스트
	public List<ReviewVO> reviewList(ReviewVO rvo);

	// 내 리뷰
	public List<ReviewVO> myReview(ReviewVO rvo);

	// 리뷰 등록
	public boolean addReview(ReviewVO rvo);

	// 리뷰 삭제
	public boolean delReview(ReviewVO rvo);
	
	// 리뷰 등록 시 확인
	public boolean chkReview(int orderDetailNo);
}
