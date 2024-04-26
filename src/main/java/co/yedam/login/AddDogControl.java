package co.yedam.login;

import java.io.IOException;
import java.sql.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberDogVO;

public class AddDogControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int memberNo = Integer.parseInt(req.getParameter("memberNo"));
		String dogBreed = req.getParameter("dogBreed");
		Date dogBirthDay = Date.valueOf(req.getParameter("dogBirthDay"));
		String dogName = req.getParameter("dogName");
		
		MemberDogVO vo = new MemberDogVO();
		vo.setMemberNo(memberNo);
		vo.setDogBreed(dogBreed);
		vo.setDogBirthDay(dogBirthDay);
		vo.setDogName(dogName);
		
		MemberService sc = new MemberServiceImpl();
		if(sc.addDog(vo)) {
			//"{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//"{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
