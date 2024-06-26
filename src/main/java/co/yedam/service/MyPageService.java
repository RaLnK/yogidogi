package co.yedam.service;

import java.util.List;

import co.yedam.vo.Board;
import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.OrderProductVO;
import co.yedam.vo.OrderVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.Reply;
import co.yedam.vo.ReviewVO;
import co.yedam.vo.WishListVO;

public interface MyPageService {
	public MemberVO memberList(int memberNo);
	public boolean memberUpdate(MemberVO mvo);
	
	public List<MemberDogVO> memberDogList(int memberNo);
	public boolean memberDogUpdate(MemberDogVO mvo);
	public int checkDog(int memberNo);
	public boolean memberDogDelete(int dogNo);
	public boolean initializeDogLeader(int memberNo);
	public boolean changeDogLeader(int dogNo);

	public List<ProductVO> wishListAjax(int memberNo);
	public boolean wishListDel(WishListVO wvo);
	public boolean checkCart(WishListVO wvo);
	public boolean wishListAdd(WishListVO wvo);

	public List<OrderVO> myOrderList(int memberNo);
	public String getFirstProductName(int orderNo);
	public OrderVO orderInfo(int orderNo);
	public List<OrderProductVO> myOrderProduct(int orderNo);
	
	public List<Board> myBoardList(Board bvo);
	public List<Reply> myReplyList(int memberNo);
	public List<ReviewVO> myReviewList(int memberNo);
	
	public String quitPwCheck(int memberNo);
	public boolean quit(int memberNo);
}
