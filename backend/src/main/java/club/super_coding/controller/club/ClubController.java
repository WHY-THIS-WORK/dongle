package club.super_coding.controller.club;

import club.super_coding.entity.Board;
import club.super_coding.entity.Club;
import club.super_coding.service.BoardService;
import club.super_coding.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RequestMapping("/club/")
@RestController
public class ClubController {
    @Autowired
    BoardService boardService;
    @Autowired
    ClubService clubService;// 동아리관련 서비스 DI

    //
/*    @GetMapping("/{clubid}")
    public List<Board> getClubBoardList(@PathVariable String clubid) {
        // 동아리별 게시글 불러오기
        int club_Id = Integer.parseInt(clubid);// 문자열 clubid를 숫자로 바꿈

        log.info("clubid"+clubid);
        List<Board> boards = boardService.AllBoardList(club_Id);
        log.info("boards" + boards.toString());
        if (boards == null) {
            return null;
        }
        return boards;
    }*/

/*    @PostMapping("/{clubid}")
    public int boardSubmit(@PathVariable(name = "clubid") int clubid, @RequestBody Board board) {
        // 동아리별 게시글 불러와서 게시글 신규작성
        return 1;
    }*/

    @GetMapping("/{clubid}")
    public Optional<Club> getMainOneClub(@PathVariable("clubid") int clubid) {
        // 동아리 상페페이지 화면으로 이동 GET /club/{clubId}
        return clubService.ClubOne(clubid);
    }
}
