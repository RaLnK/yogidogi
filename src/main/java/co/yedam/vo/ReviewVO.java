package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReviewVO {
	    private int reviewNo; // 리뷰 번호
	    private int memberNo; // 멤버 번호
	    private int productNo; // 제품 번호
	    private String reviewContent; // 리뷰 내용
	    private Date reviewDate; // 리뷰 쓴 날
	    private String reviewPhoto; // 리뷰 이미지
	    private int starCnt; // 별점
	    
	    private int order;// 정렬
	    
	    private MemberVO memberVO; // join 할 vo
}	


