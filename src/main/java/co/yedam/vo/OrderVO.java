package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class OrderVO {
		private int odNo;  			// 주문번호
		private int memberNo;		// 회원번호
		private String tgName;   	// 받는사람이름
		private String odAd;  		// 주소
		private String odAd2;		// 상세주소
		private int tgPhone;		// 휴대폰번호
		private String odr;			// 주문요청사항
		private int odc;			// 총 주문량
		private int odPrice;		// 구매가격
		private int odPoint;        // 사용한 포인트
		private String odStatus;	// 주문상태
		private Date odt;   		// 주문일자

//		private int odTotal;		// 총 결제금액
		
		private String name;
		private int quantity;
}

