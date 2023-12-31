package club.super_coding.repository;

import club.super_coding.entity.BoardPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface BoardPostRepository extends JpaRepository<BoardPost, Integer> {


    List<BoardPost> findAllByBoardId(Integer boardId);

    BoardPost findByBoardIdAndId(Integer boardId, Integer postId);

    void deleteByBoardIdAndId(Integer boardId, Integer postId);
}
