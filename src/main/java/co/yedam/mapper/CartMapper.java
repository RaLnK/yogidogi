package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.CartProductVO;
import co.yedam.vo.CartVO;

public interface CartMapper {
	// 카트 목록
	List<CartProductVO> cartList(int memberNo);
	//	List<CartVO> selectList(int memberNo);
	// 카트 삭제
	int cartListDel(CartVO cvo);
			
	// 카트 추가 
	int cartListAdd(CartVO vo);
		
	// 카트 수량 수정
	int updateCart(CartVO vo);
		
	// 카트 중복 체크
	CartVO checkCart(CartVO vo);
	
}
