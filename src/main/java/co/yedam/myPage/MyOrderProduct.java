package co.yedam.myPage;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.MyPageService;
import co.yedam.service.MyPageServiceImpl;
import co.yedam.vo.OrderProductVO;

public class MyOrderProduct implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int orderNo = Integer.parseInt(req.getParameter("ono"));
		
		MyPageService svc = new MyPageServiceImpl();
		
		List<OrderProductVO> list = svc.myOrderProduct(orderNo);

		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);

		resp.getWriter().print(json);

	}

}
