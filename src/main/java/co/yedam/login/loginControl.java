package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class loginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("memberId");
		String pw = req.getParameter("memberPw");
		
		MemberVO vo = new MemberVO();
		vo.setMemberId(id);
		vo.setMemberPw(pw);
		
		MemberService sc = new MemberServiceImpl();
		vo = sc.login(vo);
		
		if(vo != null) {
			HttpSession session = req.getSession();			
			session.setAttribute("memberNo", vo.getMemberNo());
			session.setAttribute("memberId", vo.getMemberId());
			session.setAttribute("memberAuthority", vo.getMemberAuthority());			 
			session.setAttribute("member", vo);
			if(vo.getMemberAuthority() == 0) {
				//사용자
				resp.sendRedirect("mainapp.tiles");
			}else if(vo.getMemberAuthority() == 1){
				//관리자
				resp.sendRedirect("mainapp.tiles");
			}
		}else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
