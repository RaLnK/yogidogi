package co.yedam.review;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.service.ReviewService;
import co.yedam.service.ReviewServiceImpl;
import co.yedam.vo.ReviewVO;

public class AddReviewControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//생성자 매개값 1. 요청정보 2. 저장경로 3. 최대크기 4.인코딩 5.리네임정책 
				String savePath = req.getServletContext().getRealPath("images"); 
				int maxSize = 1024 * 1024 * 5;
				MultipartRequest multi = new MultipartRequest(req,savePath,maxSize,"utf-8",new DefaultFileRenamePolicy());
				
			
				HttpSession session = req.getSession();
				
				String rpno = multi.getParameter("pno");
				String rcontent = multi.getParameter("rcontent");
				String rphoto = multi.getFilesystemName("rphoto");
				String rstar = multi.getParameter("rstar");
					
				
				ReviewVO rvo = new ReviewVO();
				
				rvo.setMemberNo(((Integer) session.getAttribute("memberNo")).intValue());
				rvo.setProductNo(Integer.parseInt(rpno));
				rvo.setReviewContent(rcontent);
				rvo.setReviewPhoto(rphoto);
				rvo.setStarCnt(Integer.parseInt(rstar));
				
				ReviewService rvc = new ReviewServiceImpl();
				
				if (rvc.addReview(rvo)) {
					resp.getWriter().print("{\"retCode\" : \"Success\"}");
				} else {
					resp.getWriter().print("{\"retCode\" : \"Fail\"}");
				}
				

		
		
	}

}
