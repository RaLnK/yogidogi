package co.yedam.service;

import java.util.List;

import co.yedam.board.Board;
import co.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList();
	boolean addBoard(BoardVO bvo);
	BoardVO getBoard(int bno);
	boolean updateBoard(BoardVO vo);
	boolean removeBoard(int bno);
}
