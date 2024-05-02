<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
.btnalign{
	 text-align: right;
}

.menu{
	width:150px;
	height:40px;
	font-size:20px;
}
</style>


<div class="offcanvas-body justify-content-between">
            <select class="filter-categories border-0 mb-0 me-5 menu" onchange="if(this.value) location.href=(this.value)">
              <option>🐕‍🦺개시판🐕‍🦺</option>
              <option id="free" value="boardList.do">자유 🐕‍🦺시판</option>
              <option id="notice" value="noticeBoardList.do">공지 🐕‍🦺시판</option>
            </select>
</div>


<div class="blog-section p-5">
	<div class=btnalign>
		<button type="submit" class="btn" ${memberAuthority != 1 ? 'hidden' : '' }>
		<a href="/yogidogi/addNoticeBoardForm.do">글쓰기</a>
		</button>
	</div>
<div id="boardclone" style="display:none">
	
	<div class="board col-12 col-sm-6 col-md-4 mb-5">
		<div class="post-entry">
			<a href="#" class="post-thumbnail imgclick"><img src="images/post-1.jpg" alt="Image" class="img-fluid boardImg" ></a>
				<div class="post-content-entry"> 
					<h3><a href="#" class="title">First Time Home Owner Ideas</a></h3> 
					<div class="meta">
						<span class="writer">by Kristin Watson</span>
						<br/>
					    <span class="date">on Dec 19, 2021</span>
					</div>
				</div>
		</div>
	</div>
		
</div>		
		
	<div class="container ">
		<div class="row boardList">
		
		</div>		
	</div>
</div>

<script src="js/boardjs/nbList.js"></script>