package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;

public class BoardServiceImpl implements BoardService {

	SqlSession session = DataSource.getInstance()
			.openSession(true);
	BoardMapper mapper = session.getMapper(BoardMapper.class);
	
	@Override
	public List<BoardVO> boardList() {
		// TODO Auto-generated method stub
		return mapper.boardList();
	}

	@Override
	public List<BoardVO> nbList() {
		// TODO Auto-generated method stub
		return mapper.nbList();
	}
	
	@Override
	public boolean addBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.addBoard(bvo) == 1;
	}

	@Override
	public BoardVO getBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.getBoard(bno);
	}

	@Override
	public boolean updateBoard(BoardVO vo) {
		// TODO Auto-generated method stub
		return mapper.updateBoard(vo) == 1;
	}

	@Override
	public boolean removeBoard(int bno) {
		// TODO Auto-generated method stub
		return mapper.delBoard(bno) == 1 ;
	}



}
