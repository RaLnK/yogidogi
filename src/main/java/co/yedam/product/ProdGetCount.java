package co.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.service.ReplyService;
import co.yedam.service.ReplyServiceImpl;

public class ProdGetCount implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		ProductService pvc = new ProductServiceImpl();
		int totalCount = pvc.getProdCount();
		
		resp.getWriter().print("{\"totalCount\": " + totalCount+ "}");
		
	}

}
