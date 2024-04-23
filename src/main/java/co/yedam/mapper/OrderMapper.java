package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.OrderVO;

public class OrderMapper {
	// 주문 목록
	List<OrderVO> selectList(int memberNo);
	
	// 주문 추가
	int insertOrder(OrderVO vo);
	
	// 주문번호 중복체크
	String checkOrderNo(int memberNo);
	
	// 회원 포인트 사용 후 변경
	int updatePoint(OrderVO vo);
	
	int deleteOrder(int odNo);
	
	int deleteOrderItem(int odNo);
	
	List<OrderVO> selectproductInfo(int odNo);
}
