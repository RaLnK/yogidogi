package co.yedam.common;

import java.util.Map;

import co.yedam.login.AddDogControl;
import co.yedam.login.AddDogFormControl;
import co.yedam.login.AddMemberControl;
import co.yedam.login.AddMemberFormControl;
import co.yedam.login.IdCheckControl;
import co.yedam.login.IdCheckFormControl;
import co.yedam.login.LoginControl;
import co.yedam.login.LoginFormControl;
import co.yedam.login.LogoutControl;
import co.yedam.login.LogoutFormControl;
import co.yedam.login.MemberListControl;
import co.yedam.login.NewPwControl;
import co.yedam.login.NewPwFormControl;
import co.yedam.login.PwCheckControl;
import co.yedam.login.PwCheckFormControl;
import co.yedam.login.QuitMemberControl;

public class FrontControlLogin {
	public static void push(Map<String, Control> map) {
		// 로그인
		map.put("/memberList.do", new MemberListControl());
		map.put("/loginForm.do", new LoginFormControl());
		map.put("/login.do", new LoginControl());
		map.put("/logoutForm.do", new LogoutFormControl());
		map.put("/logout.do", new LogoutControl());
		map.put("/addMemberForm.do", new AddMemberFormControl());
		map.put("/addMember.do", new AddMemberControl());
		map.put("/idCheckForm.do", new IdCheckFormControl());
		map.put("/idCheck.do", new IdCheckControl());
		map.put("/pwCheckForm.do", new PwCheckFormControl());
		map.put("/pwCheck.do", new PwCheckControl());
		map.put("/addDogForm.do", new AddDogFormControl());
		map.put("/addDog.do", new AddDogControl());
		map.put("/newPwForm.do", new NewPwFormControl());
		map.put("/newPw.do", new NewPwControl());
		map.put("/quitMember.do", new QuitMemberControl());
	}
}
