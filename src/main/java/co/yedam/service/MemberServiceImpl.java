package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.MemberMapper;
import co.yedam.vo.MemberVO;

public class MemberServiceImpl implements MemberService{
	SqlSession session = DataSource.getInstance().openSession(true);
	MemberMapper mapper = session.getMapper(MemberMapper.class);
	@Override
	public List<MemberVO> memberList() {
		return null;
	}
	@Override
	public MemberVO login(MemberVO mvo) {
		return null;
	}
	@Override
	public boolean addMember(MemberVO mvo) {
		return false;
	}
	@Override
	public boolean delMember(int no) {
		return false;
	}
	@Override
	public MemberVO findId(MemberVO mvo) {
		return null;
	}
	@Override
	public int findIdCheck(String email) {
		return 0;
	}
	@Override
	public MemberVO findPw(MemberVO mvo) {
		return null;
	}
	@Override
	public int findPwCheck(String memberId) {
		return 0;
	}
	
	
}
