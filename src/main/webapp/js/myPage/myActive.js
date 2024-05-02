/**
 * 
 */

const svc = {
	myBoardList(ctgr, successCall, errorCall) {
		fetch('/yogidogi/myBoardList.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'category=' + ctgr
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
	/*myOrderList(ctgr, successCall, errorCall) {
		fetch('/yogidogi/myOrderList.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'category=' + ctgr
		})
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}*/
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.myBoardList(0, function(result) {
		result.forEach(board => {
			
			let tr = $('<tr />');
			
			tr.append($('<td />').attr('class', 'board-number').append($('<h2 />').attr('class', 'h5 text-black').text(board.boardNo)));
			tr.append($('<td />').attr('class', 'board-title').append($('<h2 />').attr('class', 'h5 text-black').text(board.boardTitle)));
			tr.append($('<td />').attr('class', 'board-content').append($('<h2 />').attr('class', 'h5 text-black').text(board.boardContent)));
			tr.append($('<td />').attr('class', 'board-date').append($('<h2 />').attr('class', 'h5 text-black').text(board.boardDate)));
			
			$('tbody').eq(0).append(tr);
		});
	}, function(err) {
		console.log(err);
	});

});










