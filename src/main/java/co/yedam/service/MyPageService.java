package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;

public interface MyPageService {
	public MemberVO memberList(int memberNo);
	public boolean memberUpdate(MemberVO mvo);
	public List<MemberDogVO> memberDogList(int memberNo);
	public boolean memberDogUpdate(MemberDogVO mvo);
}
