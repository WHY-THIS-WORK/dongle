package club.super_coding.repository;

import club.super_coding.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {

    @Transactional
    @Query("select b.boardId as boardId, b.clubId.clubId as clubId,b.boardName as boardName from Board b where b.clubId.clubId = :clubId and b.deleted =0")
    List<Board> AllboardList(@Param("clubId") Integer clubId);

    List<Board> findAllByClubId(Integer clubId);

}
