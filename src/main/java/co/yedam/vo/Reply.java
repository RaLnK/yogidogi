package co.yedam.vo;

import lombok.Data;

@Data
public class Reply {
	private int replyNo;
	private int boardNo;
	private String replyContent;
	private String replyDate;
	
	private String boardTitle;
}
