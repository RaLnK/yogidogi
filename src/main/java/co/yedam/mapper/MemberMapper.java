package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;

public interface MemberMapper {
	public List<MemberVO> memberList();
	//로그인
	public MemberVO login(MemberVO mvo);
	public int loginCheck(int memberAuthority);
	//회원가입
	public int addMember(MemberVO mvo);
	//회원탈퇴
	public MemberVO quitMember(MemberVO mvo);
	//탈퇴일자
	public MemberVO quitDate(MemberVO mvo);
	//비밀번호 초기화
	public int resetPw(String memberId);
	//회원삭제
	public int delMember(int no);
	//아이디 찾기
	public MemberVO findId(MemberVO mvo);
	public String findIdCheck(String email);
	//아이디 조회
	public  MemberVO memberId(MemberVO mvo);
	//이메일 조회
	public  MemberVO memberEmail(MemberVO mvo);
	//휴대폰 조회
	public  MemberVO memberPhone(MemberVO mvo);
	//비밀번호 찾기
	public MemberVO findPw(MemberVO mvo);
	public String findPwCheck(String memberId);
	//강아지 등록
	public int addDog(MemberDogVO dvo);
	//강아지 삭제
	public int delDog(int dogNo);
	
}
