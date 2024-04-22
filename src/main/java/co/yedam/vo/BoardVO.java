package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {

	private int boardNo;
	private int memberNo;
	private String boardTitle;
	private String boardContent;
	private int boardCategory;
	private String boardImg;
}
