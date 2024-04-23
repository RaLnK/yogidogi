package co.yedam.service;

import java.util.List;

import co.yedam.vo.MemberVO;
import co.yedam.vo.ProductVO;

public interface ProductService {
	// 상품 목록
	public List<ProductVO> productList();

	//회원가입
	public boolean addProduct(ProductVO pvo);
	
	//회원삭제
	public boolean delProduct(ProductVO pvo);
	
}
