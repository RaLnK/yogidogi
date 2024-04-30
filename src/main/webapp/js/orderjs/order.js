/**
 * orderList.do
 */
const svc = {
	orderListAjson(successCall, errorCall) {
		fetch('/yogidogi/orderList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}