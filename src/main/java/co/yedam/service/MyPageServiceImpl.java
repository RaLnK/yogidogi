package co.yedam.service;

import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.mapper.MyPageMapper;
import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;

public class MyPageServiceImpl implements MyPageService {
	MyPageMapper mapper = DataSource.getInstance().openSession(true).getMapper(MyPageMapper.class);

	@Override
	public MemberVO memberList(int memberNo) {
		return mapper.memberList(memberNo);
	}

	@Override
	public boolean memberUpdate(MemberVO mvo) {
		return mapper.memberUpdate(mvo) == 1;
	}

	@Override
	public List<MemberDogVO> memberDogList(int memberNo) {
		return mapper.memberDogList(memberNo);
	}

	@Override
	public boolean memberDogUpdate(MemberDogVO mvo) {
		return mapper.memberDogUpdate(mvo) == 1;
	}
	
}
