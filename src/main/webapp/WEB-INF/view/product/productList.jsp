<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<style>
.sticky-box{
    position: sticky;
    top: 380px;
}
</style>
 
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="w3-sidebar w3-bar-block w3-light-grey w3-card sticky-box" style="width:200px;">
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <button class="w3-button w3-block w3-left-align" onclick="myAccFunc()">
  Accordion <i class="fa fa-caret-down"></i>
  </button>
  <div id="demoAcc" class="w3-hide w3-white w3-card">
    <a href="#" class="w3-bar-item w3-button">Link</a>
    <a href="#" class="w3-bar-item w3-button">Link</a>
  </div>

  <div class="w3-dropdown-click">
    <button class="w3-button" onclick="myDropFunc()">
      Dropdown <i class="fa fa-caret-down"></i>
    </button>
    <div id="demoDrop" class="w3-dropdown-content w3-bar-block w3-white w3-card">
      <a href="#" class="w3-bar-item w3-button">Link</a>
      <a href="#" class="w3-bar-item w3-button">Link</a>
    </div>
  </div>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
</div>

<div class="untree_co-section product-section before-footer-section">
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