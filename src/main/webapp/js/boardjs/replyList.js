/*
 * replyList.js
 */

function reList(){
	
	 $.get('/yogidogi/replyList.do?bno='+bno,function(result){
		  console.log(result);
		  $('#example tbody').empty();
		  result.forEach(reply=>{
			  $('<tr/>').append($('<td/>').text(reply.replyNo),
			  			$('<td/>').text(reply.replyContent),
			  			$('<td/>').text(reply.memberId),
			  			$('<td/>').text(reply.replyDate)
			  			).appendTo($('#example tbody'))
			  			
		  })
	 })//end of replyList
}

 document.addEventListener('DOMContentLoaded',function(e){
	 
	 //댓글 목록 출력(본댓글)
	reList()

	

	 
	 //리뷰 등록
	 $('#addReply').click(function(e){
		 let reply = document.querySelector('#reply').value;
			if(!mid){
				alert("로그인하세요");
				return;
			}
			if(!reply){
				alert("댓글을 입력하세요");
				return;
			}
		//ajax호출	
		 fetch('addReply.do',{
			method:'post',
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'bno=' + bno + '&replyContent=' + reply + '&memberId' + mid
		})
		.then(result=> result.json())
		.then(result=>{
			if(result.retCode == 'Success'){
				reList()
				alert("댓글이 정상적으로 등록되었습니다.");
			}else{
				alert("댓글이 정상적으로 등록되지 않았습니다.");
			}
			$('#reply').val(''); 
		})
	 })
	 .catch(err => console.error(err));
	 
 })