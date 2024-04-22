package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import co.yedam.board.BoardList;
import co.yedam.board.addBoard;
import co.yedam.control.AddCartControl;
import co.yedam.control.CartListControl;
import co.yedam.control.ModifyCartControl;
import co.yedam.control.RemoveCartControl;
import co.yedam.control.TestControl;
import co.yedam.loginControl.addMemberControl;
import co.yedam.loginControl.addMemberFormControl;
import co.yedam.loginControl.idCheckControl;
import co.yedam.loginControl.idCheckFormControl;
import co.yedam.loginControl.loginControl;
import co.yedam.loginControl.loginFormControl;
import co.yedam.loginControl.logoutControl;
import co.yedam.loginControl.pwCheckControl;
import co.yedam.loginControl.pwCheckFormControl;

public class FrontControl extends HttpServlet {
	Map<String, Control> map;

	public FrontControl() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/test.do", new TestControl());

		
		//게시판 관련
		FrontControlBoard.push(map);

		// 장바구니
		map.put("/cartList.do", new CartListControl()); // 카트페이지 이동
		map.put("/removeCart.do", new RemoveCartControl()); // 카트삭제
		map.put("/modifyCart.do", new ModifyCartControl()); // 카트수정
		map.put("/addCart.do", new AddCartControl()); // 카트등록

		//로그인
		FrontControlLogin.push(map);
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");

		String uri = req.getRequestURI();
		String context = req.getContextPath();
		String path = uri.substring(context.length());

		System.out.println("uri : " + uri + ", context : " + context + ", path : " + path);
		Control control = map.get(path);
		control.exec(req, resp);
	}
}
