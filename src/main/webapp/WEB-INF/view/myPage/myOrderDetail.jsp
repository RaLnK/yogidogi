<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<div class="untree_co-section" style="padding-top: 2rem;">
	<div class="container">
		<div class="row">
			<div class="col-md-10 mb-10 mb-md-0">
				<h2 class="h3 mb-3 text-black" style="text-align:center">주문 상세 내역</h2>
				
				<h4 class="h5 text-black">주문자 정보</h2>
				<div class="p-3 p-lg-5 col-md-12 border bg-white">
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">이름 :</strong>
						</div>
						<div class="col-md-8">
							<h6 class="text-black" style="line-height: 50px;">${orderVO.targetName }</h6>
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">수신지 주소 :</strong>
						</div>
						<div class="col-md-8">
							<h6 class="text-black" style="line-height: 50px;">${orderVO.orderAddr } ${orderVO.orderAddr2 }</h6>
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">전화번호 :</strong>
						</div>
						<div class="col-md-8">
							<h6 class="text-black" style="line-height: 50px;">${orderVO.targetPhone }</h6>
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">주문 요청사항 :</strong>
						</div>
						<div class="col-md-8">
							<h6 class="text-black" style="line-height: 50px;">${orderVO.orderReq }</h6>
						</div>
					</div>
					
				</div>
				
				
				<h4 class="h5 text-black">상품 및 결제 정보</h2>
				<div class="p-3 p-lg-5 col-md-12 border bg-white">
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">수신자 이름 :</strong>
						</div>
						<div class="col-md-8">
							
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">수신지 주소 :</strong>
						</div>
						<div class="col-md-8">
							
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">전화번호 :</strong>
						</div>
						<div class="col-md-8">
							
						</div>
					</div>
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">수신자 이름 :</strong>
						</div>
						<div class="col-md-8">
							
						</div>
					</div>
					
				</div>
				
				<div class="row justify-content-end" style="padding: 1rem;">
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-12" style="text-align:right">
								<button class="btn" style="color: white; background-color: black;" id="editBtn">주문 목록</button>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</div>












