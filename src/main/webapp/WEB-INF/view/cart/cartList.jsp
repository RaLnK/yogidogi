<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
             <form action="productList.do">
              <div class="row">
                <div class="col-md-6">
                  <div class="row mb-5">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <button class="btn btn-outline-black btn-sm btn-block">계속 쇼핑하기</button>
                    </div>
                  </div>
                </div>
                </div>
              </form>
                <div class="col-md-6 pl-5">
                  <div class="row justify-content-end">
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-12 text-right border-bottom mb-5">
                          <h3 class="text-black h4 text-uppercase" style="text-align:center">총 상품 금액</h3>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <span class="text-black">상품 금액</span>
                        </div>
                        <div class="col-md-6 text-right">
                          <strong class="text-black" id="productprice">23,000원</strong>
                        </div>
                      </div>
                     <form action="orderList.do">
                      <div class="row">
                        <div class="col-md-12"style="text-align:right">
                          <button class="btn btn-black btn-lg py-3 btn-block">결제하기</button>
                        </div>
                      </div>
                     </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<script>
</script>
<script src ="/yogidogi/js/cartjs/cartList.js"></script>