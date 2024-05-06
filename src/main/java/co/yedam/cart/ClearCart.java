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

public class ClearCart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = req.getSession();
		String cartNo = req.getParameter("cno");
		int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();
		
		CartVO cvo = new CartVO();
		cvo.setMemberNo(memberNo);
		cvo.setCartNo(Integer.parseInt(cartNo));
		
		CartService csv = new CartServiceImpl();
		if(csv.clearCart(cvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
		
		
		
	}

}