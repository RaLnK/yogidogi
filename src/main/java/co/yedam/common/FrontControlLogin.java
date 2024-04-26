package co.yedam.common;

import java.util.Map;

import co.yedam.login.AddDogControl;
import co.yedam.login.AddDogFormControl;
import co.yedam.login.MemberListControl;
import co.yedam.login.addMemberControl;
import co.yedam.login.addMemberFormControl;
import co.yedam.login.idCheckControl;
import co.yedam.login.idCheckFormControl;
import co.yedam.login.loginControl;
import co.yedam.login.loginFormControl;
import co.yedam.login.logoutControl;
import co.yedam.login.pwCheckControl;
import co.yedam.login.pwCheckFormControl;

public class FrontControlLogin {
	public static void push(Map<String, Control> map) {
		// 로그인
		map.put("/memberList.do", new MemberListControl());
		map.put("/loginForm.do", new loginFormControl());
		map.put("/login.do", new loginControl());
		map.put("/logout.do", new logoutControl());
		map.put("/addMemberForm.do", new addMemberFormControl());
		map.put("/addMember.do", new addMemberControl());
		map.put("/idCheckForm.do", new idCheckFormControl());
		map.put("/idCheck.do", new idCheckControl());
		map.put("/pwCheckForm.do", new pwCheckFormControl());
		map.put("/pwCheck.do", new pwCheckControl());
		map.put("/addDogForm.do", new AddDogFormControl());
		map.put("/addDog.do", new AddDogControl());
	}
}
