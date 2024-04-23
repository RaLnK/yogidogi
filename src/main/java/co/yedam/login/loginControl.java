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
		System.out.println(vo);
		
		MemberService sc = new MemberServiceImpl();
		vo = sc.login(vo);
		
		if(vo != null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", vo.getMemberId());
			session.setAttribute("auth", vo.getMemberAuthority());
			if(vo.getMemberAuthority() == 0) {
				//사용자
				resp.sendRedirect("mainapp.tiles");
			}else {
				//관리자
				resp.sendRedirect("mainapp.tiles");
			}
		}else {
			req.setAttribute("msg", "ID와 PASSWORD를 확인해주세요");
			req.getRequestDispatcher("WEB-INF/view/login/loginForm.jsp").forward(req, resp);
		}
	}

}
