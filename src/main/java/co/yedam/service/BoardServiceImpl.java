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
		return mapper.BoardList();
	}

	@Override
	public boolean addBoard(BoardVO bvo) {
		// TODO Auto-generated method stub
		return mapper.insertBoard(bvo) == 1;
	}

}
