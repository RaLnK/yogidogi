package co.yedam.product;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.vo.PageVO;
import co.yedam.vo.ProductVO;

public class ProductListAjaxControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setContentType("text/json;charset=utf-8");
		
		String order = req.getParameter("order");
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		
		PageVO pvo = new PageVO();
		pvo.setOrder(order);
		pvo.setPage(Integer.parseInt(page));
		
		ProductService svc = new ProductServiceImpl();
		
		List<ProductVO> list = svc.productList(pvo);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list); //값을 Json 문자열로 만들어 줌
		
		resp.getWriter().print(json); //
		
	}

}
