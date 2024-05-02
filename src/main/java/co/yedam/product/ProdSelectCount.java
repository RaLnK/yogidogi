package co.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.vo.ProductVO;

public class ProdSelectCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String category = req.getParameter("category");
		
		ProductVO pvo = new ProductVO();
		pvo.setCategory(Integer.parseInt(category));
		
		ProductService pvc = new ProductServiceImpl();
		int totalCount = pvc.selectCount(pvo);
		
		// json 포맷 {"totalCount":24}
		
		resp.getWriter().print("{\"totalCount\": " + totalCount+ "}");
		
	}

}
