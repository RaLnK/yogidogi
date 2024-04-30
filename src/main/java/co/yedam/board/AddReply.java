package co.yedam.board;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.ReplyService;
import co.yedam.service.ReplyServiceImpl;
import co.yedam.vo.ReplyVO;

public class AddReply implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		
		resp.setContentType("text/json;charset=utf-8");
		
		//댓글내용, 작성자, 게시글 번호
		int memberNo = ((Integer)session.getAttribute("memberNo")).intValue();
		String replyContent = req.getParameter("replyContent");
		String bno = req.getParameter("bno");

		
		ReplyVO rvo = new ReplyVO();
		rvo.setReplyContent(replyContent);
		rvo.setMemberNo(memberNo);
		rvo.setBoardNo(Integer.parseInt(bno));
		rvo.setReplyDate(new Date());
		
		ReplyService svc = new ReplyServiceImpl();
		
		Map<String, Object> result = new HashMap<>();
		if(svc.addReply(rvo)) {
			//{"retCode":"Success", "retVal": rvo}
			result.put("retCode", "Success");
			result.put("retVal", rvo);
		}else {
			//{"retCode":"Fail", "retVal": null}
			result.put("retCode", "Fail");
			result.put("retVal", null);
		}
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(result);
		
		resp.getWriter().print(json);

	}

}
