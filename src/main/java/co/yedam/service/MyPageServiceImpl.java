package co.yedam.service;

import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.mapper.MyPageMapper;
import co.yedam.vo.MemberDogVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.WishListVO;

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

	@Override
	public List<ProductVO> wishListAjax(int memberNo) {
		return mapper.wishListAjax(memberNo);
	}

	@Override
	public boolean wishListDel(WishListVO wvo) {
		return mapper.wishListDel(wvo) == 1;
	}

	@Override
	public boolean checkCart(WishListVO wvo) {
		return mapper.checkCart(wvo) == 0;
	}

	@Override
	public boolean wishListAdd(WishListVO wvo) {
		return mapper.wishListAdd(wvo) == 1;
	}
	
}
