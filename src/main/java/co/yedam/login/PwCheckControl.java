package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;

public class PwCheckControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("memberId");
		
		MemberService sc = new MemberServiceImpl();
		sc.resetPw(id);
		String email = sc.findPwCheck(id);
		
		if(email != null) {
			resp.getWriter().print("{\"retCode\":\"" + email + "\"}");
		}else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
