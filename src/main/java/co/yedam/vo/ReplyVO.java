package co.yedam.vo;

import lombok.Data;

@Data
public class ReplyVO {
	private int replyNo;
	private int boardNo;
	private String replyContent;
	private String replyer;
	private int replyLevel;
	private int originReplyNo;
}
