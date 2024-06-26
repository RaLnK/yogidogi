package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.CartMapper;
import co.yedam.mapper.OrderMapper;
import co.yedam.vo.CartProductVO;
import co.yedam.vo.CartVO;
import co.yedam.vo.OrderDetail;
import co.yedam.vo.OrderVO;

public class OrderServiceImpl implements OrderService {

	SqlSession session = DataSource.getInstance().openSession(true);
	OrderMapper mapper = session.getMapper(OrderMapper.class);
	CartMapper cartmapper = session.getMapper(CartMapper.class); 
	
	@Override
	public List<OrderVO> orderList(int memberNo) {
		return mapper.orderList(memberNo);
	}

	@Override
	public List<CartProductVO> orderView(int memberNo) {
		 return mapper.orderView(memberNo);
	}

    @Override
    public void orderInfo(OrderVO orderVO) {
        mapper.orderInfo(orderVO);
        List<OrderDetail> odt = orderVO.getProducts();
        for(int i=0; i<odt.size();i++) {
        	odt.get(i).setOrderNo(orderVO.getOrderNo());
        	mapper.orderDetail(odt.get(i));
        	CartVO cartVO = new CartVO();
        	cartVO.setMemberNo(orderVO.getMemberNo());
        	cartVO.setProductNo(odt.get(i).getProductNo());
        	cartmapper.clearCart(cartVO);
        }
    }

}
