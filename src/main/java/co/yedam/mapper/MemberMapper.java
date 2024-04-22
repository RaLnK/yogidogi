package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.MemberVO;

public interface MemberMapper {
	public List<MemberVO> memberList();
	//로그인
	public MemberVO login(MemberVO mvo);
	public int loginCheck(int memberAuthority);
	//회원가입
	public boolean addMember(MemberVO mvo);
	//회원탈퇴
	public MemberVO quitMember(MemberVO mvo);
	//회원삭제
	public boolean delMember(int no);
	//아이디 찾기
	public MemberVO findId(MemberVO mvo);
	public int findIdCheck(String email);
	//비밀번호 찾기
	public MemberVO findPw(MemberVO mvo);
	public int findPwCheck(String memberId);
}
