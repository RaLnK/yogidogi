package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.ReviewMapper;
import co.yedam.vo.ReviewVO;

public class ReviewServiceImpl implements ReviewService{
	SqlSession session = DataSource.getInstance().openSession(true);
	ReviewMapper mapper = session.getMapper(ReviewMapper.class);

	@Override
	public List<ReviewVO> reviewList(ReviewVO rvo) {
		return mapper.reviewList(rvo);
	}
	@Override
	public List<ReviewVO> myReview(ReviewVO rvo) {
		return mapper.myReview(rvo);
	}
	@Override
	public boolean addReview(ReviewVO rvo) {
		return mapper.addReview(rvo) == 1;
	}
	@Override
	public boolean delReview(ReviewVO rvo) {
		return mapper.delReview(rvo) == 1;
	}

	
}
