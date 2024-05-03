<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<link href="/yogidogi/css/orderDetail.css" rel="stylesheet" />

<div class="untree_co-section" style="padding-top: 2rem;">
	<div class="container">
		<div class="row">
			<div class="col-md-10 mb-10 mb-md-0">
				<h2 class="h3 mb-3 text-black" style="text-align:center">주문 상세 내역</h2>
				
				<h4 class="h5 text-black">주문자 정보</h2>
				<div class="p-3 p-lg-5 col-md-12 border bg-white">
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">주문 번호 :</strong>
						</div>
						<div class="col-md-8">
							<h6 class="text-black" style="line-height: 50px;">${orderVO.orderNo }</h6>
						</div>
					</div>
					
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
					
					<div class="form-group row" style="padding: 1rem;">
						<div class="col-md-4" style="text-align:center;">
							<strong class="text-black" style="line-height: 50px;">주문 진행 상황 :</strong>
						</div>
						<div class="col-md-8">
							<h6 class="text-black" style="line-height: 50px;">${orderVO.orderStatus }</h6>
						</div>
					</div>
					
				</div>
				
				
				<h4 class="h5 text-black">상품 및 결제 정보</h2>
				<div class="p-3 p-lg-5 col-md-12 border bg-white">
					<div class="row col-md-12">
						<div class="site-blocks-table">
							<table class="table">
								<thead>
									<tr>
										<th class="product-thumbnail" colspan="2">상품</th>
										<th class="product-quantity">수량</th>
										<th class="product-price">가격</th>
										<th class="product-review">리뷰</th>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
					</div>
					
					<div class="row justify-content-end">
	                    <div class="col-md-6">
	                      <div class="row">
		                      <div class="col-md-12 text-right border-bottom">
		                      	<h3 class="text-black h5" style="text-align:center">결제 정보</h3>
		                      </div>
	                      </div>
	                      <div class="row mb-3">
	                        <div class="col-md-6">
	                          <span class="text-black">총 상품 금액</span>
	                        </div>
	                        <div class="col-md-6 text-right">
	                          <strong class="text-black" id="sumPrice"></strong>
	                        </div>
	                      </div>
	                      <div class="row mb-3">
	                        <div class="col-md-6">
	                          <span class="text-black">사용한 포인트</span>
	                        </div>
	                        <div class="col-md-6 text-right">
	                          <strong class="text-black">${orderVO.orderPoint }</strong>
	                        </div>
	                      </div>
	                      
	                      <div class="row text-right border-top">
		                      	<div class="col-md-6">
		                          <span class="text-black">최종 결제 금액</span>
		                        </div>
		                        <div class="col-md-6 text-right">
		                          <strong class="text-black">${orderVO.orderPrice}</strong>
		                        </div>
	                      </div>
	                    </div>
	                </div>
					
					
				</div>
				
				<div class="row justify-content-end" style="padding: 1rem;">
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-12" style="text-align:right">
								<button class="btn" style="color: white; background-color: black;" id="backToShop">Shop</button>
								<button class="btn" style="color: white; background-color: black;" id="backToList">주문 목록</button>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</div>

<!-- 리뷰 버튼 -->
<div id = 'reviewBtn'>
	<button type="button" class="rmodal" data-toggle="modal"  data-target="#form"> 리뷰쓰기 </button> 
	<div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    	<div class="modal-dialog modal-dialog-centered" role="document">
        	<div class="modal-content">
            	<div class="text-right cross"> <i class="fa fa-times mr-2 exit"></i> </div>
                <h4>리뷰를 작성해주세요!</h4>
            	<div class="card-body text-center"> <img src="https://cdn-icons-png.flaticon.com/512/5783/5783307.png" height="100" width="100">
                	<div class="comment-box text-center">
                	<div class="rating"> <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label> </div>
                   <input class ="form-control myImg" type = "file" name ="myImg">
                	<div class="comment-area"> <textarea class="form-control reviewContent" placeholder="해당 상품은 어떠셨나요?" rows="4"></textarea> </div>
                    	<div class="text-center mt-4"> <button class="btn btn-success send px-5 send">리뷰 등록<i class="fa fa-long-arrow-right ml-1"></i></button></div>
            		</div>
        		</div>
    		</div>
		</div>
	</div>
</div>




<script> let ono = '${requestScope.orderVO.orderNo}'</script>
<script src="/yogidogi/js/myPage/myOrderDetail.js"></script>

