package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.MemberDogVO;

public class MemberDogUpdate implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();

		MemberDogVO mvo = new MemberDogVO();

		mvo.setMemberNo(((Integer) session.getAttribute("memberNo")).intValue());
		mvo.setDogNo(Integer.parseInt(req.getParameter("dogNo")));
		mvo.setDogName(req.getParameter("dogName"));
		mvo.setDogBreed(req.getParameter("dogBreed"));
		mvo.setDogBirthday(req.getParameter("dogBday"));

		MyPageService svc = new MyPageServiceImpl();

		if (svc.memberDogUpdate(mvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
