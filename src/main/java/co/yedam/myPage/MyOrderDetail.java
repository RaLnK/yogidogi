package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.OrderVO;

public class MyOrderDetail implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int orderNo = Integer.parseInt(req.getParameter("ono"));
		
		MyPageService svc = new MyPageServiceImpl();
		OrderVO ovo = svc.orderInfo(orderNo);
		
		req.setAttribute("orderVO", ovo);
		
		req.getRequestDispatcher("myPage/myOrderDetail.tiles").forward(req, resp);
	}

}
