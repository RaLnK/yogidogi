package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;

public class GetFirstProductName implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int orderNo = Integer.parseInt(req.getParameter("ono"));

		MyPageService svc = new MyPageServiceImpl();

		String productName = svc.getFirstProductName(orderNo);

		resp.getWriter().print("{\"productName\" :\"" + productName + "\"}");
	}

}
