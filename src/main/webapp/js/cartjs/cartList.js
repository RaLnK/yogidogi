/**
 * cartList.do
 */
const svc = {
	cartList(successCall, errorCall) {
		fetch("cartListJson.do")
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	makeTotal(successCall, errorCall){
			fetch("getTotal.do")
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}
document.addEventListener('DOMContentLoaded', function(e) {
    svc.cartList(function(cart) {
        let info = $('<img/>', { type: 'Img', name: 'productimg' }).val(product.productimg);
        $('#img-fluid').append(info);
        
        info = $('<h2>/', {name: 'productNm' }).val(product.productNm);
        $('#product-name').append(info);
        
        info = $('<td/>', {name: 'productprice' }).val(product.productPrice);
        $('#product-price').append(info);
        
        info = $('<input/>', { type: 'email', name: 'email' }).val(product.productimg);
        $('#qty').val(cart.qty);
        
        info = $('<input/>', { type: 'text', name: 'phone' }).val(product.productimg);
        $('#phone-div').append(info);
        
        info = $('<input/>', { type: 'number', name: 'point' }).val(product.productimg);
        $('#point-div').append(info);
        
    }, function(err) {
        console.log(err);
    })
});
                  /*   <tr>
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
                        </tr>*/







//   makeTotal();
//   removeCartEvent();
//   btnEvent();
//   modifyCartEvent();
//   allCheckboxEvent();
//   selCheckboxEvent();
//   orderBtnEvent();

