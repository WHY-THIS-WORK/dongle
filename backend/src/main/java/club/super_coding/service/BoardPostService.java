package club.super_coding.service;


import club.super_coding.dto.BoardPostDto;
import club.super_coding.entity.BoardPost;
import club.super_coding.repository.BoardPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardPostService {

    private final BoardPostRepository boardPostRepository;

    public List<BoardPost> getPosts(Integer boardId) {
//               List<Integer> ids = Arrays.asList(boardId);
        List<BoardPost> allById = boardPostRepository.findAllByBoardId(boardId);
        System.out.println("allById = " + allById);

        return allById;
    }


    public String createPost(BoardPostDto boardPost) {
        BoardPost post = new BoardPost(boardPost);
        BoardPost save = boardPostRepository.save(post);
        System.out.println("save = " + save);
        return "succc";
    }

    public BoardPost getPost(Integer boardId, Integer postId) {
        BoardPost byBoardIdAndId = boardPostRepository.findByBoardIdAndId(boardId, postId);
        System.out.println("byBoardIdAndId = " + byBoardIdAndId);
        return byBoardIdAndId;
    }

    public BoardPost updatePost(BoardPostDto boardPost) {
        BoardPost byBoardIdAndId = boardPostRepository.findByBoardIdAndId(boardPost.getBoardId(), boardPost.getId());
        byBoardIdAndId.setTitle(boardPost.getTitle());
        byBoardIdAndId.setContents((boardPost.getContents()));
        BoardPost save = boardPostRepository.save(byBoardIdAndId);
        System.out.println("save = " + save);
        return save;
    }

    public void delete(Integer boardId, Integer postId) {
        boardPostRepository.deleteByBoardIdAndId(boardId, postId);
    }
}
