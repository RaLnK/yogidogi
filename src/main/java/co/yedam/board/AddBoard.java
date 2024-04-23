package co.yedam.board;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class AddBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 글제목, 글내용, 작성자, 게시글카테고리, 이미지
		String tit = req.getParameter("tit");
		String con = req.getParameter("con");
		String mno = req.getParameter("mno");
		String cat = req.getParameter("cat");
		String img = req.getParameter("img");
		
		BoardVO bvo = new BoardVO();
		bvo.setBoardTitle(tit);
		bvo.setBoardContent(con);
		bvo.setMemberNo(Integer.parseInt(mno));
		bvo.setBoardCategory(Integer.parseInt(cat));
		bvo.setBoardImg(img);
		
		BoardService svc = new BoardServiceImpl();
		
		Map<String, Object> result = new HashMap<>();
		if(svc.addBoard(bvo)) {
			//{"retCode":"Success", "retVal": bvo}
			result.put("retCode", "Success");
			result.put("retVal", bvo);
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
