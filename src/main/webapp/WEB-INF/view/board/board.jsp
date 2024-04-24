<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 

<style>
.btn {
    font-weight: 600;
    font-size: 12px;
    padding: 5px 15px;
    margin-top:20px;
    margin-bottom:20px;
    border-radius: 30px;
    color: #ffffff;
    background: #2f2f2f;
    border-color: #2f2f2f;
}
h4{
	margin:15px;
	font-weight:600;
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
			<button type="submit" align="center" class="btn" >글 수정하기</button>
			<button type="button" align="center" class="btn" >글 삭제</button>
		</td>
	</tr>

</table>

 <script src="js/boardjs/board.js"></script> 