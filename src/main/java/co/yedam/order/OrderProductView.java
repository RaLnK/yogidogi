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
import co.yedam.service.CartService;
import co.yedam.service.CartServiceImpl;
import co.yedam.service.OrderService;
import co.yedam.service.OrderServiceImpl;
import co.yedam.vo.CartProductVO;
import co.yedam.vo.CartVO;

public class OrderProductView implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json;charset=utf-8");

        HttpSession session = req.getSession();
        int memberNo = ((Integer) session.getAttribute("memberNo")).intValue();

        OrderService svc = new OrderServiceImpl();
        List<CartProductVO> cartList = svc.orderView(memberNo);
        
        Gson gson = new GsonBuilder().create();
        String json = gson.toJson(cartList);
        resp.getWriter().print(json);
    }
}