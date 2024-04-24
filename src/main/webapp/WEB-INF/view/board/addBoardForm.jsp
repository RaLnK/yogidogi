<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
	<h3>글등록</h3>
	
	<form action = "addBoard.do" method="post" enctype="multipart/form-data">
	<table class="table">
	<tr>
		<th>글제목</th>
		<td><input class="form-control" type="text" name="boardTitle"></td>
	</tr>
	<tr>
		<th>내용</th>
		<td><textarea class="form-control" name="boardContent"></textarea></td>
	</tr>
	<tr>
		<th>이미지</th>
		<td><input class="form-control" type="file" name="boardImg"></td>
	</tr>	
	<tr>
		<th>작성자</th>
		<td><input class="form-control" type="text" name="memberNo" ></td>
	</tr>
	<tr>
		<td colspan="2" align = "center"><input class="btn-primary" type = "submit" value="글등록"></td>
	</tr>
	</table>
	</form>
