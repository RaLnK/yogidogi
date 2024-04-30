package co.yedam.service;

import java.util.List;

import co.yedam.vo.ProductVO;
import co.yedam.vo.WishListVO;

public interface ProductService {
	// 상품 목록
	public List<ProductVO> productList(int order);
	
	// 상품 한개
	public ProductVO getProduct(int pno);
	
	// 카테고리
	public List<ProductVO> sortProductList(ProductVO pvo);

	//회원가입
	public boolean addProduct(ProductVO pvo);
	
	//회원삭제
	public boolean delProduct(ProductVO pvo);
	
	//wishList
	public boolean addToWishList(WishListVO wvo);
	
	public boolean delFromWishList(WishListVO wvo);
	
	public boolean checkWishList(WishListVO wvo);
	
}
