package co.yedam.cart;

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
import co.yedam.vo.CartVO;

public class AddCartControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
        resp.setContentType("application/json; charset=utf-8");
        
        // memberNo와 proNo 요청 파라미터를 받아옴
        String memberNo = req.getParameter("memberNo");
        String proNo = req.getParameter("proNo");
        int qty = 1;

        // CartVO 객체 생성 및 설정
        CartVO vo = new CartVO();
        vo.setMemberNo(Integer.parseInt(memberNo));
        vo.setProNo(Integer.parseInt(proNo));
        vo.setQty(qty);
        
        // CartService 인스턴스 생성
        CartService svc = new CartServiceImpl();
        Map<String, Object> map = new HashMap<>();
        
        // addCart() 메서드 호출
        int result = svc.addCart(vo);
        if (result == 1) {
            map.put("retCode", "OK");
        } else if (result == 2) {
            map.put("retCode", "CK");
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
