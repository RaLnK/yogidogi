package co.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.vo.ProductVO;

public class ProductAjaxControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		String pno = req.getParameter("pno");
		
		ProductService svc = new ProductServiceImpl();
		ProductVO pvo = svc.getProduct(Integer.parseInt(pno));
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(pvo);
		
		resp.getWriter().print(json);
	}

}
