<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
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
textarea{
	height:200px;
}
</style>   
   
    
	<h3>글등록</h3>
	
	<form action = "/yogidogi/addBoard.do" method="post" enctype="multipart/form-data">
	<table class="table">
	<tr>
		<th>글제목</th>
		<td><input class="form-control" type="text" name="title"></td>
	</tr>
	<tr>
		<th>내용</th>
		<td><textarea class="form-control"  name="content"></textarea></td>
	</tr>
	<tr>
		<th>이미지</th>
		<td><input class="form-control" type="file" name="myImg"></td>
	</tr>	
	<tr>
		<th>작성자</th>
		<td><input class="form-control" type="text" value="${memberId }" readonly >
		<input class="form-control" type="hidden" name="mno" value="${memberNo }" readonly ></td>
	</tr>
	<tr>
		<td colspan="2" align = "center"><input class="btn" type = "submit" value="글등록" ></td>
	</tr>
	</table>
	</form>
