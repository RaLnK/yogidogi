/*
 * reply.js
 */

function reList(){
	
	 $.get('/yogidogi/replyList.do?bno='+bno,function(result){
		  console.log(result);
		  $('#example tbody').empty();
		  
		  
		  result.forEach(reply=>{
			  let deleteBtn ="";
			  let updateBtn ="";
			 console.log(mid)
			  if(mid == reply.memberId  ){
				 console.log(reply.memberId )
				  
				  deleteBtn=$('<input type="button" class="delBtn btnn" value="삭제">')
				  updateBtn=$('<input type="button" class="upBtn btnn" value="수정">')
			
			  } 
			  $('<tr/>').attr('class','parentReply').append($('<td/>').text(reply.replyNo).css('display','none'),
			  			$('<td/>').text('-'),
			  			$('<td/>').text(reply.replyContent),
			  			$('<td/>').attr('class','replyer').text(reply.memberId),
			  			$('<td/>').text(reply.replyDate),			  		
				  		$('<td/>').attr('class','btnn').append(updateBtn),
				  		$('<td/>').attr('class','btnn').append(deleteBtn)
			  			).appendTo($('#example tbody'))
			  			
		  })

	 })//end of replyList
}

	
 document.addEventListener('DOMContentLoaded',function(e){
	 
	 //댓글 목록 출력(본댓글)
	reList()

	

	 
	 //댓글 등록
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
	 
	 //댓글 수정버튼 클릭
	 $('#example tbody').on("click", ".upBtn",function(e){
		 
		let tr=$(e.target).closest(".parentReply");
		let rContent=tr.find("td:eq(2)").text();
		//let upForm=$(e.target).closest('.openUpForm');
		
		//upForm.hide();
		tr.hide();
		tr.after($('<tr/>').attr('class','openUpForm').append($('<td/>').text(tr.find("td:eq(0)").text()).css('display','none')
									,$('<td/>').text('-')
									,$('<td/>').append($('<input type="text" class="upContent">').val(rContent))
									,$('<td/>').text('')
									,$('<td/>').text('')
		  							,$('<td/>').append($('<input type="button" class="upFinishBtn btnnn" value="수정완료">'))
		  							,$('<td/>').append($('<input type="button" class="backBtn btnnn" value="수정취소">'))));
		 
	 })//end of updateReplyForm
	 
	 //수정완료 버튼 클릭
	 $('#example tbody').on('click', '.upFinishBtn', function(e) {
	    let rno = $(e.target).closest('.openUpForm').find('td:eq(0)').text();
	    let con = $(e.target).closest('.openUpForm').find('.upContent').val();
	
	    fetch('updateReply.do?rno=' + rno + '&con=' + con)
	        .then(result => result.json())
	        .then(result => {
	            // 처리 완료 후 동작
	            $(e.target).closest('.openUpForm').prev('.parentReply').show();
	            $(e.target).closest('.openUpForm').remove();
	            reList()
	        })
	        .catch(err => console.error(err));
	});
	  //end of updateReply
	 
	 //수정취소 버튼 클릭
	 $('#example tbody').on('click', '.backBtn', function(e) {
	    let tr = $(e.target).closest('.openUpForm');
	    tr.prev('.parentReply').show();
	    tr.remove();
	});
	 //end of updateBack
	 
	 
	 //대댓글 리스트 
	 $('.repBtn').click(function(e){
		let orno =$(e.target).closest("tr").find("td:eq(0)").text(); 
		console.log($(e.target).closest("tr").find("td:eq(0)").text());
		
		$.get('/yogidogi/reReplyList.do?bno=' + bno + '&orno=' + orno, function(result){
			console.log(result)
			
		})
	})
	//end of reReply
	
 })