<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!-- /*
* Bootstrap 5
* Template Name: Furni
* Template Author: Untree.co
* Template URI: https://untree.co/
* License: https://creativecommons.org/licenses/by/3.0/
*/ -->
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="author" content="Untree.co">
<link rel="shortcut icon" href="favicon.png">

<meta name="description" content="" />
<meta name="keywords" content="bootstrap, bootstrap4" />

<!-- Bootstrap CSS -->
<link href="/yogidogi/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"	rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="/yogidogi/css/tiny-slider.css" rel="stylesheet">
<link href="/yogidogi/css/style.css" rel="stylesheet">
<link href="/yogidogi/css/menu-style.css" rel="stylesheet" />
<link href="/yogidogi/css/side-bar-style.css" rel="stylesheet">
<link href="/yogidogi/css/productList.css" rel="stylesheet"/>

<title>Furni Free Bootstrap 5 Template for Furniture and
	Interior Design Websites by Untree.co</title>
</head>

<body>

	<!-- Start Header/Navigation -->
		<tiles:insertAttribute name="nav" />
	<!-- End Header/Navigation -->


	<!-- Start Hero Section -->
		<tiles:insertAttribute name="hero" />
	<!-- End Hero Section -->

	<div class="d-flex" id="wrapper">
		<!-- Start Menu Section -->
			<tiles:insertAttribute name="menu" />
		<!-- End Menu Section -->
	
	
		<div class="container container-fluid">
			<!-- Start Body Section -->
				<tiles:insertAttribute name="body" />
			<!-- End Body Section -->
		</div>
	
	</div>



	<!-- Start Footer Section -->
		<tiles:insertAttribute name="footer" />
	<!-- End Footer Section -->


	<script src="/yogidogi/js/bootstrap.bundle.min.js"></script>
	<script src="/yogidogi/js/tiny-slider.js"></script>
</body>

</html>
