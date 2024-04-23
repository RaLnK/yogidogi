package co.yedam.common;

import java.util.Map;

import co.yedam.logIn.addMemberControl;
import co.yedam.logIn.addMemberFormControl;
import co.yedam.logIn.idCheckControl;
import co.yedam.logIn.idCheckFormControl;
import co.yedam.logIn.loginControl;
import co.yedam.logIn.loginFormControl;
import co.yedam.logIn.logoutControl;
import co.yedam.logIn.pwCheckControl;
import co.yedam.logIn.pwCheckFormControl;

public class FrontControlLogin {
	public static void push(Map<String, Control> map) {
		// 로그인
		map.put("/logInForm.do", new loginFormControl());
		map.put("/logIn.do", new loginControl());
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
