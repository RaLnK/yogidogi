package co.yedam.service;

import java.util.List;

import co.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList();
	boolean addBoard(BoardVO bvo);
}
