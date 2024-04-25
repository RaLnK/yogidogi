<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<div class="untree_co-section" style="padding-top: 2rem;">
	<div class="container">
		<div class="row">
			<div class="col-md-10 mb-5 mb-md-0">
				<h2 class="h3 mb-3 text-black">회원 정보</h2>
				<div class="p-3 p-lg-5 border bg-white">
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">아이디 :</h6>
						</div>
						<div class="col-md-10" id="id-div">
							
						</div>
					</div>

					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">비밀번호 :</h6>
						</div>
						<div class="col-md-10" id="pw-div"></div>
					</div>

					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">이름 :</h6>
						</div>
						<div class="col-md-10" id="name-div"></div>
					</div>

					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">이메일 :</h6>
						</div>
						<div class="col-md-10" id="email-div"></div>
					</div>

					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">전화번호 :</h6>
						</div>
						<div class="col-md-10" id="phone-div"></div>
					</div>

					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">현재 포인트 :</h6>
						</div>
						<div class="col-md-10" id="point-div"></div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row justify-content-end">
			<div class="col-md-3">
				<div class="row">
					<div class="col-md-12">
						<button class="btn" style="color:white;background-color:black;" id="editBtn">수정</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>






<script>
	const logId = '${logId}';
</script>
<script src="/yogidogi/js/myPage/memberInfo.js"></script>