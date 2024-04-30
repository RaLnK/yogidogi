package co.yedam.order;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.OrderService;
import co.yedam.service.OrderServiceImpl;
import co.yedam.vo.OrderVO;

public class AddOrderControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String odNo = req.getParameter("odNo"); // 주문번호
		String memberNo = req.getParameter("memberNo"); // 회원번호
		String tgName = req.getParameter("tgName"); // 받는사람이름
		String odAd = req.getParameter("odAd"); // 주소
		String odAd2 = req.getParameter("odAd2"); // 상세주소
		String tgPhone = req.getParameter("tgPhone"); // 휴대폰번호
		String odr = req.getParameter("odr"); // 주문요청사항
		String odPrice = req.getParameter("odPrice"); // 구매가격
		String odPoint = req.getParameter("odpoint"); // 사용한포인트
		String odt = req.getParameter("odt"); // 주문일자
		String odStatus = req.getParameter("odStatus"); // 주문상태
		
//		String odTotal = req.getParameter("odTotal"); // 총 구매가격
		
		OrderVO vo = new OrderVO();	
        vo.setOrderNo(Integer.parseInt(odNo));
        vo.setMemberNo(Integer.parseInt(memberNo));
        vo.setTargetName(tgName);
        vo.setOrderAddr(odAd);
        vo.setOrderAddr2(odAd2);
        vo.setTargetPhone(tgPhone);
        vo.setOrderReq(odr);
        vo.setOrderPrice(Integer.parseInt(odPrice));
        vo.setOrderPoint(Integer.parseInt(odPoint));
        vo.setOrderDate(odt);
        vo.setOrderStatus(odStatus);
		
		OrderService svc = new OrderServiceImpl();
		Map<String, Object> map = new HashMap<>();

		if (svc.addOrder(vo) == 1) {
			map.put("retCode", "OK");
			map.put("odNo", vo.getOrderNo());
			map.put("point", vo.getOrderPoint());
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

	private Date Date(String odt) {
		// TODO Auto-generated method stub
		return null;
	}

}
