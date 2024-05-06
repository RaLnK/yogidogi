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
        
        HttpSession session = req.getSession();
        int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();
        int orderNo = Integer.parseInt(req.getParameter("orderNo"));
        String targetName = req.getParameter("targetName");
        String orderAddr = req.getParameter("orderAddr");
        String orderAddr2 = req.getParameter("orderAddr2");
        String targetPhone = req.getParameter("targetPhone");
        String orderReq = req.getParameter("orderReq");
        int orderPrice = Integer.parseInt(req.getParameter("orderPrice"));
        int orderPoint = Integer.parseInt(req.getParameter("orderPoint"));
        String orderStatus = req.getParameter("orderStatus");
        String orderDate = req.getParameter("orderDate");
        
        if (req.getParameter("orderNo") == null || req.getParameter("orderNo").isEmpty()) {
            orderNo = 0; // 기본값 설정
        }
        if (req.getParameter("orderPrice") == null || req.getParameter("orderPrice").isEmpty()) {
            orderPrice = 0; // 기본값 설정
        }
        if (req.getParameter("orderPoint") == null || req.getParameter("orderPoint").isEmpty()) {
            orderPoint = 0; // 기본값 설정
        }
        // 주문 정보 생성
		OrderVO orderVO = new OrderVO();
		orderVO.setOrderNo(orderNo);
		orderVO.setMemberNo(memberNo);
		orderVO.setTargetName(targetName);
		orderVO.setOrderAddr(orderAddr);
		orderVO.setOrderAddr2(orderAddr2);
		orderVO.setTargetPhone(targetPhone);
		orderVO.setOrderReq(orderReq);
		orderVO.setOrderPrice(orderPrice);
		orderVO.setOrderPoint(orderPoint);
		orderVO.setOrderStatus(orderStatus);
		orderVO.setOrderDate(orderDate);
		
		// OrderService 객체 생성 및 주문 정보 추가
		OrderService orderService = new OrderServiceImpl();
		orderService.orderInfo(orderVO);
		
		// 주문 목록 다시 불러오기
		List<OrderVO> orderList = orderService.orderList(memberNo);

		// JSON 변환하여 응답
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(orderList);
		resp.getWriter().print(json);
	}

}