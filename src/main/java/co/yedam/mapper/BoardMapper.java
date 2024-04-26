package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.BoardVO;

public interface BoardMapper {

	public List<BoardVO> boardList();

	public int addBoard(BoardVO bvo);
	
	public BoardVO getBoard(int bno);

	public int updateBoard(BoardVO vo);

	public int delBoard(int bno);

	public List<BoardVO> nbList();
}
