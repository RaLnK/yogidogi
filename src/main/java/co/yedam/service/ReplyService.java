package co.yedam.service;

import java.util.List;

import co.yedam.vo.PageVO;
import co.yedam.vo.ReplyVO;

public interface ReplyService {

	List<ReplyVO> replyList(PageVO pg);

}
