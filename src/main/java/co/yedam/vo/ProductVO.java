package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ProductVO {
	    private int productNo; // 제품 번호
	    private String productName; // 제품의 이름
	    private int productPrice; // 제품 가격
	    private String descText; // 제품 설명
	    private String descImg; // 설명 이미지 URL (필요한 경우)
	    private int leftCnt; // 잔여 수량
	    private int category; // 제품 총 가격
	    private String productImg; // 제품 이미지 URL (필요한 경우)
	    private String company; // 제조사
	    private Date launchDate; // 등록일
	    private int discountPct; // 할인률
	    private int deleteChk; // 제품 삭제 여부
}	


