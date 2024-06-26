<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<div class="untree_co-section" style="padding-top: 2rem;">
	<div class="container">
		<div class="row">
			<div class="col-md-10 mb-10 mb-md-0" id="dogList">
				<h2 class="h3 mb-3 text-black">내 강아지</h2>
				<div class="row justify-content-end">
					<div class="col-md-6" style="text-align:right;">
						<button class="btn" style="color: white; background-color: #c39de0;" id="setLeaderBtn">대표 강아지 설정</button>
						<button class="btn" style="color: white; background-color: #c39de0;" id="addDogBtn">강아지 등록</button>
					</div>
				</div>
				<div class="p-3 p-lg-5 col-md-6 border bg-white" style="float:left;display:none" style="border:2px;">
					<div class="form-group row">
						
					</div> 
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4">
							<h6 class="text-black" style="line-height: 50px;">이름 :</h6>
						</div>
						<div class="col-md-8 name-div">
							
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4">
							<h6 class="text-black" style="line-height: 50px;">견종 :</h6>
						</div>
						<div class="col-md-8 breed-div">
							
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4">
							<h6 class="text-black" style="line-height: 50px;">생일 :</h6>
						</div>
						<div class="col-md-8 birthday-div">
							
						</div>
					</div>
					
					<div class="row justify-content-end">
						<div class="col-md-6">
							<div class="row">
								<div class="col-md-12" style="text-align:right">
									<button class="btn" style="color: white; background-color: black;" id="editBtn">수정</button>
									<button class="btn" style="color: white; background-color: black;" id="delBtn">삭제</button>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				
				
			</div>
		</div>
	</div>
</div>

<div id="delModal" class="modal"
		style="text-align:center;position:fixed;display:none;justify-content:center;width:400px;height:400px;top:50%;left:40%;">
	<div class="modal-content">
		<p>등록을 취소하시겠습니까?</p>
		<div class="col-md-12" style="text-align:center">
			<button class="btn" style="color: white; background-color: black;" id="delYes">네</button>
			<button class="btn" style="color: white; background-color: black;" id="delNo">아뇨</button>
		</div>
		<input type="hidden" id="delDogNo">
	</div>
</div>



<div id="chooseModal" class="modal"
		style="text-align:center;position:fixed;display:none;justify-content:center;width:500px;height:700px;top:50%;left:40%;">
	<div class="modal-content">
		<p>대표로 설정할 강아지를 선택하세요</p>
		<form id="leaderForm">
			
		</form>
		<div class="col-md-12" style="text-align:center">
			<button class="btn" style="color: white; background-color: black;" id="setBtn">변경</button>
			<button class="btn close" style="color: white; background-color: black;" id="cancel">취소</button>
		</div>
	</div>
	
</div>


<script src="/yogidogi/js/myPage/memberDogInfo.js"></script>