package co.yedam.cart;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;
import co.yedam.vo.CartVO;

public class CartUpDate implements Control{
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		resp.setContentType("text/json;charset=utf-8");
		int memberNo = ((Integer)session.getAttribute("memberNo")).intValue();
        int quantity = Integer.parseInt(req.getParameter("qty"));
        int cartNo = Integer.parseInt(req.getParameter("cno"));
        
		CartVO vo = new CartVO();
        vo.setMemberNo(memberNo);
        vo.setQuantity(quantity);
        vo.setCartNo(cartNo);
        
		CartService svc = new CartServiceImpl();
    	
		if (svc.cartListCheck(vo)) {
			if(svc.cartUpDate(vo)) {
				resp.getWriter().print("{\"retCode\" : \"Success\"}");
			}else {
				resp.getWriter().print("{\"retCode\" : \"Fail\"}");
			}
		} else {
			resp.getWriter().print("{\"retCode\" : \"Already\"}");
		}
	}

}
