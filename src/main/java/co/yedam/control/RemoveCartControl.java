package co.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;

public class RemoveCartControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String cartNo = req.getParameter("cno");
		
		CartService svc = new CartServiceImpl();
		Map<String, Object> map = new HashMap<>();
		if(svc.remCart(Integer.parseInt(cartNo))) {
			map.put("retCode", "OK");
		} else {
			map.put("retCode", "NG");
		}
		
		Gson gson = new GsonBuilder().create();
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
