<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>     
<%@page import="co.yedam.vo.BoardVO"%>
    
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

</style>    
    
    
    

<h3>게시글 수정</h3>
	
	<form action = "updateBoard.do" method="post" enctype="multipart/form-data">
		<input type="hidden" name="boardNo" value="${bvo.boardNo }">
	
	
	<table class="table">
	<tr>
		<th>글제목</th>
		<td><input class="form-control" type="text" name="boardTitle" value="${bvo.boardTitle }"></td>
	</tr>
	<tr>
		<th>내용</th>
		<td><textarea class="form-control" name="boardContent">${bvo.boardContent }</textarea></td>
	</tr>
	<tr>
		<th>이미지</th>
		<td><input class="form-control" type="file" name="boardImg"></td>
	</tr>	
	<tr>
		<th>작성자</th>
		<td><input class="form-control" type="text" name="memberId" value="${bvo.memberId }" disabled></td>
	</tr>
	<tr>
		<td colspan="2" align = "center"><input class="btn" type = "submit" value="수정완료"></td>
	</tr>
	</table>
	</form>