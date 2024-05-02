package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.BoardVO;
import co.yedam.vo.PageVO;

public interface BoardMapper {

	public List<BoardVO> boardList(PageVO pg);

	public int addBoard(BoardVO bvo);
	
	public BoardVO getBoard(int bno);

	public int updateBoard(BoardVO vo);

	public int delBoard(int bno);

	public List<BoardVO> nbList();

	public int addNoticeBoard(BoardVO bvo);

	public List<BoardVO> qnaList();

	public int getCount();

	public int addQnABoard(BoardVO vo);
}
