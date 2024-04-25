package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;

public class idCheckControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String email = req.getParameter("email");
		
		MemberService sc = new MemberServiceImpl();
		
		if(sc.findIdCheck(email)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
