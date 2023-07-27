package club.super_coding.repository;

import club.super_coding.entity.BoardPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface BoardPostRepository extends JpaRepository<BoardPost, Integer> {





}
