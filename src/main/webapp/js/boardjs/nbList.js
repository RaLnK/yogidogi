/**
 * nbList.js
 */

 console.log('start');
 
 document.addEventListener('DOMContentLoaded',function(e){
	 $('.nav-item').removeClass('active');
	 $('.board').addClass('active');

	 // 게시글 목록 출력
	 $.get('/yogidogi/ajaxNoticeBoardList.do',function(result){
		 console.log(result);

		 result.forEach(board=>{
	
				 
			 let temp = $('#boardclone').find(".board").clone()
			 //temp.css('display','block');
			 let image ='강아지4.png'
			 if(board.boardImg != null){
				 image = board.boardImg
			 }
			 temp.find('.imgclick').attr('href','board.do?bno='+board.boardNo);
			 temp.find('.title').attr('href','board.do?bno='+board.boardNo);
			 temp.find('.boardImg').attr('src','./images/' + image  );	
			 temp.find('.title').text('※[공지사항]' + board.boardTitle); 		 
			 temp.find('.writer').text('작성자 ' + board.memberId);
			 temp.find('.date').text('작성일시 ' + board.boardDate);
			 temp.appendTo('.boardList')
			 
			 
		 })
		 
	 })
	 
	 
	 
 })