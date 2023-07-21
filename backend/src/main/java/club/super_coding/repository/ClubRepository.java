package club.super_coding.repository;

import club.super_coding.dto.ClubDto;
import club.super_coding.entity.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubRepository extends JpaRepository<Club, Integer> {
}
