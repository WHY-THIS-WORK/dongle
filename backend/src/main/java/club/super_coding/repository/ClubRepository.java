package club.super_coding.repository;

import club.super_coding.entity.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;

@Repository
public interface ClubRepository extends JpaRepository<Club, Integer> {

    @Query("SELECT c ,ca FROM Club c join c.category ca")
    List<Club> ClubAndCategoryAll();



    @Query("SELECT c ,ca FROM Club c join c.category ca")
    List<Club> ClubAndCategoryOne();

}
