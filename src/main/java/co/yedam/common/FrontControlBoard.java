package co.yedam.common;

import java.util.Map;

import co.yedam.board.BoardList;
import co.yedam.board.addBoard;

public class FrontControlBoard {

	public static void push(Map<String, Control> map) {
		map.put("/boardList.do", new BoardList()); //게시판 화면
		map.put("/addBoard.do", new addBoard()); //게시글 등록
	}
}
