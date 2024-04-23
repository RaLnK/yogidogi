package co.yedam.order;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.OrderService;
import co.yedam.service.OrderServiceImpl;

public class CheckOrderNoControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String memberNo = req.getParameter("memberNo");
		
		OrderService svc = new OrderServiceImpl();
		String odNo = svc.checkOdNo(Integer.parseInt(memberNo));
		
		Gson gson = new GsonBuilder().create();
		
		try {
			resp.getWriter().print(gson.toJson(odNo));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
