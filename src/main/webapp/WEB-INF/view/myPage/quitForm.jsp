<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<div class="untree_co-section" style="padding-top: 2rem;">
	<div class="container">
		<div class="row">
			<div class="col-md-10 mb-5 mb-md-0">
				<h2 class="h3 mb-3 text-black">회원 탈퇴</h2>
				<div class="p-3 p-lg-5 border bg-white" style="text-align:center;">
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-2">
							<h6 class="text-black" style="line-height: 50px;">비밀번호 확인 :</h6>
						</div>
						<div class="col-md-7">
							<input type="password" class="form-control" id="pw" style="height:50;background-color:white;">
						</div>
						<div class="col-md-3">
							<div class="row">
								<div class="col-md-12">
									<button class="btn" style="color:white;background-color:black;" id="submitBtn">확인</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="quitModal" class="modal" style="text-align:center;position:fixed;display:none;justify-content:center;width:500px;top:50%;left:40%;">
	<div class="modal-content">
		<p style="height:150px;font-size:xx-large;line-height:150px;">정말 탈퇴하시겠습니까?</p>
	</div>
	<div class="col-md-12" style="text-align:center">
		<button class="btn" style="color: white; background-color: black;" id="quitYes">네</button>
		<button class="btn" style="color: white; background-color: black;" id="quitNo">아뇨</button>
	</div>
</div>


<script src="/yogidogi/js/myPage/quitForm.js"></script>