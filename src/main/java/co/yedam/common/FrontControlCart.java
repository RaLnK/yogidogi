package co.yedam.common;

import java.util.Map;

import co.yedam.cart.CartListAdd;
import co.yedam.cart.CartListControl;
import co.yedam.cart.CartListDel;
import co.yedam.cart.CartListJson;
import co.yedam.cart.CartUpDate;
import co.yedam.cart.ClearCart;

public class FrontControlCart {
	public static void push(Map<String, Control> map) {
		map.put("/cartList.do", new CartListControl()); // 카트페이지 이동
		map.put("/cartListJson.do", new CartListJson()); // 카트리스트
		map.put("/cartListDel.do", new CartListDel()); // 카트삭제
		map.put("/cartListAdd.do", new CartListAdd()); // 카트등록
		map.put("/cartUpDate.do", new CartUpDate()); // 카트 수량 업데이트
		map.put("/clearCart.do", new ClearCart());
	}
}
