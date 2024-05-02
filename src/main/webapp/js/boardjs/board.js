/**
 * board.js
 */

 console.log('start');

	const svc = {
		//게시글 삭제
		removeBoard(bno=1, successCall, errorCall){
			fetch('delBoard.do?bno=' + bno)
			.then(result=>result.json())
			.then(result=>{
				if(result.retCode == 'Success'){
					successCall();
				}else{
					errorCall();
				}
			})
			.catch(err=> console.log(err))
		}
		
	}
	
 

	
document.addEventListener('DOMContentLoaded',function(e){ 
	 $('.nav-item').removeClass('active');
	 $('.board').addClass('active');
	//삭제버튼 이벤트
	$('#delBtn').click(function(e){
		if(confirm("삭제하시겠습니까?")){
			svc.removeBoard(bno, function(result){
				alert("삭제가 정상적으로 완료되었습니다.")
				location.href="boardList.do"
			})
		}else{
			alert("삭제가 완료되지 않았습니다.")
		}
	
	
	
	})
	
	

})