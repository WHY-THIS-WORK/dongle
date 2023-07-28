package club.super_coding.controller.board_post;

import club.super_coding.dto.BoardPostDto;
import club.super_coding.service.BoardPostService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/club/board")
//@CrossOrigin(origins = "http://localhost:5174/")
public class BoardPostController {

    private final BoardPostService boardPostService;

    @GetMapping("/{boardId}")
    public String getPosts(@PathVariable Integer boardId) {
        System.out.println("boardId = " + boardId);
        String posts = boardPostService.getPosts(boardId);
        System.out.println("posts = " + posts);
        return "success" + boardId;
    }

    @PostMapping
    public String createPost(@RequestBody BoardPostDto boardPost) {
        System.out.println("boardPost = " + boardPost);
        System.out.println("boardPostC = " + boardPost.getContents());
        System.out.println("boardPostT = " + boardPost.getTitle());
        return "suc";
    }
}




