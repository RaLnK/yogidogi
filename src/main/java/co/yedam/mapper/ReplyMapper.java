package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.PageVO;
import co.yedam.vo.ReplyVO;

public interface ReplyMapper {

	List<ReplyVO> replyList(int bno);

	public int addReply(ReplyVO rvo);

	public int removeReply(int rno);

	public int updateReply(ReplyVO rvo);

}
