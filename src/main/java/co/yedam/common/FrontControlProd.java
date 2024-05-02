package co.yedam.common;

import java.util.Map;

import co.yedam.product.AddProductControl;
import co.yedam.product.AddToWishList;
import co.yedam.product.DelFromWishList;
import co.yedam.product.DelProductControl;
import co.yedam.product.ProdGetCount;
import co.yedam.product.ProdSelectCount;
import co.yedam.product.ProductAjaxControl;
import co.yedam.product.ProductControl;
import co.yedam.product.ProductListAjaxControl;
import co.yedam.product.ProductListControl;
import co.yedam.product.SortProductListAjaxControl;
import co.yedam.product.WishListAjax;

public class FrontControlProd {
	
	public static void push(Map<String, Control> map){
		
		// 상품
		map.put("/productList.do", new ProductListControl()); // 상품 목록 화면
		map.put("/productListAjax.do", new ProductListAjaxControl()); // 상품 목록
		map.put("/sortProductListAjax.do", new SortProductListAjaxControl()); // sort 상품 목록
		map.put("/getProdCount.do", new ProdGetCount());
		map.put("/selectProdCount.do", new ProdSelectCount());
				
		map.put("/product.do", new ProductControl()); // 상품 1개 화면
		map.put("/productAjax.do", new ProductAjaxControl()); // 상품 1개
		
		map.put("/addProduct.do", new AddProductControl()); // 상품 추가

		map.put("/delProduct.do", new DelProductControl()); // 상품 삭제
		
		map.put("/wishListAjax.do", new WishListAjax()); // wishList 조회
		map.put("/addToWishList.do", new AddToWishList()); // wishList 추가
		map.put("/delFromWishList.do", new DelFromWishList()); // wishList 삭제

		
	}

}
