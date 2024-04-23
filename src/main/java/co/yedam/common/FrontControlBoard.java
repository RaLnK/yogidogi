package co.yedam.common;

import java.util.Map;

import co.yedam.board.AjaxBoardList;
import co.yedam.board.Board;
import co.yedam.board.BoardList;
import co.yedam.board.DelBoard;
import co.yedam.board.DelReply;
import co.yedam.board.ReplyList;
import co.yedam.board.UpdateBoard;
import co.yedam.board.UpdateReply;
import co.yedam.board.AddBoard;
import co.yedam.board.AddReply;

public class FrontControlBoard {

	public static void push(Map<String, Control> map) {
		map.put("/AjaxBoardList.do", new AjaxBoardList()); //게시글 목록
		map.put("/boardList.do",new BoardList());//게시글 목록 페이지
		map.put("/board.do", new Board());//게시글 상세 페이지
		map.put("/addBoard.do", new AddBoard()); //게시글 등록
		map.put("/updateBoard.do", new UpdateBoard());///게시글 수정
		map.put("/delBoard.do", new DelBoard());//게시글 삭제
		map.put("/replyList.do", new ReplyList());//댓글 목록
		map.put("/addReply.do", new AddReply());//댓글 등록
		map.put("/updateReply.do", new UpdateReply());//댓글 수정
		map.put("/delReply.do", new DelReply());//댓글 삭제
	}
}
