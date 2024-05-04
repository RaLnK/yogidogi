<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="co.yedam.vo.ReviewVO"%>
<%@page import="co.yedam.vo.ProductVO"%>
<link href="/yogidogi/css/product.css" rel="stylesheet" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>


<!------------------------------------------- Show One product ------------------------------------------->
<body>
	<!-- Shop Detail Start -->
	<div class="container-fluid py-5 showProduct">
		<div class="row px-xl-5">
			<div class="col-lg-5 pb-5">
				<div id="product-carousel" class="carousel slide"
					data-ride="carousel">
					<div class="carousel-inner border">
						<div class="carousel-item active">
							<img class="w-100 h-100 img"
								src="https://cdn-icons-png.flaticon.com/512/8054/8054593.png"
								alt="https://cdn-icons-png.flaticon.com/512/8054/8054593.png">
							<div class="badge bg-dark text-white position-absolute"
								style="top: 0.5rem; right: 0.5rem">Sale</div>
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
						<input type="radio"
							id="star4half" name="rating" value="4.5" onclick="return(false);" />
						<label class="half" for="star4half"
							title="Pretty good - 4.5 stars"></label> <input type="radio"
							id="star4" name="rating" value="4" onclick="return(false);" /> <label
							class="full" for="star4" title="Good - 4 stars"></label> <input
							type="radio" id="star3half" name="rating" value="3.5"
							onclick="return(false);" /> <label class="half" for="star3half"
							title="Above average - 3.5 stars"></label> <input type="radio"
							id="star3" name="rating" value="3" onclick="return(false);" /> <label
							class="full" for="star3" title="Average - 3 stars"></label> <input
							type="radio" id="star2half" name="rating" value="2.5"
							onclick="return(false);" /> <label class="half" for="star2half"
							title="Kinda bad - 2.5 stars"></label> <input type="radio"
							id="star2" name="rating" value="2" onclick="return(false);" /> <label
							class="full" for="star2" title="Kinda bad - 2 stars"></label> <input
							type="radio" id="star1half" name="rating" value="1.5"
							onclick="return(false);" /> <label class="half" for="star1half"
							title="Meh - 1.5 stars"></label> <input type="radio" id="star1"
							name="rating" value="1" onclick="return(false);" /> <label
							class="full" for="star1" title="Sucks big time - 1 star"></label>
						<input type="radio" id="starhalf" name="rating" value="0.5"
							onclick="return(false);" /> <label class="half" for="starhalf"
							title="Sucks big time - 0.5 stars"></label>
					</fieldset>

					<small class="pt-1">(0 Reviews)</small>
				</div>
				<span class=discPercent></span> <span>%&#129047;</span> <span
					class="text-muted text-decoration-line-through price">$20.00</span>
				<h3 class="product-price discPrice">$50.00</h3>

				<p class="mb-4 proddesc">상품설명</p>

				<div class="d-flex align-items-center mb-4 pt-2" >
					<div class="input-group quantity mr-3" style="width: 130px;">
						<div class="input-group-btn">
							<button class="btn btn-outline-secondary btn-minus">
								<!-- 마이너스 btn  -->
								<i class="fa fa-minus"></i>
							</button>
						</div>
						<input type="text" class="form-control bg-secondary text-center" id="txtQty"
							value="1">
						<div class="input-group-btn">
							<button class="btn btn-outline-secondary btn-plus">
								<!-- 플러스 btn  -->
								<i class="fa fa-plus"></i>
							</button>
						</div>
					</div>
					<button class="btn btn-outline-secondary" id= "btnCartAdd">
						<i class="fa fa-shopping-cart mr-1"></i> Add To Cart
					</button>
					<!-- 좋아요 -->
					<button class="button button-like" id = "productLike">
						<i class="fa fa-heart"></i>
					</button>
				</div>
				<div class="d-flex pt-2">
					<p class="text-dark font-weight-medium mb-0 mr-2"></p>
					<div class="d-inline-flex">
						<a id="btnKakao" class="link-icon kakao"
							href="javascript:shareKakao();">카카오톡</a> <a id="btnTwitter"
							class="link-icon twitter" href="javascript:shareTwitter();">트위터
						</a> <a id="btnFacebook" class="link-icon facebook"
							href="javascript:shareFacebook();">페이스북</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row px-xl-5">
			<div class="col">
				<div
					class="nav nav-tabs justify-content-center border-secondary mb-4">
					<a class="nav-item nav-link navDetail active" data-toggle="tab"
						href="#tab-pane-1">상품설명</a> <a class="nav-item nav-link navRe"
						data-toggle="tab" href="#tab-pane-3">리뷰(0)</a>
				</div>
				<div class="tab-content">
					<!-- 상품 상세 이미지 -->
					<div id="detailContent">
						<div class="detailinfo showstep1">
							<div class="tab-pane fade show active descDetail" id="tab-pane-1">
								<img class="w-100 h-100 img"
									src="https://cdn-icons-png.flaticon.com/512/8054/8054593.png"
									alt="https://cdn-icons-png.flaticon.com/512/8054/8054593.png">
							</div>
						</div>
						<div class="d-grid gap-3">
							<a href="#" class="btn_open btn btn-outline-dark ">상세설명 더보기</a> <a
								href="#" class="btn_close hide btn btn-outline-dark">상세설명
								감추기</a>
						</div>
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
							<img
								src="https://cdn-icons-png.flaticon.com/512/8054/8054593.png"
								alt="https://cdn-icons-png.flaticon.com/512/8054/8054593.png"
								class="img-fluid mr-3 mt-1 reviewImg">
							<div class="modal">
								<div class="modalBox" style="text-align: center;"></div>
							</div>
							<div class="media-body rinfo">
								<h6>
									NickName<small> - <i>01 Jan 2045</i></small>
								</h6>
								<p>
									<br>리뷰 작성
								</p>
								<fieldset class="block_rating__stars">
									<input type="radio" id="star5" name="rating" value="5"
										onclick="return(false);" /> <label class="full" for="star5"
										title="Awesome - 5 stars"></label> <input type="radio"
										id="star4.5" name="rating" value="4.5"
										onclick="return(false);" /> <label class="half" for="star4.5"
										title="Pretty good - 4.5 stars"></label> <input type="radio"
										id="star4" name="rating" value="4" onclick="return(false);" />
									<label class="full" for="star4" title="Good - 4 stars"></label>
									<input type="radio" id="star3.5" name="rating" value="3.5" />
									<label class="half" for="star3.5"
										title="Above average - 3.5 stars"></label> <input type="radio"
										id="star3" name="rating" value="3" onclick="return(false);" />
									<label class="full" for="star3" title="Average - 3 stars"></label>
									<input type="radio" id="star2.5" name="rating" value="2.5"
										onclick="return(false);" /> <label class="half" for="star2.5"
										title="Kinda bad - 2.5 stars"></label> <input type="radio"
										id="star2" name="rating" value="2" onclick="return(false);" />
									<label class="full" for="star2" title="Kinda bad - 2 stars"></label>
									<input type="radio" id="star1.5" name="rating" value="1.5"
										onclick="return(false);" /> <label class="half" for="star1.5"
										title="Meh - 1.5 stars"></label> <input type="radio"
										id="star1" name="rating" value="1" onclick="return(false);" />
									<label class="full" for="star1" title="Sucks big time - 1 star"></label>
									<input type="radio" id="star0.5" name="rating" value="0.5"
										onclick="return(false);" /> <label class="half" for="star0.5"
										title="Sucks big time - 0.5 stars"></label>
								</fieldset>
							</div>
							<hr>
						</div>
					</div>
					<!-- end of  review -->

				</div>
			</div>
		</div>
	</div>

	<!-- Shop Detail End -->

	<script>
		let logId = "${memberId}"
		let memberNo = "${memberNo}"
		let pno = "${param.pno}" // parameter 값 가져오기
		let order = 1;
	</script>

	<!-- JavaScript Libraries -->
	<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
	<script src="js/product/product.js"></script>
	<script src="js/product/productList.js"></script>