package co.yedam.review;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ReviewService;
import co.yedam.service.ReviewServiceImpl;
import co.yedam.vo.ReviewVO;

public class ReviewListAjaxControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.setContentType("text/json;charset=utf-8");

		String order = req.getParameter("order");
		String pno = req.getParameter("pno");

		ReviewService svc = new ReviewServiceImpl();
		ReviewVO rvo = new ReviewVO();
		rvo.setProductNo(Integer.parseInt(pno));
		rvo.setOrder(Integer.parseInt(order));
		
		List<ReviewVO> list= svc.reviewList(rvo);

		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);

		resp.getWriter().print(json);
	}

}
