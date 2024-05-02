package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.MemberVO;

public class MemberUpdate implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();

		MemberVO mvo = new MemberVO();

		mvo.setMemberNo(((Integer)session.getAttribute("memberNo")).intValue());
		mvo.setMemberPw(req.getParameter("memberPw"));
		mvo.setMemberName(req.getParameter("memberName"));
		mvo.setEmail(req.getParameter("email"));
		mvo.setPhone(req.getParameter("phone"));

		MyPageService svc = new MyPageServiceImpl();

		if(svc.memberUpdate(mvo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		}else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
