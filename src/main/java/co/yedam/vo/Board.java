package co.yedam.vo;

import lombok.Data;

@Data
public class Board {
	private int boardNo;
	private int memberNo;
	private String boardTitle;
	private String boardDate;
	private String boardContent;
	private int boardCategory;
	private String boardImg;
	private String memberId;
}
