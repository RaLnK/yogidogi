package co.yedam.login;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.MemberService;
import co.yedam.service.MemberServiceImpl;
import co.yedam.vo.MemberVO;

public class AddMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("memberId");
		String name = req.getParameter("memberName");
		String pw = req.getParameter("memberPw");
		String email = req.getParameter("email");
		String phone = req.getParameter("phone");
		
		Map<String, String> error = new HashMap<>();
		int check = 0;
		// 유효성 체크 
		if(id.length() < 5 || id.length() > 12) {
			check++;
			error.put("id", "아이디를 확인해주세요");
		}
		if(pw.length() < 8 || pw.length() >20) {
			check++;
			error.put("pw", "비밀번호를 확인해주세요");
		}
		if(email.indexOf("@") == -1 && email.indexOf(".") == -1) {			
			check++;
			error.put("email", "이메일 주소를 올바른 형식으로 입력해주세요");
		}
		if(phone.indexOf("-") == -1) {
			check++;
			error.put("phone", "전화번호를 올바른 형식으로 입력해주세요");
		}
		
		MemberService sc = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		vo.setMemberId(id);
		vo.setMemberName(name);
		vo.setMemberPw(pw);
		vo.setEmail(email);
		vo.setPhone(phone);
		
		//중복 체크
		if(sc.memberId(vo)) {
			check++;
			error.put("idDup", "중복된 아이디입니다");
		}
		if(sc.memberEmail(vo)) {
			check++;
			error.put("emailDup", "중복된 이메일입니다");
		}
		if(sc.memberPhone(vo)) {
			check++;
			error.put("phoneDup", "중복된 번호입니다");
		}
		
		error.put("cnt", Integer.toString(check));
		
		//등록
		if(check == 0) {
			if(sc.addMember(vo)) {
				error.put("retCode", "Success");
			}else {
				error.put("retCode", "Fail");
			}
			
		}else {
			error.put("retCode", "Fail");
		}
			
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(error);
		
		resp.getWriter().print(json);
	}

}
