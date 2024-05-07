package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;

public class QuitPwCheck implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		
		int memberNo = ((Integer)session.getAttribute("memberNo")).intValue();
		String pw = req.getParameter("pw");
		
		MyPageService svc = new MyPageServiceImpl();
		
		String pwCheck = svc.quitPwCheck(memberNo);
		
		if (pw.equalsIgnoreCase(pwCheck)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
