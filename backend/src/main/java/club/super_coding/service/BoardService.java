package club.super_coding.service;

import club.super_coding.entity.Board;
import club.super_coding.repository.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@Service
public class BoardService {

    @Autowired
    BoardRepository boardRepository;

    // 동아리별 전체 게시판 출력
    public List<Board> AllBoardList(int clubId) {
        return boardRepository.findAllByClubId(clubId);

    }

    // 해당 동아리 게시판 작성
    public Board postBaord(Board boardId, Board board) {
//        return boardRepository.save(boardId, board);
        return null;
    }


}
