package co.yedam.board;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.common.PageDTO;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;
import co.yedam.vo.PageVO;

public class AjaxBoardList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		BoardService svc = new BoardServiceImpl();
		
		String page = req.getParameter("page");
		
		page = page == null ? "1" : page;
		
		//검색VO
		PageVO pg = new PageVO();
		pg.setPage(Integer.parseInt(page));
		
		//페이징
		PageDTO dto = new PageDTO(Integer.parseInt(page), svc.getCount());
		
		List<BoardVO> list = svc.boardList(pg);
		
		
		HashMap<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("page", dto);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		String json = gson.toJson(map);
		
		resp.getWriter().print(json);
	}

}
