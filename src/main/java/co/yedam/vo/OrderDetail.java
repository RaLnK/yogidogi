package co.yedam.vo;

import lombok.Data;

@Data
public class OrderDetail {
	private int orderDetailNo;
	private int productNo;
	private int orderNo;
	private String productName;
	private int orderQty;
}
