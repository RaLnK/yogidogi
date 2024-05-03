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
	},
	myReplyList(successCall, errorCall) {
		fetch('/yogidogi/myReplyList.do')
			.then(result => result.json())
			.then(successCall)
			.catch(errorCall);
	}
}

document.addEventListener('DOMContentLoaded', function(e) {
	svc.myBoardList(0, function(result) {
		result.forEach(board => {
			let tr = $('<tr />');
			
			let number = $('<a />').attr('href', '/yogidogi/board.do?bno='+board.boardNo).append($('<h2 />').attr('class', 'h5 text-black').text(board.boardNo));
			tr.append($('<td />').attr('class', 'board-number').append(number));
			let boardTitle = board.boardTitle;
			if(boardTitle.length > 10){
				boardTitle = boardTitle.substr(0, 10) + '...';
			}
			let title = $('<a />').attr('href', '/yogidogi/board.do?bno='+board.boardNo).append($('<h2 />').attr('class', 'h5 text-black').text(boardTitle));
			tr.append($('<td />').attr('class', 'board-title').append(title));
			let boardContent = board.boardContent; 
			if(boardContent.length > 10){
				boardContent = boardContent.substr(0, 10) + '...';
			}
			tr.append($('<td />').attr('class', 'board-content').append($('<h2 />').attr('class', 'h5 text-black').text(boardContent)));
			tr.append($('<td />').attr('class', 'board-date').append($('<h2 />').attr('class', 'h5 text-black').text(board.boardDate)));
			
			$('tbody').eq(0).append(tr);
		});
	}, function(err) {
		console.log(err);
	});
	
	svc.myBoardList(2, function(result) {
		result.forEach(board => {
			let tr = $('<tr />');
			
			let number = $('<a />').attr('href', '/yogidogi/board.do?bno='+board.boardNo).append($('<h2 />').attr('class', 'h5 text-black').text(board.boardNo));
			tr.append($('<td />').attr('class', 'board-number').append(number));
			let boardTitle = board.boardTitle;
			if(boardTitle.length > 10){
				boardTitle = boardTitle.substr(0, 10) + '...';
			}
			let title = $('<a />').attr('href', '/yogidogi/board.do?bno='+board.boardNo).append($('<h2 />').attr('class', 'h5 text-black').text(board.boardTitle));
			tr.append($('<td />').attr('class', 'board-title').append(title));
			let boardContent = board.boardContent; 
			if(boardContent.length > 10){
				boardContent = boardContent.substr(0, 10) + '...';
			}
			tr.append($('<td />').attr('class', 'board-content').append($('<h2 />').attr('class', 'h5 text-black').text(boardContent)));
			tr.append($('<td />').attr('class', 'board-date').append($('<h2 />').attr('class', 'h5 text-black').text(board.boardDate)));
			
			$('tbody').eq(1).append(tr);
		});
	}, function(err) {
		console.log(err);
	});
	
	svc.myReplyList(function(result){
		result.forEach(reply =>{
			let tr = $('<tr />');
			
			let number = $('<a />').attr('href', '/yogidogi/board.do?bno='+reply.boardNo).append($('<h2 />').attr('class', 'h5 text-black').text(reply.replyNo));
			tr.append($('<td />').attr('class', 'reply-number').append(number));
			let boardTitle = reply.boardTitle;
			if(boardTitle.length > 10){
				boardTitle = boardTitle.substr(0, 10) + '...';
			}
			let title = $('<a />').attr('href', '/yogidogi/board.do?bno='+reply.boardNo).append($('<h2 />').attr('class', 'h5 text-black').text(boardTitle));
			tr.append($('<td />').attr('class', 'board-title').append(title));
			let replyContent = reply.replyContent; 
			if(replyContent.length > 10){
				replyContent = replyContent.substr(0, 10) + '...';
			}
			tr.append($('<td />').attr('class', 'reply-content').append($('<h2 />').attr('class', 'h5 text-black').text(replyContent)));
			tr.append($('<td />').attr('class', 'reply-date').append($('<h2 />').attr('class', 'h5 text-black').text(reply.replyDate)));
			
			$('tbody').eq(2).append(tr);
		});
	});
	
	$('#writeBtn').on('click', e=>{
		location.href = '/yogidogi/addBoardForm.do';
	});
	
	$('#askBtn').on('click', e=>{
		location.href = '/yogidogi/addQnABoardForm.do';
	})

});










