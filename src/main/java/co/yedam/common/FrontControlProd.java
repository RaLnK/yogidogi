package co.yedam.common;

import java.util.Map;

import co.yedam.product.ProductListAjaxControl;
import co.yedam.product.ProductListControl;
import co.yedam.product.addProductControl;
import co.yedam.product.delProductControl;

public class FrontControlProd {
	
	public static void push(Map<String, Control> map){
		
		
		map.put("/productList.do", new ProductListControl()); // 상품 목록 화면
		map.put("/productListAjax.do", new ProductListAjaxControl()); // 상품 목록
		
		map.put("/addProduct.do", new addProductControl()); // 상품 추가
		
		map.put("/delProduct.do", new delProductControl()); // 상품 삭제
	}

}
