package co.yedam.common;

import java.util.Map;

import co.yedam.order.OrderListControl;
import co.yedam.order.OrderListJson;
import co.yedam.order.OrderProductView;

public class FrontControlOrder {
		public static void push(Map<String, Control> map) {
			
			// 주문목록페이지
			map.put("/orderList.do", new OrderListControl()); // 주문목록페이지 이동
			map.put("/orderListJson.do", new OrderListJson()); // 주문목록페이지에 정보넘기는 기능
			map.put("/orderView.do", new OrderProductView());
			
		}
}
