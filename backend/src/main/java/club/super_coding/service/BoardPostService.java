package club.super_coding.service;


import club.super_coding.entity.BoardPost;
import club.super_coding.repository.BoardPostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardPostService {

    private final BoardPostRepository boardPostRepository;

    public String getPosts(Integer boardId) {
               List<Integer> ids = Arrays.asList(boardId);
        List<BoardPost> allById = boardPostRepository.findAllById(ids);
        System.out.println("allById = " + allById);

        return "posts";
    }




}
