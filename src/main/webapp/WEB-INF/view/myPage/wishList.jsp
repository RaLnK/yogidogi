<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<div class="untree_co-section" style="padding-top: 2rem;">
	<div class="container">
	<h2 class="h3 mb-3 text-black">내 찜 목록</h2>
		<div class="row col-md-12">
			<div class="site-blocks-table">
				<table class="table">
					<thead>
						<tr>
							<th class="product-thumbnail" colspan="2">상품</th>
							<th class="product-price">가격</th>
							<th class="product-add">장바구니에 담기</th>
							<th class="product-remove">목록에서 제거</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="product-thumbnail">
								<img src="images/product-1.png" alt="Image" class="img-fluid">
							</td>
							<td class="product-name">
								<h4 class="h5 text-black"></h4>
							</td>
							<td>$49.00</td>
							<td><button type="button" style="color:white;background-color:black;" id="addBtn">추가</button></td>
							<td><button type="button" style="color:white;background-color:black;" id="delBtn">삭제</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>



<script src="/yogidogi/js/myPage/wishList.js"></script>