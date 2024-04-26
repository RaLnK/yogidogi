<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>회원가입</title>
	<link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/login.css">
	<link rel="stylesheet" href="css/modal.css">
</head>
<body>
	<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="images/dog.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="images/logo.PNG" alt="logo" class="logo">
              </div>
              <p class="login-card-description">회원가입</p>
              <form action="#!">
                  <div class="form-group">
                    <label for="id" class="sr-only">ID</label>
                    <input type="text" name="id" id="id" class="form-control" placeholder="ID(숫자, 영문자 조합 5자리 이상)">
                  </div>
                  <div class="form-group mb-4">
                    <label for="name" class="sr-only">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="성함">
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="password(숫자, 영문자 조합 8자리 이상)">
                  </div>
                  <div class="form-group mb-4">
                    <label for="passwordCheck" class="sr-only">PasswordCheck</label>
                    <input type="password" name="passwordCheck" id="passwordCheck" class="form-control" placeholder="password와 동일해야 합니다">
                  </div>
                  <div class="form-group mb-4">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="email">
                  </div>
                  <div class="form-group mb-4">
                    <label for="phone" class="sr-only">Phone</label>
                    <input type="text" name="phone" id="phone" class="form-control" placeholder="연락처">
                  </div>
                  <a id="login" class="btn btn-block login-btn mb-4" type="button" data-toggle="modal">가입</a>	             
                </form>
               <!--모달창-->
				<div id="myModal" class="modal">
	  				<div class="modal-content">
	    				<span class="close">&times;</span>
	    				<p></p>
	  				</div>
				</div>
             	<!--모달창-->
             	<!--강아지등록모달창-->
             	<div id="dogModal" class="dmodal">
             		<div class="modal-content">
             			<span class="close">&times;</span>
             			<p>새로운 회원이 되신것을 환영합니다</p>
             			<p>강아지 등록을 진행하시겠습니까?</p>
             			<button id="yes" class="yon">예</button>
             			<button id="no" class="yon">아니오(My Page에서 추후에 등록 가능합니다)</button>
             		</div>
             	</div>
             	<!--강아지등록모달창-->
               </div>
              </div>
             </div>
            </div>
           </div>
          </main>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="./js/loginJS/addMember.js"></script>
</body>
</html>