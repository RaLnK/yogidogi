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

public class CartListDel implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 1 파라미터 추출
		HttpSession session = req.getSession();
		String cartNo = req.getParameter("cno");
		int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();
		
		// 서비스 객체 생성 
		CartService svc = new CartServiceImpl();
		
		// 파라미터 값 담기
		CartVO cvo = new CartVO();
		cvo.setMemberNo(memberNo);
		cvo.setCartNo(Integer.parseInt(cartNo));
		
		// 서비스 호출 및 결과전송
		if (svc.cartListDel(cvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}
}	