package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;

public class ChooseDogLeader implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		
		int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();
		int dogNo = Integer.parseInt(req.getParameter("dno"));
		
		MyPageService svc = new MyPageServiceImpl();
		
		if (svc.initializeDogLeader(memberNo)) {
			if(svc.changeDogLeader(dogNo)) {
				resp.getWriter().print("{\"retCode\" : \"Success\"}");
			}else {
				resp.getWriter().print("{\"retCode\" : \"Fail\"}");
			}
		} else {
			resp.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
	}

}
