package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;

public interface MemberService {
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
	public String findIdCheck(String email);
	//비밀번호 찾기
	public MemberVO findPw(MemberVO mvo);
	public String findPwCheck(String memberId);
	//강아지 등록
	public boolean addDog(MemberDogVO dvo);
	//강아지 삭제
	public boolean delDog(int dogNo);
}
