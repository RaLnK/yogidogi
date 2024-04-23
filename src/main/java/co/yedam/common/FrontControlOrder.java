package co.yedam.common;

import java.util.Map;

import co.yedam.order.AddOrderControl;
import co.yedam.order.CheckProductInfoControl;
import co.yedam.order.CheckOrderNoControl;
import co.yedam.order.ModifyPointControl;
import co.yedam.order.OrderListControl;
import co.yedam.order.OrderListJson;
import co.yedam.order.RemoveOrderControl;
import co.yedam.order.RemoveOrderItemControl;

public class FrontControlOrder {
		public static void push(Map<String, Control> map) {
			
			// 주문목록페이지
			map.put("/orderList.do", new OrderListControl()); // 주문목록페이지 이동
			map.put("/orderListJson.do", new OrderListJson()); // 주문목록페이지에 정보넘기는 기능
			map.put("/addOrder.do", new AddOrderControl()); // 주문등록
			map.put("/checkOrderNo.do", new CheckOrderNoControl()); // 주문번호 체크
			map.put("/modifyPoint.do", new ModifyPointControl()); // 회원 포인트 수정
			map.put("/removeOrder.do", new RemoveOrderControl()); // 주문목록 삭제
			map.put("/removeOrderItem.do", new RemoveOrderItemControl()); // 주문상세 삭제
			map.put("/checkBookInfo.do", new CheckProductInfoControl()); // 주문목록페이지에 상품정보넘기는 기능
			
		}
}
