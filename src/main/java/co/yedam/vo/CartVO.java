package co.yedam.vo;

import lombok.Data;

@Data
public class CartVO {
	    private int cartNo; // 카트 번호
	    
	    private int qty; // 제품 수량
	    private int proNo; // 제품 번호

	    private int memberNo; // 회원 번호
}	


