package co.yedam.service;

import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.mapper.MyPageMapper;
import co.yedam.vo.Board;
import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.OrderProductVO;
import co.yedam.vo.OrderVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.Reply;
import co.yedam.vo.ReviewVO;
import co.yedam.vo.WishListVO;

public class MyPageServiceImpl implements MyPageService {
	MyPageMapper mapper = DataSource.getInstance().openSession(true).getMapper(MyPageMapper.class);

	@Override
	public MemberVO memberList(int memberNo) {
		return mapper.memberList(memberNo);
	}

	@Override
	public boolean memberUpdate(MemberVO mvo) {
		return mapper.memberUpdate(mvo) == 1;
	}

	@Override
	public List<MemberDogVO> memberDogList(int memberNo) {
		return mapper.memberDogList(memberNo);
	}

	@Override
	public boolean memberDogUpdate(MemberDogVO mvo) {
		return mapper.memberDogUpdate(mvo) == 1;
	}
	
	@Override
	public boolean memberDogDelete(int dogNo) {
		return mapper.memberDogDelete(dogNo) == 1;
	}
	
	@Override
	public boolean initializeDogLeader(int memberNo) {
		return mapper.initializeDogLeader(memberNo) > 0;
	}
	
	@Override
	public boolean changeDogLeader(int dogNo) {
		return mapper.changeDogLeader(dogNo) == 1;
	}

	@Override
	public List<ProductVO> wishListAjax(int memberNo) {
		return mapper.wishListAjax(memberNo);
	}

	@Override
	public boolean wishListDel(WishListVO wvo) {
		return mapper.wishListDel(wvo) == 1;
	}

	@Override
	public boolean checkCart(WishListVO wvo) {
		return mapper.checkCart(wvo) == 0;
	}

	@Override
	public boolean wishListAdd(WishListVO wvo) {
		return mapper.wishListAdd(wvo) == 1;
	}

	@Override
	public List<OrderVO> myOrderList(int memberNo) {
		return mapper.myOrderList(memberNo);
	}

	@Override
	public String getFirstProductName(int orderNo) {
		return mapper.getFirstProductName(orderNo);
	}

	@Override
	public OrderVO orderInfo(int orderNo) {
		return mapper.orderInfo(orderNo);
	}

	@Override
	public List<OrderProductVO> myOrderProduct(int orderNo) {
		return mapper.myOrderProduct(orderNo);
	}

	@Override
	public List<Board> myBoardList(Board bvo) {
		return mapper.myBoardList(bvo);
	}

	@Override
	public int checkDog(int memberNo) {
		if(mapper.checkDog(memberNo) > 0) return 0;
		else return 1;
	}

	@Override
	public List<Reply> myReplyList(int memberNo) {
		return mapper.myReplyList(memberNo);
	}

	@Override
	public List<ReviewVO> myReviewList(int memberNo) {
		return mapper.myReviewList(memberNo);
	}

	@Override
	public String quitPwCheck(int memberNo) {
		return mapper.quitPwCheck(memberNo);
	}

	@Override
	public boolean quit(int memberNo) {
		return mapper.quit(memberNo) == 1;
	}

}
