package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class MemberVO {
	private int memberNo;
	private String memberId;
	private String memberName;
	private String memberPw;
	private String email;
	private String phone;
	private int point;
	private int memberAuthority;
	private int existence;
	private Date renewDate;
	private String memberPwChk;
}
