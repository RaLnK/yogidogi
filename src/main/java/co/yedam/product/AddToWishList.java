package co.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.vo.WishListVO;

public class AddToWishList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();

		WishListVO wvo = new WishListVO();

		wvo.setMemberNo(((Integer) session.getAttribute("memberNo")).intValue());
		wvo.setProductNo(Integer.parseInt(req.getParameter("pno")));

		ProductService pvc = new ProductServiceImpl();
		
		if (pvc.delFromWishList(wvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
