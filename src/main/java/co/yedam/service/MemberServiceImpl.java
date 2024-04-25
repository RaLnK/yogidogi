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
		return mapper.memberList();
	}
	@Override
	public MemberVO login(MemberVO mvo) {
		return mapper.login(mvo);
	}
	@Override
	public int loginCheck(int memberAuthority) {
		return mapper.loginCheck(memberAuthority);
	}
	@Override
	public boolean addMember(MemberVO mvo) {
		return mapper.addMember(mvo) == 1;
	}
	@Override
	public MemberVO quitMember(MemberVO mvo) {
		return mapper.quitMember(mvo);
	}
	@Override
	public boolean delMember(int no) {
		return mapper.delMember(no);
	}
	@Override
	public MemberVO findId(MemberVO mvo) {
		return mapper.findId(mvo);
	}
	@Override
	public String findIdCheck(String email) {
		return mapper.findIdCheck(email);
	}
	@Override
	public MemberVO findPw(MemberVO mvo) {
		return mapper.findPw(mvo);
	}
	@Override
	public String findPwCheck(String memberId) {
		return mapper.findPwCheck(memberId);
	}
	
	
}
