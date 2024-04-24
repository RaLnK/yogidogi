package co.yedam.service;

import co.yedam.common.DataSource;
import co.yedam.mapper.MyPageMapper;
import co.yedam.vo.MemberVO;

public class MyPageServiceImpl implements MyPageService {
	MyPageMapper mapper = DataSource.getInstance().openSession(true).getMapper(MyPageMapper.class);

	@Override
	public MemberVO memberList(int memberNo) {
		return mapper.memberList(memberNo);
	}
	
}
