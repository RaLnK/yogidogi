package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.WishListVO;

public interface MyPageMapper {
	public MemberVO memberList(int memberNo);
	public int memberUpdate(MemberVO mvo);
	public List<MemberDogVO> memberDogList(int memberNo);
	public int memberDogUpdate(MemberDogVO mvo);
	
	public List<ProductVO> wishListAjax(int memberNo);
	public int wishListDel(WishListVO wvo);
	public int checkCart(WishListVO wvo);
	public int wishListAdd(WishListVO wvo);
}
