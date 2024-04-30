package co.yedam.common;

import java.util.Map;

import co.yedam.myPage.GetFirstProductName;
import co.yedam.myPage.MemberDogInfo;
import co.yedam.myPage.MemberDogList;
import co.yedam.myPage.MemberDogUpdate;
import co.yedam.myPage.MemberInfo;
import co.yedam.myPage.MemberList;
import co.yedam.myPage.MemberUpdate;
import co.yedam.myPage.MemberWishList;
import co.yedam.myPage.MemberWishListAjax;
import co.yedam.myPage.MyOrder;
import co.yedam.myPage.MyOrderDetail;
import co.yedam.myPage.MyOrderList;
import co.yedam.myPage.WishListAdd;
import co.yedam.myPage.WishListDel;

public class FrontControlMyPage {
	public static void push(Map<String, Control> map) {
		// 회원 정보
		map.put("/memberInfo.do", new MemberInfo());
		map.put("/memberList.do", new MemberList());
		map.put("/memberUpdate.do", new MemberUpdate());
		
		// 강아지
		map.put("/memberDogInfo.do", new MemberDogInfo());
		map.put("/memberDogList.do", new MemberDogList());
		map.put("/memberDogUpdate.do", new MemberDogUpdate());
		
		// 찜 목록
		map.put("/memberWishList.do", new MemberWishList());
		map.put("/memberWishListAjax.do", new MemberWishListAjax());
		map.put("/wishListAdd.do", new WishListAdd());
		map.put("/wishListDel.do", new WishListDel());
		
		// 주문 내역
		map.put("/myOrder.do", new MyOrder());
		map.put("/myOrderList.do", new MyOrderList());
		map.put("/getFirstProductName.do", new GetFirstProductName());
		
		//주문 상세 내역
		map.put("/myOrderDetail.do", new MyOrderDetail());
	}
}
