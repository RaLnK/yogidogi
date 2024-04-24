package co.yedam.myPage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.MemberVO;

public class MemberList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		
		MyPageService svc = new MyPageServiceImpl();
		
		String memberNo = (String)session.getAttribute("memberNo");
		
		MemberVO vo = svc.memberList(Integer.parseInt(memberNo));
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(vo);
		
		resp.getWriter().print(json);
	}

}
