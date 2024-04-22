package co.yedam.vo;

import lombok.Data;

@Data
public class CartVO {
	    private int cartNo; // 카트 번호
	    private String proNm; // 제품의 이름
	    private int qty; // 제품 수량
	    private int proNo; // 제품 번호
	    private int proPrice; // 제품 가격
	    private int totalPrice; // 제품 총 가격
	    private String img; // 제품 이미지 URL (필요한 경우)
	    private int memberNo;
}	


