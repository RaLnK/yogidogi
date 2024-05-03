package co.yedam.review;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ReviewService;
import co.yedam.service.ReviewServiceImpl;
import co.yedam.vo.ReviewVO;

public class MyReviewAjaxControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setContentType("text/json;charset=utf-8");
		
		HttpSession session = req.getSession();
		
		ReviewVO rvo = new ReviewVO();
		String rno = req.getParameter("reviewNo");

		rvo.setMemberNo(((Integer) session.getAttribute("memberNo")).intValue());
		rvo.setMemberNo(Integer.parseInt(rno));

		ReviewService rvc = new ReviewServiceImpl();
		
		if (rvc.delReview(rvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
