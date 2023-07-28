package club.super_coding.controller.board;

import club.super_coding.entity.Board;
import club.super_coding.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequestMapping
@RestController("/club")
public class BoardController {
    @Autowired
    BoardService boardService;


    // 게시글 리스트 불러오는 기능 만들어야함 GET /club/1/1
/*    @GetMapping("/{clubId}/{boardId}")
    public List<Board> getClubBoardList(@PathVariable("clubId") int clubid, @PathVariable("boardId") int boardId) {
        List<Board> boards = boardService.AllBoardList();
        log.info("boards" + boards.toString());
        if (boards == null) {
            return null;
        }
        return boards;
    }*/

    // 동아리별 게시글 불러와서 게시글 id를 통해 맞는 게시글 신규작성
    @PostMapping("/{clubid}")
    public int boardSubmit(@RequestBody Board board) {

        return 1;
    }

}
