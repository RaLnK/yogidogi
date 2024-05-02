package co.yedam.myPage;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.Board;

public class MyBoardList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();

		int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();

		MyPageService svc = new MyPageServiceImpl();
		List<Board> list;

	}

}
