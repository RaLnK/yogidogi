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
import co.yedam.vo.ProductVO;

public class SortProductListAjaxControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		String order = req.getParameter("order");
		String category = req.getParameter("category");
		
		ProductVO pvo = new ProductVO();
		pvo.setOrder(Integer.parseInt(order));
		pvo.setProductNo(Integer.parseInt(category));
		
		ProductService svc = new ProductServiceImpl();
		
		List<ProductVO> list = svc.sortProductList(pvo);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list); //값을 Json 문자열로 만들어 줌
		
		resp.getWriter().print(json); // if 응답 방식에 한글 포함 => 인코딩 정의!

	}

}
