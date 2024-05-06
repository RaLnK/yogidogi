<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<form>
	<div class="untree_co-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-12">
					<div class="border p-4 rounded" role="alert">
						<a href="/yogidogi/loginForm.do">로그인 하러가기</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 mb-5 mb-md-0">
					<h2 class="h3 mb-3 text-black">주문자 정보</h2>
					<div class="p-3 p-lg-5 border bg-white">
						<div class="form-group row">
							<div class="col-md-6">
								<label for="c_fname" class="text-black">받는 사람(이름) <span
									class="text-danger">*</span></label> <input type="text"
									class="form-control" id="c_fname" name="c_fname">
							</div>
							<div class="col-md-6">
								<label for="c_phone" class="text-black">휴대폰 번호 <span
									class="text-danger">*</span></label> <input type="text"
									class="form-control" id="c_phone" name="c_phone"
									placeholder="Phone Number">
							</div>
						</div>
						<div>
						<div class="form-group row">
							<div class="col-md-12">
								<label for="c_address" class="text-black">주소 <span
									class="text-danger">*</span></label> <input type="text"
									class="form-control" id="c_address" name="c_address"
									placeholder="Street address" onclick="execution_daum_address()">
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-12">
								<label for="c_address" class="text-black">상세주소 <span
									class="text-danger">*</span></label> <input type="text"
									class="form-control" id="c_address2" name="c_address2"
									placeholder="Street address2">
							</div>
						</div>
						</div>
						<div class="form-group mt-3"></div>
						<div class="form-group row"></div>
						<div class="form-group row mb-5"></div>
						<div class="form-group">
							<div class="collapse" id="create_an_account"></div>
						</div>
						<div class="form-group">
							<label for="c_order_notes" class="text-black"
								style="display: block; text-align: center;">주문 요청사항</label>
							<textarea name="c_order_notes" id="c_order_notes" cols="30"
								rows="5" class="form-control"
								placeholder="Write your notes here..."></textarea>
						</div>
					</div>
				</div>
				<div class="col-md-6" id="orderForm">
					<div class="row mb-5">
						<div class="col-md-12">
							<h2 class="h3 mb-3 text-black">포인트</h2>
							<div class="p-3 p-lg-5 border bg-white">
								<label for="c_code" class="text-black mb-3">사용할 포인트를
									입력하세요.</label>
								<div class="input-group w-75 couponcode-wrap">
									<input type="text" class="form-control me-2" id="point"
										placeholder="포인트" aria-label="Coupon Code"
										aria-describedby="button-addon2">
									<div class="input-group-append">
										<button class="btn btn-black btn-sm" type="button"
											id="button-addon2">사용</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-5">
						<div class="col-md-12">
							<h2 class="h3 mb-3 text-black" id="cartList">나의 주문</h2>
							<div class="p-3 p-lg-5 border bg-white">
								<table class="table site-block-order-table mb-5">
									<thead>
										<tr>
											<th>선택한 상품</th>
											<th>총 합</th>
										</tr>
									</thead>
									<tbody id="orderDetailsBody"></tbody>
								</table>
								<div class="form-group">
									<button id="orderButton" class="btn btn-black btn-lg py-3 btn-block" onclick="requestPay()">주문하기</button>
									 <img src="./images/kakaopay.svg" onclick="requestPay()" style="margin: auto; background-image: url('./images/kakaopay.svg'); background-size: contain; background-repeat: no-repeat; width: 100px; height: 50px;" alt="카카오페이">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- </form> -->
		</div>
	</div>
</form>
<script src="/yogidogi/js/orderjs/order.js"></script>
