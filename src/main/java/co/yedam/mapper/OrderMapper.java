package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.CartProductVO;
import co.yedam.vo.OrderDetail;
import co.yedam.vo.OrderVO;

public interface OrderMapper {
	// 주문 목록
	public List<OrderVO> orderList(int memberNo);

	public List<CartProductVO> orderView(int memberNo);
	
	public void orderInfo(OrderVO orderVO);
	
	public void orderDetail(OrderDetail OrderDetail);
	
}
