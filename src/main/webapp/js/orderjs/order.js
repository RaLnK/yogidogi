/**
 * orderList.do
 */
const svc = {
	orderListJson(successCall, errorCall) {
		fetch('/yogidogi/orderListJson.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	},
	orderView(successCall, errorCall) {
		fetch('/yogidogi/orderView.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);

	}
}



document.addEventListener('DOMContentLoaded', function(e) {
	svc.orderView(function(result) {
		result.forEach(product => {
			let table = $('<table></table>');
			let tbody = $('<tbody></tbody>');

			// 첫 번째 행 공백
			let row = $('<tr></tr>');
			row.append('<td class="text-black font-weight-bold"><strong></strong></td>');
			row.append('<td class="text-black"></td>');
			tbody.append(row);

			// 두 번째 행
			row = $('<tr></tr>');
			row.append($('<td>').text(product.productName).append($('<strong/>').text('x').addClass('mx-2')).append($('<td/>').text(product.quantity)));
			row.append($('<td/>').append.text(product.productPrice));
			tbody.append(row);

			// 세 번째 행 공백
			row = $('<tr></tr>');
			row.append('<td class="text-black font-weight-bold"><strong></strong></td>');
			row.append('<td class="text-black"></td>');
			tbody.append(row);

			// 다섯 번째 행
			row = $('<tr></tr>');
			row.append('<td class="text-black font-weight-bold"><strong>주문 금액</strong></td>');
			row.append($('<td>').addClass('text-black').append($('<td/>').text(totalPrice)));
			tbody.append(row);

			// 여섯 번째 행
			row = $('<tr></tr>');
			row.append('<td class="text-black font-weight-bold"><strong>결제 금액</strong></td>');
			row.append('<td class="text-black font-weight-bold"><strong>$350.00</strong></td>');
			tbody.append(row);

			table.append(tbody);
			$('body').append(table);
		});
    }, function(err) {
        console.log(err);
    });
});
