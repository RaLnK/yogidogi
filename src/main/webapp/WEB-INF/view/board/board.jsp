<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 

<style>
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
		<br/><span><c:out value="${bno.boardContent }"/></span></td>
	</tr>
	<tr>
		<td colspan="4">
			<button type="submit" align="center" class="btn" ${memberNo != bno.memberNo ? 'hidden' : '' } > <a href="updateBoardForm.do?bno=${bno.boardNo }">글 수정하기</a></button>
			<button type="button" align="center" class="btn" id="delBtn" ${memberNo != bno.memberNo ? 'hidden' : '' } >삭제</button>
			<button type="button" align="center" class="btn" ><a href="boardList.do">뒤로가기</a></button>
		</td>
	</tr>

</table>

<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>댓글번호</th>
                <th>댓글내용</th>
                <th>작성자</th>
                <th>작성일시</th>
              
            </tr>
        </thead>

    </table>
    <div class="header" align="left" >
		<input class="col-sm-5" id="reply">
		<button class="col-sm-1" id="addReply" on>댓글등록</button>
	</div>
    <p><button id="deleteBtn">댓글 삭제</button></p>
<script>
let bno="${bno.boardNo }";
let mid="${memberId}";

</script>

 <script src="js/boardjs/board.js"></script> 
  <script src="js/boardjs/replyList.js"></script> 