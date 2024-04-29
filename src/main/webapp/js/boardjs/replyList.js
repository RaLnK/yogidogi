/**
 * replyList.js
 */

 document.addEventListener('DOMContentLoaded',function(e){
	 
	 //댓글 목록 출력(본댓글)
	 
	 $.get('/yogidogi/replyList.do?bno='+bno,function(result){
		  console.log(result);
		  
		  result.forEach(reply=>{
			  $('<tr/>').append($('<td/>').text(reply.replyNo),
			  			$('<td/>').text(reply.replyContent),
			  			$('<td/>').text(reply.memberId),
			  			$('<td/>').text(reply.replyDate)
			  			).appendTo($('thead'))
			  			
		  })
	 })
 })