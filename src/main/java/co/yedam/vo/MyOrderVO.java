package co.yedam.vo;

import lombok.Data;

@Data
public class MyOrderVO {
	private int orderNo;
	private int memberNo;
	private String targetName;
	private String orderAddr;
	private String orderAddr2;
	private int targetPhone;
	private String orderReq;
	private int orderPrice;
	private int orderPoint;
	private String orderStatus;
	private String orderDate;
	
	private int orderDetailNo;
	private int productNo;
	private String productName;
	private int orderQty;
}
