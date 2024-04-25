package co.yedam.board;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class UpdateBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String savePath = req.getServletContext().getRealPath("images"); 
		int maxSize = 1024 * 1024 * 5;
		MultipartRequest multi = new MultipartRequest(req,savePath,maxSize,"utf-8",new DefaultFileRenamePolicy());
		
		String tit = multi.getParameter("boardTitle");
		String con = multi.getParameter("boardContent");
		String img = multi.getParameter("boardImg");
		int bno = Integer.parseInt(multi.getParameter("boardNo"));
		
		BoardVO vo = new BoardVO();
		vo.setBoardTitle(tit);
		vo.setBoardContent(con);
		vo.setBoardImg(img);
		vo.setBoardNo(bno);
		
		BoardService svc = new BoardServiceImpl();
		
		if(svc.updateBoard(vo)) {
			resp.sendRedirect("board.do?bno=" + bno);
			
		}else {
			req.setAttribute("msg", "등록중 에러가 발생");
			req.getRequestDispatcher("WEB-INF/view/error.jsp").forward(req, resp);
		}
	}

}
