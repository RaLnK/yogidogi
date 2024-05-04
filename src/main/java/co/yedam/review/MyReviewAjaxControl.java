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
		
		rvo.setMemberNo(((Integer) session.getAttribute("memberNo")).intValue());

		ReviewService rvc = new ReviewServiceImpl();

		List<ReviewVO> list = rvc.myReview(rvo);

		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list); // 값을 Json 문자열로 만들어 줌

		resp.getWriter().print(json); // if 응답 방식에 한글 포함 => 인코딩 정의!
		
		
	}

}
