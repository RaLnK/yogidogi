package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberVO;

public interface MemberService {
	public List<MemberVO> memberList();
	//로그인
	public MemberVO login(MemberVO mvo);
	//회원가입
	public boolean addMember(MemberVO mvo);
	public boolean delMember(int no);
	//아이디 찾기
	public MemberVO findId(MemberVO mvo);
	public int findIdCheck(String email);
	//비밀번호 찾기
	public MemberVO findPw(MemberVO mvo);
	public int findPwCheck(String memberId);
}
