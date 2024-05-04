package co.yedam.vo;

import lombok.Data;

@Data
public class PageVO {
	// page, searchCondition, keyword 
	private int page;
	
	// 댓글 관련
	private int rpage;
	private int bno;
	
	private String order;
	private int category;
}
