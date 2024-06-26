package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.PageVO;
import co.yedam.vo.ProductVO;
import co.yedam.vo.WishListVO;

public interface ProductMapper {

	// 상품 리스트
	public List<ProductVO> productList(PageVO pageVO);
	public List<ProductVO> sortProductList(PageVO pageVO);
	
	public int selectCount(ProductVO productVO);
	public int getProdCount();
	
	// 상품 한개 
	public ProductVO getProduct(int pno);
	
	// 상품 등록
	public int addProd(ProductVO pvo);
	
	// 상품 삭제
	public int delProd(ProductVO pvo);
	
	//wishList
	public int addToWishList(WishListVO wvo);
	public int delFromWishList(WishListVO wvo);
	public List<WishListVO> wishList(int memberNo);
	
}
