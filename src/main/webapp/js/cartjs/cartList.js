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








//   makeTotal();
//   removeCartEvent();
//   btnEvent();
//   modifyCartEvent();
//   allCheckboxEvent();
//   selCheckboxEvent();
//   orderBtnEvent();

