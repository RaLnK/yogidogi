package co.yedam.common;

public class PageDTO {
	
	private int page; //현재 페이지
	private int startPage, endPage; // ex.1000p가 있다고 가정하면 x개씩 보여주기 위한 필드
	private boolean prev, next; // 이전, 이후 페이지 여부 확인 필드
	
	//생성자
	public PageDTO(int page, int totalCnt) { // ex. 123건 => 24.3
		this.page = page;
		int realEnd = (int) Math.ceil(totalCnt / 15.0);
		
		this.endPage = (int)Math.ceil(page / 5.0) * 5;
		this.startPage = this.endPage - 4;
		
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
}


