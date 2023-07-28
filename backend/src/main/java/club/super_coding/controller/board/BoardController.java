package club.super_coding.controller.board;


import club.super_coding.entity.Board;
import club.super_coding.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    BoardService boardService;


    // 게시글 리스트 불러오는 기능 만들어야함 GET /club/1/1
    @GetMapping("/{clubId}")
    public List<Board> getClubBoardList(@PathVariable Integer clubId) {
        List<Board> boards = boardService.AllBoardList(clubId);
        System.out.println("boards = " + boards);
        return boards;
    }

    // 동아리별 게시글 불러와서 게시글 id를 통해 맞는 게시글 신규작성
    @PostMapping("/{culbId}")
    public void boardSubmit(@PathVariable Integer culbId, @RequestBody Board board) {
// 클럽아이디 받아서 게시글에 포함시켜야함
//        return boardService.postBaord(board);

    }

}
