<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<form action="order.do">
		<div class="untree_co-section before-footer-section">
            <div class="container">
              <div class="row mb-5" id="cart">
                <form class="col-md-12" method="post">
                  <div class="site-blocks-table">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">상품이미지</th>
                          <th class="product-name">상품</th>
                          <th class="product-price">가격</th>
                          <th class="product-quantity">주문수량</th>
                          <th class="product-total">상품금액</th>
                          <th class="product-remove">삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="product-thumbnail">
                            <img src="images/product-1.png" alt="Image" class="img-fluid">
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black"></h2>
                          </td>
                          <td id = "product-price">49,000원</td>
                          <td>
                            <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                              <div class="input-group-prepend">
                                <button class="btn btn-outline-black decrease" type="button">&minus;</button>
                              </div>
                              <input type="text" class="form-control text-center quantity-amount" id="qty" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                              <div class="input-group-append">
                                <button class="btn btn-outline-black increase" type="button">&plus;</button>
                              </div>
                            </div>
        
                          </td>
                          <td>49,000원</td>
                          <td><a href="#" class="btn btn-black btn-sm">X</a></td>
                        </tr>
        
                        <tr>
                          <td class="product-thumbnail">
                            <img src="images/product-2.png" alt="Image" class="img-fluid">
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">Product 2</h2>
                          </td>
                          <td>49,000원</td>
                          <td>
							<div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
   								<div class="input-group-prepend">
        							<button class="btn btn-outline-black minusBtn" type="button">&minus;</button>
   								</div>
   								<input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
   								<div class="input-group-append">
        							<button class="btn btn-outline-black plusBtn" type="button">&plus;</button>
   								</div>
							</div>
                          </td>
                          <td>49,000원</td>
                          <td><a href="#" class="btn btn-black btn-sm btn-remove">X</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
        
              <div class="row">
                <div class="col-md-6">
                  <div class="row mb-5">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <button class="btn btn-black btn-sm btn-block">Update Cart</button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label class="text-black h4" for="coupon">Coupon</label>
                      <p>Enter your coupon code if you have one.</p>
                    </div>
                    <div class="col-md-8 mb-3 mb-md-0">
                      <input type="text" class="form-control py-3" id="coupon" placeholder="Coupon Code">
                    </div>
                    <div class="col-md-4">
                      <button class="btn btn-black">Apply Coupon</button>
                    </div>
                  </div> 
                </div>
                <div class="col-md-6 pl-5">
                  <div class="row justify-content-end">
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-12 text-right border-bottom mb-5">
                          <h3 class="text-black h4 text-uppercase">결제 내역</h3>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <span class="text-black">주문 가격</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">23,000원</strong>
                        </div>
                      </div>
                      <div class="row mb-5">
                        <div class="col-md-6">
                          <span class="text-black">결제 가격</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black">23,000원</strong>
                        </div>
                      </div>
        
                      <div class="row">
                        <div class="col-md-12">
                          <button class="btn btn-black btn-lg py-3 btn-block" type="submit">결제하기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</form>
<script src ="./js/cartjs/cartList.js"></script>