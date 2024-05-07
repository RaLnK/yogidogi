<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 

<style>
.parentReply{
	height:50px;

}
.btn {
    font-weight: 600;
    font-size: 12px;
    padding: 5px 15px;
    margin:20px 3px;
    border-radius: 30px;
    color: #ffffff;
    background: #2f2f2f;
    border-color: #2f2f2f;
   
}
.btnn{
    background: transparent;
	border:none;
    font-size:10px;
    margin:3px;
    width:40px;
}
.btnnn{
    background: transparent;
	border:none;
    font-size:10px;
    width:60px;
}
h4{
	margin:15px;
	font-weight:600;
}
#addReply{
	margin:10px;
}
#deleteBtn{
	margin:5px;
}
.backBtn{
	width:52px;
}
.upContent{
	width:540px;
	height:30px;
}

</style>

<h4><c:out value="${bno.boardTitle }"/></h4>

<table class="table">
	<tr>
		<th>글번호</th><td><c:out value="${bno.boardNo }"/></td>
		<th>작성자</th><td><c:out value="${bno.memberId }"/></td>
		<th>작성일시</th><td><c:out value="${bno.boardDate }"/></td>
	</tr>

	<tr>
		<td colspan="6"><img src="images/${bno.boardImg }" onerror="this.style.display='none'" style="width:500px" />
		<br/><p id="boardContent"><c:out value="${bno.boardContent }"/></p></td>
	</tr>
	<tr>
		<td colspan="4">
			<button type="button" align="center" class="btn" ${memberNo != bno.memberNo ? 'hidden' : '' } > <a href="updateBoardForm.do?bno=${bno.boardNo }">글 수정하기</a></button>
			<button type="button" align="center" class="btn" id="delBtn" ${memberNo != bno.memberNo ? 'hidden' : '' } >삭제</button>
			<a href="boardList.do"  align="center" class="btn" >뒤로가기</a>
		</td>
	</tr>

</table>

<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
            	<th> </th>
                <th>댓글내용</th>
                <th>작성자</th>
                <th>작성일시</th>
              
            </tr>
        </thead>
		<tbody>
		</tbody>
    </table>
    <div class="header" align="left" >
		<input class="col-sm-5" id="reply">
		<button class="col-sm-1 btn" id="addReply" >댓글등록</button>
	</div>
  
<script>
let bno="${bno.boardNo }";
let mid="${memberId}";
let mno="${memberNo}";

var text = document.querySelector('#boardContent');
var result = text.innerHTML.replace(/(\n|\r\n)/g, '<br>');
text.innerHTML = result;
</script>

 <script src="js/boardjs/board.js"></script> 
  <script src="js/boardjs/reply.js"></script> 