package club.super_coding.controller.board_post;

import club.super_coding.dto.BoardPostDto;
import club.super_coding.entity.BoardPost;
import club.super_coding.service.BoardPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/club/board")
//@CrossOrigin(origins = "http://localhost:5174/")
public class BoardPostController {

    private final BoardPostService boardPostService;

    @GetMapping("/{boardId}")
    public List<BoardPost> getPosts(@PathVariable Integer boardId) {
        System.out.println("boardId = " + boardId);
        List<BoardPost> posts = boardPostService.getPosts(boardId);
        System.out.println("posts = " + posts);
        return posts;
    }

    @PostMapping
    public String createPost(@RequestBody BoardPostDto boardPost) {
        System.out.println("boardPost = " + boardPost);
        System.out.println("boardPostB = " + boardPost.getBoardId());
        System.out.println("boardPostM = " + boardPost.getMemberId());
        System.out.println("boardPostC = " + boardPost.getContents());
        System.out.println("boardPostT = " + boardPost.getTitle());
        boardPostService.createPost(boardPost);
        return "suc";
    }
}




