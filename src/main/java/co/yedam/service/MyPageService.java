package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.OrderVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.WishListVO;

public interface MyPageService {
	public MemberVO memberList(int memberNo);
	public boolean memberUpdate(MemberVO mvo);
	public List<MemberDogVO> memberDogList(int memberNo);
	public boolean memberDogUpdate(MemberDogVO mvo);
	
	public List<ProductVO> wishListAjax(int memberNo);
	public boolean wishListDel(WishListVO wvo);
	public boolean checkCart(WishListVO wvo);
	public boolean wishListAdd(WishListVO wvo);
	
	public List<OrderVO> myOrderList(int memberNo);
	public String getFirstProductName(int orderNo);
}
