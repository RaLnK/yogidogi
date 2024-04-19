package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.control.TestControl;

public class FrontControl extends HttpServlet {
	Map<String, Control> map;

	public FrontControl() {
		map = new HashMap<>();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/test.do", new TestControl());
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
