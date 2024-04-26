package co.yedam.board;

import java.io.IOException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.service.BoardService;
import co.yedam.service.BoardServiceImpl;
import co.yedam.vo.BoardVO;

public class AddBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//생성자 매개값 1. 요청정보 2. 저장경로 3. 최대크기 4.인코딩 5.리네임정책 
		String savePath = req.getServletContext().getRealPath("images"); 
		int maxSize = 1024 * 1024 * 5;
		MultipartRequest multi = new MultipartRequest(req,savePath,maxSize,"utf-8",new DefaultFileRenamePolicy());
		
		
		String tit = multi.getParameter("title");
		String con = multi.getParameter("content");
		String mno = multi.getParameter("mno");
		String img = multi.getFilesystemName("myImg");
			
			BoardVO vo = new BoardVO();
			vo.setBoardTitle(tit);
			vo.setBoardContent(con);
			vo.setMemberNo(Integer.parseInt(mno));
			vo.setBoardImg(img);
			
			vo.setBoardDate(new Date());
			
			BoardService svc = new BoardServiceImpl();
			if(svc.addBoard(vo)) {
				resp.sendRedirect("boardList.do");
				
			}else {
				req.setAttribute("msg", "등록중 에러가 발생.");
				req.getRequestDispatcher("WEB-INF/view/error.jsp").forward(req, resp);
				
			}
	}

}
