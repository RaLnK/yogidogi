<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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
					<h2 class="h3 mb-3 text-black">세부 정보</h2>
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
						<div class="form-group row">
							<div class="col-md-12">
								<label for="c_address" class="text-black">주소 <span
									class="text-danger">*</span></label> <input type="text"
									class="form-control" id="c_address" name="c_address"
									placeholder="Street address">
							</div>
						</div>
						<div class="form-group row">
							<div class="col-md-12">
								<label for="c_address" class="text-black">상세주소 <span
									class="text-danger">*</span></label> <input type="text"
									class="form-control" id="c_address" name="c_address"
									placeholder="Street address">
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
				<div class="col-md-6">
					<div class="row mb-5">
						<div class="col-md-12">
							<h2 class="h3 mb-3 text-black">포인트</h2>
							<div class="p-3 p-lg-5 border bg-white">
								<label for="c_code" class="text-black mb-3">사용할 포인트를
									입력하세요.</label>
								<div class="input-group w-75 couponcode-wrap">
									<input type="text" class="form-control me-2" id="c_code"
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
							<h2 class="h3 mb-3 text-black">나의 주문</h2>
							<div class="p-3 p-lg-5 border bg-white">
								<table class="table site-block-order-table mb-5">
									<thead>
										<th>선택한 상품</th>
										<th>총 합</th>
									</thead>
									<tbody>
										<tr>
											<td class="text-black font-weight-bold"><strong></strong></td>
											<td class="text-black"></td>
										</tr>
										<tr>
											<td>Top Up T-Shirt <strong class="mx-2">x</strong> 1
											</td>
											<td>$250.00</td>
										</tr>
										<tr>
											<td>Polo Shirt <strong class="mx-2">x</strong> 1
											</td>
											<td>$100.00</td>
										</tr>
										<tr>
											<td class="text-black font-weight-bold"><strong></strong></td>
											<td class="text-black"></td>
										</tr>
										<tr>
											<td class="text-black font-weight-bold"><strong>주문
													금액</strong></td>
											<td class="text-black">$350.00</td>
										</tr>
										<tr>
											<td class="text-black font-weight-bold"><strong>결제
													금액</strong></td>
											<td class="text-black font-weight-bold"><strong>$350.00</strong></td>
										</tr>
									</tbody>
								</table>
								<div class="form-group">
									<button class="btn btn-black btn-lg py-3 btn-block"
										onclick="window.location='thankyou.html'">Place Order</button>
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
