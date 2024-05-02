package co.yedam.common;

import java.util.Map;

import co.yedam.board.AjaxBoardList;
import co.yedam.board.AjaxQnABoardList;
import co.yedam.board.AjaxnoticeBoardList;
import co.yedam.board.Board;
import co.yedam.board.BoardList;
import co.yedam.board.DelBoard;
import co.yedam.board.DelReply;
import co.yedam.board.ReplyList;
import co.yedam.board.UpdateBoard;
import co.yedam.board.UpdateBoardForm;
import co.yedam.board.UpdateReply;
import co.yedam.board.NoticeBoardList;
import co.yedam.board.QnABoardList;
import co.yedam.board.AddBoard;
import co.yedam.board.AddBoardForm;
import co.yedam.board.AddNoticeBoard;
import co.yedam.board.AddNoticeBoardForm;
import co.yedam.board.AddQnABoard;
import co.yedam.board.AddQnABoardForm;
import co.yedam.board.AddReply;

public class FrontControlBoard {

	public static void push(Map<String, Control> map) {
		
		map.put("/AjaxBoardList.do", new AjaxBoardList()); //게시글 목록
		map.put("/boardList.do",new BoardList());//게시글 목록 페이지
		map.put("/board.do", new Board());//게시글 상세 페이지
		map.put("/addBoardForm.do", new AddBoardForm());//게시물 등록 화면
		map.put("/addBoard.do", new AddBoard()); //게시글 등록		
		
		map.put("/ajaxNoticeBoardList.do", new AjaxnoticeBoardList());//공지글 목록
		map.put("/noticeBoardList.do", new NoticeBoardList());//공지글 목록 페이지
		map.put("/ajaxQnABoardList.do", new AjaxQnABoardList());//문의 목록
		map.put("/qnaBoardList.do", new QnABoardList());//문의 목록 페이지
		
		
		map.put("/addNoticeBoardForm.do", new AddNoticeBoardForm());//공지등록화면
		map.put("/addNoticeBoard.do", new AddNoticeBoard());//공지 등록
		map.put("/addQnABoardForm.do", new AddQnABoardForm());//문의등록화면
		map.put("/addQnABoard.do", new AddQnABoard());//문의 등록
		
		
		map.put("/updateBoard.do", new UpdateBoard());///게시글 수정
		map.put("/updateBoardForm.do", new UpdateBoardForm()); //게시글 수정 화면		
		map.put("/delBoard.do", new DelBoard());//게시글 삭제
		
		
		
		map.put("/replyList.do", new ReplyList());//댓글 목록
		map.put("/addReply.do", new AddReply());//댓글 등록
		map.put("/updateReply.do", new UpdateReply());//댓글 수정
		map.put("/delReply.do", new DelReply());//댓글 삭제
	}
}
