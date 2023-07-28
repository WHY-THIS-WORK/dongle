package club.super_coding.repository;

import club.super_coding.entity.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public interface ClubRepository extends JpaRepository<Club, Integer> {

    @Query("SELECT c ,ca FROM Club c join c.category ca")
    List<Club> ClubAndCategoryAll(); // 모든 동아리 뽑아오기


    @Query("SELECT c ,ca FROM Club c join c.category ca where c.clubId =?1")
    Optional<Club> ClubAndCategoryOne(int club_id);// 동아리 하나만 뽑아오기

}
