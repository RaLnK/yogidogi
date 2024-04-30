<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<nav
	class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
	arial-label="Furni navigation bar">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<% String memberId = (String)session.getAttribute("memberId"); %>

	<div class="container">
		<a class="navbar-brand" href="mainapp.tiles">YOGIDOGI<span></span></a>

		<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbarsFurni" aria-controls="navbarsFurni"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarsFurni">
			<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
				<li class="nav-item active"><a class="nav-link"
					href="mainapp.tiles">Home</a></li>
				<li class="shop"><a class="nav-link" href="productList.do">Shop</a></li>
				<li><a class="nav-link" href="services.html">Ask</a></li>
				<li><a class="nav-link" href="boardList.do">Board</a></li>
				<li><a class="nav-link" href="memberInfo.do">My Page</a></li>
			</ul>

			<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
				<c:if test="${memberId eq null}">
				<li><a id="login" class="nav-link" href="loginForm.do"><img src="/yogidogi/images/user.svg"></a></li>
				</c:if>
				<c:if test="${memberId ne null}">
				<li><a id="login" class="nav-link" href="logoutForm.do"><img src="/yogidogi/images/user.svg"></a></li>
				</c:if>
				<li><a id="cart" class="nav-link" href="cartList.do"><img src="/yogidogi/images/cart.svg"></a></li>
			</ul>
		</div>
	</div>
</nav>