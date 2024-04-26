package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;

public interface MyPageMapper {
	public MemberVO memberList(int memberNo);
	public int memberUpdate(MemberVO mvo);
	public List<MemberDogVO> memberDogList(int memberNo);
	public int memberDogUpdate(MemberDogVO mvo);
}
