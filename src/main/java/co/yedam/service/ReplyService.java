package co.yedam.service;

import java.util.List;

import co.yedam.vo.BoardVO;
import co.yedam.vo.PageVO;
import co.yedam.vo.ReplyVO;

public interface ReplyService {

	List<ReplyVO> replyList(int bno);
	public boolean addReply(ReplyVO rvo);
	public boolean removeReply(int rno);
	boolean updateReply(ReplyVO rvo);
}
