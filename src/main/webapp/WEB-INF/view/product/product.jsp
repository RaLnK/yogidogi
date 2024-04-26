<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="co.yedam.vo.ReviewVO"%>
<%@page import="co.yedam.vo.ProductVO"%>
<link href="/yogidogi/css/product.css" rel="stylesheet" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<!-- Google Web Fonts -->
<link rel="preconnect" href="https://fonts.gstatic.com">


<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

<!-- Customized Bootstrap Stylesheet -->
<link href="css/product.css" rel="stylesheet">

<style>
#sortReview a{
	color: black;
}

#sort {
	margin: 20px;
}

#sort a {
	margin: 5px;
}
.top {
	background-color: y
}
</style>
<!--menu, 전체 product  -->
<div id="sort" style="display: none;">
	<p>
		<a href="#" class="btn btn-outline-success active" id="news">신상품</a> <a
			href="#" class="btn btn-outline-success" id="sales">판매순</a> <a
			href="#" class="btn btn-outline-success" id="discount">할인률순</a>
	</p>
</div>

<div class="untree_co-section product-section before-footer-section section" style="display: none;">
	<div class="container">
		<div class="row one">
			<!-- Start Column 1 -->
			<div class="col-12 col-md-4 col-lg-3 mb-5 product"
				style="display: none;">
				<a class="product-item item" href="#"> <img
					src="images/product-3.png" class="img-fluid product-thumbnail img">
					<h3 class="product-title title">Nordic Chair</h3>
					<div class="badge bg-dark text-white position-absolute"
						style="top: 0.5rem; right: 0.5rem">Sale</div> <span
					class="text-muted text-decoration-line-through price">$20.00</span>
					<strong class="product-price discPrice">$50.00</strong> <span
					class="icon-cross span"> <img src="images/cross.svg"
						class="img-fluid">
				</span>
				</a>
			</div>
			<!-- End Column 1 -->
		</div>
	</div>
</div>



<!------------------------------------------- Show One product ------------------------------------------->
<body>
	<!-- Shop Detail Start -->
	<div class="container-fluid py-5 showProduct">
		<div class="row px-xl-5">
			<div class="col-lg-5 pb-5">
				<div id="product-carousel" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner border">
						<div class="carousel-item active">
							<img class="w-100 h-100" src="https://cdn-icons-png.flaticon.com/512/8054/8054593.png" alt="Image">
						</div>
					</div>
				
				</div>
			</div>

			<div class="col-lg-7 pb-5 productDetail">
				<h3 class="font-weight-semi-bold">Colorful Stylish Shirt</h3>
				<div class="d-flex mb-3">
				
						<fieldset class="block_rating__stars">
							<input type="radio" id="star5" name="rating" value="5" onclick="return(false);">
							<label class="full" for="star5" title="Awesome - 5 stars"></label> 
							<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return(false);" />
							<label class="half" for="star4half" title="Pretty good - 4.5 stars"></label> 
							<input type="radio" id="star4" name="rating" value="4" onclick="return(false);" />
							<label class="full" for="star4" title="Good - 4 stars"></label> 
							<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return(false);"/>
							<label class="half" for="star3half" title="Above average - 3.5 stars"></label> 
							<input type="radio" id="star3" name="rating" value="3" onclick="return(false);"/>
							<label class="full" for="star3" title="Average - 3 stars"></label> 
							<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return(false);"/>
							<label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label> 
							<input type="radio" id="star2" name="rating" value="2" onclick="return(false);"/>
							<label class="full" for="star2" title="Kinda bad - 2 stars"></label> 
							<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return(false);"/>
							<label class="half" for="star1half" title="Meh - 1.5 stars"></label> 
							<input type="radio" id="star1" name="rating" value="1" onclick="return(false);"/>
							<label class="full" for="star1" title="Sucks big time - 1 star"></label> 
							<input type="radio" id="starhalf" name="rating" value="half" onclick="return(false);"/>
							<label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
							</fieldset> 
							
					<small class="pt-1">(0 Reviews)</small>
				</div>
				<h3 class="font-weight-semi-bold mb-4">0원</h3>
				<p class="mb-4">product description</p>

				<div class="d-flex align-items-center mb-4 pt-2">
					<div class="input-group quantity mr-3" style="width: 130px;">
						<div class="input-group-btn">
							<button class="btn btn-primary btn-minus"> <!-- 마이너스 btn  -->
								<i class="fa fa-minus"></i>
							</button>
						</div>
						<input type="text" class="form-control bg-secondary text-center" value="1">
						<div class="input-group-btn">
							<button class="btn btn-primary btn-plus"> <!-- 플러스 btn  -->
								<i class="fa fa-plus"></i>
							</button>
						</div>
					</div>
					<button class="btn btn-primary">
						<i class="fa fa-shopping-cart mr-1"></i> Add To Cart
					</button>
				</div>
				<div class="d-flex pt-2">
					<p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
					<div class="d-inline-flex">
						<a class="text-dark px-2" href=""> <i
							class="fab fa-facebook-f"></i>
						</a> <a class="text-dark px-2" href=""> <i class="fab fa-twitter"></i>
						</a> <a class="text-dark px-2" href=""> <i
							class="fab fa-linkedin-in"></i>
						</a> <a class="text-dark px-2" href=""> <i
							class="fab fa-pinterest"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row px-xl-5">
			<div class="col">
				<div class="nav nav-tabs justify-content-center border-secondary mb-4">
					<a class="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>  
						<a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews(0)</a>
				</div>
				<div class="tab-content">
					<div class="tab-pane fade show active" id="tab-pane-1">
						<h4 class="mb-3">Product Description</h4>
						<p>description img</p>
					</div>
					
					<!-- 리뷰 -->
					<div class="tab-pane fade" id="tab-pane-3">
						<div id="sortReview">
							<p>
								<a href="#" class="btn btn-outline-secondary active" id="news">최신순</a>
								<a href="#" class="btn btn-outline-secondary" id="stars">별점순</a>
							</p>
						</div>
						<div class="media mb-4 oneReview">
							<img src="https://cdn-icons-png.flaticon.com/512/8054/8054593.png" alt="Image"  class="img-fluid mr-3 mt-1 reviewImg">
							<div class="modal">
								<div class="modalBox" style="text-align: center;"></div>
							</div>
							<div class="media-body rinfo">
								<h6>NickName<small> - <i>01 Jan 2045</i></small> </h6>
									<p><br>리뷰 내용</p>
									<fieldset class="block_rating__stars">
										<input type="radio" id="star5" name="rating" value="5" onclick="return(false);"/>
										<label class="full" for="star5" title="Awesome - 5 stars"></label> 
										<input type="radio" id="star4.5" name="rating" value="4.5" onclick="return(false);"/>
										<label class="half" for="star4.5" title="Pretty good - 4.5 stars"></label> 
										<input type="radio" id="star4" name="rating" value="4" onclick="return(false);"/>
										<label class="full" for="star4" title="Good - 4 stars"></label> 
										<input type="radio" id="star3.5" name="rating" value="3.5" />
										<label class="half" for="star3.5" title="Above average - 3.5 stars"></label> 
										<input type="radio" id="star3" name="rating" value="3" onclick="return(false);"/>
										<label class="full" for="star3" title="Average - 3 stars"></label> 
										<input type="radio" id="star2.5" name="rating" value="2.5" onclick="return(false);"/>
										<label class="half" for="star2.5" title="Kinda bad - 2.5 stars"></label> 
										<input type="radio" id="star2" name="rating" value="2" onclick="return(false);"/>
										<label class="full" for="star2" title="Kinda bad - 2 stars"></label> 
										<input type="radio" id="star1.5" name="rating" value="1.5" onclick="return(false);"/>
										<label class="half" for="star1.5" title="Meh - 1.5 stars"></label> 
										<input type="radio" id="star1" name="rating" value="1" onclick="return(false);"/>
										<label class="full" for="star1" title="Sucks big time - 1 star"></label> 
										<input type="radio" id="star0.5" name="rating" value="0.5" onclick="return(false);"/>
										<label class="half" for="star0.5" title="Sucks big time - 0.5 stars"></label>
									</fieldset> 
							</div> <hr>
						</div>
					</div> <!-- end of  review -->

				</div>
			</div>
		</div>
	</div>

	<!-- Shop Detail End -->



	<script>
	let pno = "${param.pno}" // parameter 값 가져오기
	let order = 1;
	</script>
	<!-- JavaScript Libraries -->
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
	<script src="js/product/product.js"></script>
	<script src="js/product/productList.js"></script>