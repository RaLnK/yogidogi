package co.yedam.vo;

import lombok.Data;

@Data
public class OrderProductVO {
	private String product_img;
	private String product_name;
	private int product_price;
	private int discount_pct;
	private int order_qty;
	
}
