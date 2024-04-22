package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.BoardVO;

public interface BoardMapper {

	public List<BoardVO> BoardList();

	public int insertBoard(BoardVO bvo);

}
