package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {

	private int boardNo; 			//게시글번호
	private int memberNo;			//회원번호(게시글 작성자)
	private String boardTitle;		//게시글제목
	private Date boardDate;			//게시 날짜
	private String boardContent;	//게시글내용
	private int boardCategory;		//게시글 카테고리(0-자유게시판, 1-공지게시판, 2-문의게시판)
	private String boardImg;		//게시글 이미지
	private String memberId;		//회원 아이디(member테이블)
}
