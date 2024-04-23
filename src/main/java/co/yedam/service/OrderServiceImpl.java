package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.OrderMapper;
import co.yedam.vo.OrderVO;

public class OrderServiceImpl implements OrderService {

	SqlSession session = DataSource.getInstance().openSession(true);
	OrderMapper mapper = session.getMapper(OrderMapper.class);
	
	@Override
	public List<OrderVO> orderList(int memberNo) {
		return mapper.selectList(memberNo);
	}
	
	@Override
	public String checkOdNo(int memberNo) {
		return mapper.checkOrderNo(memberNo);
	}

	@Override
	public int addOrder(OrderVO vo) {
		return mapper.insertOrder(vo);
	}

	@Override
	public boolean modPoint(OrderVO vo) {
		return mapper.updatePoint(vo) == 1;
	}

	@Override
	public boolean remOrder(int odNo) {
		return mapper.deleteOrder(odNo) == 1;
	}

//	@Override
//	public boolean remOrderItem(int odNo) {
//		return mapper.deleteOrderItem(odNo) == 1;
//	}
//
//	@Override
//	public List<OrderVO> bookInfo(int odNo) {
//		return mapper.selectOrderkInfo(odNo);
//	}

}
