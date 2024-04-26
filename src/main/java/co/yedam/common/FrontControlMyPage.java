package co.yedam.common;

import java.util.Map;

import co.yedam.myPage.MemberDogInfo;
import co.yedam.myPage.MemberDogList;
import co.yedam.myPage.MemberDogUpdate;
import co.yedam.myPage.MemberInfo;
import co.yedam.myPage.MemberList;
import co.yedam.myPage.MemberUpdate;

public class FrontControlMyPage {
	public static void push(Map<String, Control> map) {
		map.put("/memberInfo.do", new MemberInfo());
		map.put("/memberList.do", new MemberList());
		map.put("/memberUpdate.do", new MemberUpdate());
		map.put("/memberDogInfo.do", new MemberDogInfo());
		map.put("/memberDogList.do", new MemberDogList());
		map.put("/memberDogUpdate.do", new MemberDogUpdate());
	}
}
