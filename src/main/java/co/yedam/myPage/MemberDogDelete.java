package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;

public class MemberDogDelete implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		MyPageService svc = new MyPageServiceImpl();
		
		int dogNo = Integer.parseInt(req.getParameter("dno"));
		
		if (svc.memberDogDelete(dogNo)) {
			resp.getWriter().print("{\"retCode\" : \"Success\"}");
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
