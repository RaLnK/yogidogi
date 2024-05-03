package co.yedam.service;

import java.util.List;

import co.yedam.vo.CartProductVO;
import co.yedam.vo.OrderVO;

public interface OrderService {
	// 주문 목록
	public List<OrderVO> orderList(int memberNo);
	
	public List<CartProductVO> orderView(int memberNo);
	
}