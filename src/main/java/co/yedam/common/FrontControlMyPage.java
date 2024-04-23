package co.yedam.common;

import java.util.Map;

import co.yedam.myPage.MemberInfo;

public class FrontControlMyPage {
	public static void push(Map<String, Control> map) {
		map.put("memberInfo.do", new MemberInfo());
	}
}
