package co.yedam.cart;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.CartVO;
import co.yedam.vo.WishListVO;

public class CartListAdd implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		int memberNo = ((Integer)session.getAttribute("memberNo")).intValue();
        int quantity = Integer.parseInt(req.getParameter("qty"));
        int productNo = Integer.parseInt(req.getParameter("pno"));
        // CartVO 객체 생성 및 설정
        CartVO vo = new CartVO();
        vo.setMemberNo(memberNo);
        vo.setQuantity(quantity);
		vo.setProductNo(productNo);
        
        // CartService 인스턴스 생성
        CartService svc = new CartServiceImpl();
	
		if (svc.cartListCheck(vo)) {
			if(svc.cartListAdd(vo)) {
				resp.getWriter().print("{\"retCode\" : \"Success\"}");
			}else {
				resp.getWriter().print("{\"retCode\" : \"Fail\"}");
			}
		} else {
			resp.getWriter().print("{\"retCode\" : \"Already\"}");
		}
	}

}

