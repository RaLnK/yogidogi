package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.CartMapper;
import co.yedam.vo.CartProductVO;
import co.yedam.vo.CartVO;

public class CartServiceImpl implements CartService {

	SqlSession session = DataSource.getInstance().openSession(true);
	CartMapper mapper = session.getMapper(CartMapper.class);

//	@Override
//	public List<CartVO> cartList(int memberNo) {
//		return mapper.selectList(memberNo);
//	}

	@Override
	public int cartListAdd(CartVO vo) {
		// 장바구니 데이터 체크
		CartVO checkCart = mapper.checkCart(vo);
		if(checkCart != null) {
			return 2;
		}
		return mapper.cartListAdd(vo);
	}



	@Override
	public boolean modCart(CartVO vo) {
		return mapper.updateCart(vo) == 1;
	}

	@Override
	public List<CartProductVO> cartList(int memberNo) {
		
		return mapper.cartList(memberNo);
	}
	@Override
	public boolean cartListDel(CartVO cvo) {
		return mapper.cartListDel(cvo) == 1;
	}






}
