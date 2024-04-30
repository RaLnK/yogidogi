package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.CartProductVO;
import co.yedam.vo.CartVO;
import co.yedam.vo.WishListVO;

public interface CartMapper {
	// 카트 목록
	public List<CartProductVO> cartList(int memberNo);
	//	List<CartVO> selectList(int memberNo);
	// 카트 삭제
	public int cartListDel(CartVO cvo);
			
	// 카트 추가 
	public int cartListAdd(CartVO vo);
		
	// 카트 수량 수정
	public int cartUpDate(CartVO vo);
		
	// 카트 중복 체크
	public CartVO cartListCheck(CartVO vo);
}
