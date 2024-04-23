package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class addMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("mid");
		String name = req.getParameter("mnm");
		String pw = req.getParameter("mpw");
		String pwc = req.getParameter("pwc");
		String email = req.getParameter("email");
		String phone = req.getParameter("phone");
		
		MemberVO vo = new MemberVO();
		vo.setMemberId(id);
		vo.setMemberName(name);
		vo.setMemberPw(pw);
		vo.setMemberPwChk(pwc);
		vo.setEmail(email);
		vo.setPhone(phone);
		
		MemberService sc = new MemberServiceImpl();
		if(sc.addMember(vo)) {
			//"{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//"{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		
	}

}
