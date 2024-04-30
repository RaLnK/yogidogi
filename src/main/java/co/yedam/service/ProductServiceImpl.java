package co.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.ProductMapper;
import co.yedam.vo.ProductVO;
import co.yedam.vo.WishListVO;

public class ProductServiceImpl implements ProductService{
	SqlSession session = DataSource.getInstance().openSession(true);
	ProductMapper mapper = session.getMapper(ProductMapper.class);
	@Override
	public List<ProductVO> productList() { // 상품 list
		return mapper.productList();
	}
	@Override
	public boolean addProduct(ProductVO pvo) { // 상품 추가
		return mapper.addProd(pvo) == 1;
	}
	@Override
	public boolean delProduct(ProductVO pvo) { // 상품 삭제
		return mapper.delProd(pvo)==1;
	}
	@Override
	public ProductVO getProduct(int pno) {
		return mapper.getProduct(pno);
	}
	@Override
	public boolean addToWishList(WishListVO wvo) {
		return mapper.addToWishList(wvo)==1;
	}
	@Override
	public boolean delFromWishList(WishListVO wvo) {
		return mapper.delFromWishList(wvo)==1;
	}
	@Override
	public boolean checkWishList(WishListVO wvo) {
		return mapper.checkWishList(wvo) == 0;
	}

	
}
