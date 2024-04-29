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
		String pw = sc.findPwCheck(id);
		
		if(pw != null) {
			resp.getWriter().print("{\"retCode\":\"" + pw + "\"}");
		}else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
