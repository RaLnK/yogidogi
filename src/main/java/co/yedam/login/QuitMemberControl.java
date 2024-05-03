package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class QuitMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("memberId");
		String pw = req.getParameter("memberPw");
		
		MemberVO vo = new MemberVO();
		vo.setMemberId(id);
		vo.setMemberPw(pw);
		MemberService sc = new MemberServiceImpl();
		if(sc.quitMember(vo)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
			sc.quitDate(id);
		}else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
