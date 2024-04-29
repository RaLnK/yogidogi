package co.yedam.service;

import java.util.List;

import co.yedam.board.Board;
import co.yedam.vo.BoardVO;
import co.yedam.vo.PageVO;
import co.yedam.vo.ReplyVO;

public interface BoardService {
	List<BoardVO> nbList();
	List<BoardVO> boardList();
	boolean addBoard(BoardVO bvo);
	boolean addNoticeBoard(BoardVO bvo);
	BoardVO getBoard(int bno);
	boolean updateBoard(BoardVO vo);
	boolean removeBoard(int bno);

}
