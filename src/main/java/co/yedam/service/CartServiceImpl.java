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
	public boolean cartListAdd(CartVO vo) {
		return mapper.cartListAdd(vo) == 1;
	}
	/*
	 * @Override public boolean cartUpDate(CartProductVO vo) { return
	 * mapper.updateCart(vo) == 1; }
	 */

	@Override
	public List<CartProductVO> cartList(int memberNo) {
		return mapper.cartList(memberNo);
	}

	@Override
	public boolean cartListDel(CartVO cvo) {
		return mapper.cartListDel(cvo) == 1;
	}

	@Override
	public boolean cartListCheck(CartVO vo) {
		return mapper.cartListCheck(vo) == null;
	}

	@Override
	public boolean cartUpDate(CartVO vo) {
		return mapper.cartUpDate(vo) == 1;
	}

	@Override
	public boolean clearCart(CartVO cvo) {
		// TODO Auto-generated method stub
		return mapper.clearCart(cvo) == 1;
	}

}
