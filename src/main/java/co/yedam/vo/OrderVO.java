package co.yedam.vo;

import co.yedam.vo.OrderVO;

import lombok.Data;

@Data
public class OrderVO {
		private int odNo;  			// 주문번호
		private String tgName;   	// 받는사람이름
		private String odAd;  		// 주소
		private String odt;   		// 주문일자
		private String odStatus;	// 주문상태
		private int odPrice;		// 총 상품금액
		private int odTotal;		// 총 결제금액
		private int memberNo;		// 회원번호
		private String phone;		// 휴대폰번호
		
		private String name;
		private String img;
		private int quantity;
}

