/*
 * reply.js
 */

function reList(){
	
	 $.get('/yogidogi/replyList.do?bno='+bno,function(result){
		  console.log(result);
		  $('#example tbody').empty();
		  //let deleteBtn ="";
		 // let replyer = $('#example tbody tr').find("td:eq(2)").text()
		 // console.log($('#example tbody tr').find("td:eq(2)").text())
		 // if(mid == replyer  ){
		//	  deleteBtn=$('<input type="button" class="delBtn" value="삭제">')
		 // } 
		  
		  result.forEach(reply=>{
			  $('<tr/>').append($('<td/>').text(reply.replyNo),
			  			$('<td/>').text(reply.replyContent),
			  			$('<td/>').text(reply.memberId),
			  			$('<td/>').text(reply.replyDate),			  		
				  		//$('<td/>').append(deleteBtn)
				  		$('<td/>').append($('<input type="button" class="delBtn btn" value="삭제">')),
				  		$('<td/>').append($('<input type="button" class="upBtn btn" value="수정">'))
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
	 .catch(err => console.error(err));
	 })
	 //end of addReply
	 
	 
	 
	  //댓글 삭제
	 $('#example tbody').on("click", ".delBtn" ,function(e){
		 
		  if(confirm("삭제하시겠습니까?")){
			let rno =$(e.target).closest("tr").find("td:eq(0)").text();
			 fetch('delReply.do?rno=' + rno)
			 .then(result=>result.json())
			 .then(result=>{
				
			 })
			 .catch(err=> console.log(err))
				
					 alert("댓글이 정상적으로 삭제되었습니다.")
					 reList();
			
			}else{
				 alert("댓글이 삭제되지 않았습니다.")
			}
	 })//end of removeReply
	 
	 //댓글 수정
	 $('#example tbody').on("click", ".upBtn",function(e){
		 
		 let rno =$(e.target).closest("tr").find("td:eq(0)").text(); 
		 let rContent =$(e.target).closest("tr").find("td:eq(1)").text(); 
		 console.log(rContent)
		 fetch('updateReply.do?rno='+rno + '&replyContent='+ rContent)
		 .then(result=>result.json())
		 .then(result=>{
		 	$(e.target).closest("tr").attr('display','hidden').append
		 	$('<tr/>').append($('<td/>').append($('<input type="text" value="rContent">'))
		 			  .append($($('<input type="button" class="upBtn btn" value="수정완료">'))))
		 
		 })
		 
	 })
	
 })