<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

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