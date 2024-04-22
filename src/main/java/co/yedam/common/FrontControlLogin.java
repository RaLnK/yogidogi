package co.yedam.common;

import java.util.Map;

import co.yedam.loginControl.addMemberControl;
import co.yedam.loginControl.addMemberFormControl;
import co.yedam.loginControl.idCheckControl;
import co.yedam.loginControl.idCheckFormControl;
import co.yedam.loginControl.loginControl;
import co.yedam.loginControl.loginFormControl;
import co.yedam.loginControl.logoutControl;
import co.yedam.loginControl.pwCheckControl;
import co.yedam.loginControl.pwCheckFormControl;

public class FrontControlLogin {
	public static void push(Map<String, Control> map) {
		// 로그인
		map.put("/loginForm.do", new loginFormControl());
		map.put("/login.do", new loginControl());
		map.put("/logout.do", new logoutControl());
		map.put("/addMemberForm.do", new addMemberFormControl());
		map.put("/addMember.do", new addMemberControl());
		map.put("/idCheckForm.do", new idCheckFormControl());
		map.put("/idCheck.do", new idCheckControl());
		map.put("/pwCheckForm.do", new pwCheckFormControl());
		map.put("/pwCheck.do", new pwCheckControl());
		map.put("/addDogForm.do", null);
		map.put("/addDog.do", null);
	}
}
