package club.super_coding.service;

import club.super_coding.entity.Board;
import club.super_coding.repository.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class BoardService {

    @Autowired
    BoardRepository boardRepository;

    // 동아리별 전체 게시글 출력
    public int AllBoardList(int club, int boardId) {

       return 1;
    }


}
