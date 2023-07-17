package club.super_coding.repository;

import club.super_coding.entity.Test_db;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<Test_db, Integer> {

    @Override
    List<Test_db> findAll();
}
