/**
 * boardList.js
 */

 console.log('start');
 
 document.addEventListener('DOMContentLoaded',function(e){
	 // 게시글 목록 출력
	 $.get('AjaxBoardList.do',function(result){
		 console.log(result);
		 
		 result.forEach(board=>{
			 let temp = $('#boardclone').find(".board").clone()
			 //temp.css('display','block');
			 let image ='기본이미지.jpg'
			 if(board.boardImg != null){
				 image = board.boardImg
			 }
			 
			 temp.find('.boardImg').attr('src','./images/' + image  );				
			 temp.find('.title').text(board.boardTitle);
			 temp.find('.writer').text('작성자' + board.memberNo);
			 temp.find('.date').text('작성일시' + board.boardDate);
			 temp.appendTo('.boardList')
			 
		 })
		 
	 })
	 
	 
	 
 })