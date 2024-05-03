package co.yedam.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.ReplyService;
import co.yedam.service.ReplyServiceImpl;
import co.yedam.vo.ReplyVO;

public class UpdateReply implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ReplyVO rvo = new ReplyVO();
		
		String con = req.getParameter("con");
		int rno = Integer.parseInt(req.getParameter("rno"));
		
		
		rvo.setReplyContent(con);
		rvo.setReplyNo(rno);
		
		ReplyService svc = new ReplyServiceImpl();
		
		if(svc.updateReply(rvo)) {
			//{"retCode": "Success"}
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//{"retCode": "Fail"}
			resp.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

}
