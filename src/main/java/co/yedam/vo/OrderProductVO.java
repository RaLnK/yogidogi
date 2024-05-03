package co.yedam.vo;

import lombok.Data;

@Data
public class OrderProductVO {
	private String productImg;
	private String productName;
	private int productPrice;
	private int category;
	private int discountPct;
	private int orderQty;
	private int productNo;
}
