package co.yedam.order;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.OrderService;
import co.yedam.service.OrderServiceImpl;
import co.yedam.vo.OrderVO;

public class OrderInfo implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json;charset=utf-8");
        Gson gson = new GsonBuilder().create();
        
        HttpSession session = req.getSession();
        int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();
        String param = req.getParameter("param");
        
        // 주문 정보 생성
		OrderVO orderVO = gson.fromJson(param, OrderVO.class);
		orderVO.setMemberNo(memberNo);
		// OrderService 객체 생성 및 주문 정보 추가
		OrderService orderService = new OrderServiceImpl();
		orderService.orderInfo(orderVO);
		resp.getWriter().print("{\"retCode\" : \"Success\"}");
		
	}

}