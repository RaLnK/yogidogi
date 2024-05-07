package co.yedam.review;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.ReviewService;
import co.yedam.service.ReviewServiceImpl;
import co.yedam.vo.ReviewVO;

public class ChkReviewControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String orderDetailNo = req.getParameter("orderDetailNo");

		ReviewService rvc = new ReviewServiceImpl();

		if (rvc.chkReview(Integer.parseInt(orderDetailNo))) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
