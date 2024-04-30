package co.yedam.service;

import java.util.List;

import co.yedam.vo.CartProductVO;
import co.yedam.vo.CartVO;
import co.yedam.vo.WishListVO;

public interface CartService {
	// 카트 목록
//	public List<CartVO> cartList(int memberNo);
	public List<CartProductVO> cartList(int memberNo);
	// 카트 삭제
	public boolean cartListDel(CartVO cvo); 
	
	// 카트 등록
	public boolean cartListAdd(CartVO vo); 
	public boolean cartListCheck(CartVO vo);
	// 카트 수정
//	public boolean cartUpDate(CartProductVO vo); 

}
