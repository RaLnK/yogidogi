package co.yedam.vo;

import lombok.Data;

@Data
public class CartProductVO {
    private int cartNo; // 카트 번호
    private int quantity; // 제품 수량
    private int memberNo; // 회원 번호
    
    private String productImg; // 제품 이미지 URL (필요한 경우)
    private int productNo; // 제품 번호
    private String productName; // 제품의 이름
    private int productPrice; // 제품 가격
    private int category;
    
    
    
    
	private int totalPrice; // 제품 총 가격
}
