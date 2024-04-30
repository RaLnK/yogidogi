package co.yedam.cart;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;
import co.yedam.vo.CartProductVO;

public class CartUpDate implements Control{
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String cartNo = req.getParameter("cno");
		String quantity = req.getParameter("quantity");

//		CartProductVO vo = CartProductVO();
//		vo.setCartNo(Integer.parseInt(cartNo));
//		vo.setQuantity(Integer.parseInt(quantity));
//
//		CartService svc = new CartServiceImpl();
//    	
//		if (svc.cartUpDate(vo)) {
//			if(svc.cartUpDate(vo)) {
//				resp.getWriter().print("{\"retCode\" : \"Success\"}");
//			}else {
//				resp.getWriter().print("{\"retCode\" : \"Fail\"}");
//			}
//		} else {
//			resp.getWriter().print("{\"retCode\" : \"Already\"}");
//		}
	}

	private CartProductVO CartProductVO() {
		// TODO Auto-generated method stub
		return null;
	}

}
