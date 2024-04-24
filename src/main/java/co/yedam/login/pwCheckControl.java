package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class pwCheckControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("memberId");
		String email = req.getParameter("email");
		
		MemberVO vo = new MemberVO();
		vo.setMemberName(id);
		vo.setEmail(email);
		
		MemberService sc = new MemberServiceImpl();
		
		if(sc.findPwCheck(id)) {
			
		}else {
			req.setAttribute("msg", "잘못된 정보를 입력하셨습니다");
		}
	}

}
