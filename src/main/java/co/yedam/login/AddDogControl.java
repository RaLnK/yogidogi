package co.yedam.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.MemberDogVO;

public class AddDogControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		
		int memberNo = ((Integer)session.getAttribute("memberNo")).intValue();
		String dogBreed = req.getParameter("dogBreed");
		String dogBirthday = req.getParameter("dogBirthday");
		String dogName = req.getParameter("dogName");
		
		MemberDogVO vo = new MemberDogVO();
		vo.setMemberNo(memberNo);
		vo.setDogBreed(dogBreed);
		vo.setDogBirthday(dogBirthday);
		vo.setDogName(dogName);
		
		MemberService sc = new MemberServiceImpl();
		MyPageService svc = new MyPageServiceImpl();
		
		int dogLeader = svc.checkDog(memberNo);
		vo.setDogLeader(dogLeader);
		
		if(sc.addDog(vo)) {
			//"{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//"{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
