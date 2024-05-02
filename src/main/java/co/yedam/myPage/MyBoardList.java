package co.yedam.myPage;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.Board;

public class MyBoardList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();

		int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();

		int ctgr = Integer.parseInt(req.getParameter("category"));
		
		Board bvo = new Board();
		bvo.setBoardCategory(ctgr);
		bvo.setMemberNo(memberNo);
		
		MyPageService svc = new MyPageServiceImpl();
		List<Board> list = svc.myBoardList(bvo);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}
