package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.OrderMapper;
import co.yedam.vo.CartProductVO;
import co.yedam.vo.OrderVO;

public class OrderServiceImpl implements OrderService {

	SqlSession session = DataSource.getInstance().openSession(true);
	OrderMapper mapper = session.getMapper(OrderMapper.class);
	
	@Override
	public List<OrderVO> orderList(int memberNo) {
		return mapper.orderList(memberNo);
	}

	@Override
	public List<CartProductVO> orderView(int memberNo) {
		 return mapper.orderView(memberNo);
	}
	

}
