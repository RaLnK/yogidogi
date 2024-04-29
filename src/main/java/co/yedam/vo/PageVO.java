package co.yedam.vo;

import lombok.Data;

@Data
public class PageVO {
	//게시글
	private int page;

	//댓글
	private int rpage;
	private int bno;
}
