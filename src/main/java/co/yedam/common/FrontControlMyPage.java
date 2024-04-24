package co.yedam.common;

import java.util.Map;

import co.yedam.myPage.MemberInfo;
import co.yedam.myPage.MemberList;

public class FrontControlMyPage {
	public static void push(Map<String, Control> map) {
		map.put("/memberInfo.do", new MemberInfo());
		map.put("/memberList.do", new MemberList());
	}
}
