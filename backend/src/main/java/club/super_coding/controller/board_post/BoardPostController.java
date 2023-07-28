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

    @GetMapping("/{boardId}/{postId}")
    public BoardPost getPost(@PathVariable Integer boardId, @PathVariable Integer postId) {
        System.out.println("boardId = " + boardId);
        System.out.println("postId = " + postId);
        BoardPost post = boardPostService.getPost(boardId, postId);
        System.out.println("post = " + post);
        return post;
    }

    @PostMapping("/{boardId}/{postId}")
    public BoardPost updatePost(@RequestBody BoardPostDto boardPost, @PathVariable Integer boardId, @PathVariable Integer postId) {
        // dto로 받는 걸로 바꾸고 values 보내서 받으면 될듯
        System.out.println("boardId = " + boardId);
        System.out.println("postId = " + postId);
        BoardPost post = boardPostService.updatePost(boardId, postId);
        System.out.println("post = " + post);
        return post;
    }
}




