package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class OrderVO {
		private int orderNo;  			// 주문번호
		private int memberNo;		// 회원번호
		private String targetName;   	// 받는사람이름
		private String orderAddr;  		// 주소
		private String orderAddr2;		// 상세주소
		private String targetPhone;		// 휴대폰번호
		private String orderReq;		// 주문요청사항
		private int orderPrice;		// 구매가격
		private int orderPoint;        // 사용한 포인트
		private String orderStatus;	// 주문상태
		private String orderDate;   		// 주문일자
}

