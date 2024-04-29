/**

 * cartList.do

 */
const svc = {
    cartListAjax(successCall, errorCall) {
        fetch('/yogidogi/cartListJson.do')
            .then(result => result.json())
            .then(successCall)
            .catch(errorCall);
    },
    cartListDel(cno, successCall, errorCall) {
        fetch('/yogidogi/cartListDel.do',{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'cno=' + cno
		})
            .then(result => result.json())
            .then(successCall)
            .catch(errorCall);
    },
    makeTotal(successCall, errorCall) {
        fetch("getTotal.do")
            .then(result => result.json())
            .then(successCall)
            .catch(errorCall);
    }
}
// cartList 
document.addEventListener('DOMContentLoaded', function(e) {
  svc.cartListAjax(function(result) {
    result.forEach(product => {
      let tr = $('<tr />');
      let src = '/yogidogi/images/';
      switch (product.category) {
        case 0: src += ('기타잡화/' + product.productImg); break;
        case 1: src += ('사료간식/' + product.productImg); break;
        case 2: src += ('위생배변/' + product.productImg); break;
        case 3: src += ('의류/' + product.productImg); break;
        case 4: src += ('장난감/' + product.productImg); break;
        case 5: src += ('집/' + product.productImg); break;
        default: src = '';
      }
      tr.append($('<td />').append($('<img />').attr({ 'src': src, 'class': 'img-fluid', 'alt': 'Image' })));
      tr.append($('<td />').append($('<h2 />').attr('class', 'h5 text-black').text(product.productName)));
      tr.append($('<td />').attr('class', 'product-price').text((product.productPrice) + "원"));
      
      let quantityContainer = $('<div />').addClass('input-group mb-3 d-flex align-items-center quantity-container').css('max-width', '120px');
      let decreaseButton = $('<button />').addClass('btn btn-outline-black btn-minus decrease').attr('type', 'button').text('−');
      let quantityInput = $('<input />').addClass('form-control text-center quantity-amount').attr({ 'type': 'text', 'id': 'qty', 'placeholder': '', 'aria-label': 'Example text with button addon', 'aria-describedby': 'button-addon1', 'data-min': '1', 'data-max': '100' }).val(product.quantity);
      let increaseButton = $('<button />').addClass('btn btn-outline-black btn-plus increase').attr('type', 'button').text('+');
      quantityContainer.append($('<div />').addClass('input-group-prepend').append(decreaseButton),
      quantityInput,$('<div />').addClass('input-group-append').append(increaseButton));
      tr.append($('<td />').append(quantityContainer));
      let productTotalPrice = product.productPrice * product.quantity;
      tr.append($('<td />').attr('class', 'product-totalprice').text((productTotalPrice) + "원"));
      let delBtn = $('<button />', { type: 'button', id: 'delBtn' + product.cartNo }).text('X');
      delBtn.on('click', e => {
        svc.cartListDel(product.cartNo, function(result) {
          if (result.retCode == 'Success') {
            $('#delBtn' + product.cartNo).parent().parent().remove();
            alert('삭제했습니다');
          } else {
            alert('실패했습니다');
          }
        }, function(err) {
          console.log(err);
        });
      });
      tr.append($('<td />').append(delBtn));
      $('tbody').eq(0).append(tr);
    });
  }, function(err) {
    console.log(err);
  });
});
$(document).on('click', '.btn-plus', function() {
  let quantityInput = $(this).parent().parent().find('.quantity-amount');
  let currentQuantity = parseInt(quantityInput.val());
  let maxQuantity = parseInt(quantityInput.data('max'));
  if (currentQuantity < maxQuantity) {
    quantityInput.val(currentQuantity + 1);
    updateTotalPrice($(this));
  }
});
$(document).on('click', '.btn-minus', function() {
  let quantityInput = $(this).parent().parent().find('.quantity-amount');
  let currentQuantity = parseInt(quantityInput.val());
  let minQuantity = parseInt(quantityInput.data('min'));
  if (currentQuantity > minQuantity) {
    quantityInput.val(currentQuantity - 1);
    updateTotalPrice($(this));
  }
});
function updateTotalPrice(button) {
  let quantityInput = button.parent().parent().find('.quantity-amount');
  let currentQuantity = parseInt(quantityInput.val());
  let productPrice = parseInt(quantityInput.closest('tr').find('.product-price').text().replace('원', ''));
  let totalPriceCell = quantityInput.closest('tr').find('.product-totalprice');
  totalPriceCell.text((productPrice * currentQuantity) + '원');
}










//   makeTotal();
//   removeCartEvent();
//   modifyCartEvent();
//   orderBtnEvent();

