package co.yedam.common;

import java.util.Map;

import co.yedam.cart.AddCartControl;
import co.yedam.cart.CartListControl;
import co.yedam.cart.CartListJson;
import co.yedam.cart.ModifyCartControl;
import co.yedam.cart.RemoveCartControl;

public class FrontControlCart {
	public static void push(Map<String, Control> map) {
		map.put("/cartList.do", new CartListControl()); // 카트페이지 이동
		map.put("/removeCart.do", new RemoveCartControl()); // 카트삭제
		map.put("/modifyCart.do", new ModifyCartControl()); // 카트수정
		map.put("/addCart.do", new AddCartControl()); // 카트등록
		map.put("/cartListJson.do", new CartListJson());
	}
}
