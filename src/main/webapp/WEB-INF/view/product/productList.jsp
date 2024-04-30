<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<style>
#sort {
	margin: 20px;
}

#sort a {
	margin: 5px;
}
</style>
<div id="sort">
	<p>
		<a href="#" class="btn btn-outline-success active" id="news">신상품</a> <a
			href="#" class="btn btn-outline-success" id="sales">판매순</a> <a
			href="#" class="btn btn-outline-success" id="discount">할인률순</a>
	</p>
</div>


<div class="untree_co-section product-section before-footer-section section">
	<div class="container">
		<div class="row one">
			<!-- Start Column 1 -->
			<div class="col-12 col-md-4 col-lg-3 mb-5 product" style="display: none;">
				<a class="product-item item" href="#"> <img
					src="images/product-3.png" class="img-fluid product-thumbnail img">
					<h3 class="product-title title">Nordic Chair</h3>
					<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div> 
					<span class="text-muted text-decoration-line-through price">$20.00</span>
					<strong class="product-price discPrice">$50.00</strong>
					<div>
						<!-- 좋아요 -->
						<button class="button button-like">
							<i class="fa fa-heart"></i>
						</button>
					</div>
				</a>
			</div>
			<!-- End Column 1 -->
		</div>
	</div>
</div>

<script>
let logId = "${memberId}"
</script>

<script src="js/product/productList.js"></script>