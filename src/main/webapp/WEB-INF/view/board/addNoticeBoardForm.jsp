<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
	<h3>공지 등록</h3>
	
	<form action = "/yogidogi/addNoticeBoard.do" method="post" enctype="multipart/form-data">
	<table class="table">
	<tr>
		<th>글제목</th>
		<td><input class="form-control" type="text" name="title"></td>
	</tr>
	<tr>
		<th>내용</th>
		<td><textarea class="form-control" name="content"></textarea></td>
	</tr>
	<tr>
		<th>이미지</th>
		<td><input class="form-control" type="file" name="myImg"></td>
	</tr>	
	<tr>
		<th>작성자</th>
		<td><input class="form-control" type="text" name="mno" ></td>
	</tr>
	<tr>
		<td colspan="2" align = "center"><input class="btn-primary" type = "submit" value="글등록"></td>
	</tr>
	</table>
	</form>