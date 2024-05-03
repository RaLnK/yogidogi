/**
 * boardList.js
 */


 document.addEventListener('DOMContentLoaded',function(e){
	 $('.nav-item').removeClass('active');
	 $('.board').addClass('active');
	 selectOption()
	 boardList(1) 
 })
 
 $('select').click(function(){
	 selectOption()
 })

 function selectOption(){
	let selectOption = $('select option:selected')
	
	$('select option.active').removeClass('active');
	
	selectOption.addClass('active');	 
 }
 
 function movepage(page){
	event.preventDefault(); // 기본 동작인 페이지 이동 방지
	boardList(page);
}

 function boardList(page){
	 	 // 게시글 목록 출력
	 $.get('/yogidogi/AjaxBoardList.do?page='+page,function(result){
		 console.log(result);
			$('.boardList').empty();
		//목록출력
		 result.list.forEach(board=>{
	
				 
			 let temp = $('#boardclone').find(".board").clone()
			 //temp.css('display','block');
			 let image ='강아지4.png'
			 if(board.boardImg != null){
				 image = board.boardImg
			 }
			 temp.find('.imgclick').attr('href','board.do?bno='+board.boardNo);
			 temp.find('.title').attr('href','board.do?bno='+board.boardNo);
			 temp.find('.boardImg').attr('src','./images/' + image  );	
			 if(board.boardCategory == 1){
				  temp.find('.title').text('※[공지사항]' + board.boardTitle); 
			 }else{
				 temp.find('.title').text(board.boardTitle);				 
			 }					 
			 temp.find('.writer').text('작성자 ' + board.memberId);
			 temp.find('.date').text('작성일시 ' + board.boardDate);
			 temp.appendTo('.boardList')
		 
		 
	 })
	 
		 console.log(mid)
	 $('#addBtn').click(function(e){
		 if(!mid){
			 alert("로그인하세요");
			 location.href="loginForm.do"
		 }else{
			 location.href="addBoardForm.do"
		 }
	 })
		 
	 //페이지 번호 출력
	 let paging = result.page;
	 let pagetag ="";
		if( paging.prev){
			pagetag = `<a href="#" onclick="movepage(${paging.startPage-1 })">&laquo;</a>`
		}
			
			for(let p=paging.startPage; p<=paging.endPage; p++){
				if(p == paging.page ){
					pagetag += `<a href="#"  class="active">${p }</a>`
					
				}else{
					pagetag += `<a href="#" onclick="movepage(${p })">${p }</a>`
				}
			}
			
			if(paging.next){
				pagetag += `<a href="#" onclick="movepage(${paging.endPage+1 })">&raquo;</a>`
			}
			
			$('.paging').attr('class','pagination').html(pagetag)
		 })
 }