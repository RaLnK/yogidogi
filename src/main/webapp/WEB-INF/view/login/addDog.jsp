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
            <img src="images/logindog.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="images/logo.PNG" alt="logo" class="logo">
              </div>
              <p class="login-card-description">강아지 등록</p>
              <form action="#!">
                   <div class="form-group mb-4">
                    <label for="dogName" class="sr-only">dogName</label>
                    <input type="text" name="dogName" id="dogName" class="form-control" placeholder="강아지 이름">
                  </div>
                  <div class="form-group mb-4">
                    <label for="dogBreed" class="sr-only">dogBreed</label>
                    <select id="dogBreed" name="dogBreed" class="form-control">
                    	<option selected>견종</option>
                    	<option value="비숑">비숑</option>
                    	<option value="말티즈">말티즈</option>
                    	<option value="시츄">시츄</option>
                    	<option value="도베르만">도베르만</option>
                    	<option value="포메라니안">포메라니안</option>
                    	<option value="퍼그">퍼그</option>
                    	<option value="불독">불독</option>
                    	<option value="아메리칸불독">아메리칸불독</option>
                    	<option value="슈나우저">슈나우저</option>
                    	<option value="골든리트리버">골든리트리버</option>
                    	<option value="사모예드">사모예드</option>
                    	<option value="말라뮤트">말라뮤트</option>
                    	<option value="비글">비글</option>
                    	<option value="그레이하운드">그레이하운드</option>
                    	<option value="보더콜리">보더콜리</option>
                    	<option value="말티푸">말티푸</option>
                    	<option value="푸들">푸들</option>
                    	<option value="진돗개">진돗개</option>
                    	<option value="요크셔테리어">요크셔테리어</option>
                    	<option value="허스키">허스키</option>
                    	<option value="로트와일러">로트와일러</option>
                    	<option value="코카스파니엘">코카스파니엘</option>
                    	<option value="웰시코기">웰시코기</option>
                    	<option value="장모치와와">장모치와와</option>
                    	<option value="치와와">치와와</option>
                    	<option value="토이푸들">토이푸들</option>
                    	<option value="폼피츠">폼피츠</option>
                    	<option value="닥스훈트">닥스훈트</option>
                    	<option value="시고르자브종">시고르자브종</option>
                    	<option value="기타">기타</option>
                    </select>
                  </div>
                  <div class="form-group mb-4">
                    <label for="dogBirthDay" class="sr-only">dogBirthDay</label>
                    <input type="date" name="dogBirthDay" id="dogBirthDay" class="form-control" required pattern="\d{2}/\d{2}/\d{2}">
                  </div>             
                  <a id="login" class="btn btn-block login-btn mb-4" type="button" data-toggle="modal">등록</a>	             
                </form>
               <!--모달창-->
				<div id="myModal" class="modal">
	  				<div class="modal-content">
	    				<span class="close">&times;</span>
	    				<p></p>
	  				</div>
				</div>
             	<!--모달창-->
               </div>
              </div>
             </div>
            </div>
           </div>
          </main>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="./js/loginJS/addDog.js"></script>
</body>
</html>