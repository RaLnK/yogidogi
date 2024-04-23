<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="css/productList.css" type="text/css" />

<div class="d-flex" id="wrapper">
	<aside class="side-bar side">

		<ul>
			<li><a href="#">YOGI DOGI</a>
			<li id ="0"><a href="#">기타잡화</a>
			<li id ="1"><a href="#">사료간식</a></li>
			<li id ="2"><a href="#">위생배변</a></li>
			<li id ="3"><a href="#">의류</a></li>
			<li id ="4"><a href="#">장난감</a></li>
			<li id ="5"><a href="#">집</a></li>
		</ul>
	</aside>

	<div
		class="untree_co-section product-section before-footer-section section">
		<div class="container">
			<div class="row one">
				<!-- Start Column 1 -->
				<div class="col-12 col-md-4 col-lg-3 mb-5 product">
					<a class="product-item item" href="#"> <img
						src="images/product-3.png" class="img-fluid product-thumbnail img">
						<h3 class="product-title title">Nordic Chair</h3> <strong
						class="product-price price">$50.00</strong> <span
						class="icon-cross span"> <img src="images/cross.svg"
							class="img-fluid">
					</span>
					</a>
				</div>
				<!-- End Column 1 -->


			</div>
		</div>
	</div>
</div>
<script>
	function myAccFunc() {
		var x = document.getElementById("demoAcc");
		if (x.classList.contains("w3-show")) {
			x.classList.append('w3-show');
			x.previousElementSibling.classList.append('w3-green');
		} else {
			x.className = x.classList.remove("w3-show");
			x.previousElementSibling.classList.remove('w3-green');
		}
	}

	function myDropFunc() {
		var x = document.getElementById("demoDrop");
		if (x.classList.contains("w3-show")) {
			x.classList.append('w3-show');
			x.previousElementSibling.classList.append('w3-green');
		} else {
			x.className = x.className.replace(" w3-show", "");
			x.className = x.classList.remove("w3-show");
			x.previousElementSibling.classList.remove('w3-green');
		}
	}
</script>

<script src ="js/product/productList.js">

</script>