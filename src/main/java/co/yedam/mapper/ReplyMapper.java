package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.PageVO;
import co.yedam.vo.ReplyVO;

public interface ReplyMapper {

	List<ReplyVO> replyList(PageVO pg);

}
