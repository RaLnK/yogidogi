package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	private int replyNo;			//댓글번호
	private int boardNo;			//게시글번호
	private String replyContent;	//댓글내용
	private Date replyDate;			//댓글게시날짜
	private int memberNo;		//댓글작성자
	private int replyLevel;			//댓글레벨(0-원댓글, 1-대댓글)
	private int originReplyNo;		//원댓글번호
	
	private String memberId; // member테이블(조인)
}
