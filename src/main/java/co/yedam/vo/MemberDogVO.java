package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class MemberDogVO {
	private int dogNo;
	private int memberNo;
	private String dogBreed;
	private Date dogBirthday;
	private String dogName;
}
