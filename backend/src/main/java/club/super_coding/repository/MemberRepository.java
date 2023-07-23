package club.super_coding.repository;


import club.super_coding.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
//member 엔티티와 LONG 레파지토리를 이용해서 어떤 엔티티클래스를 다룰건지
//Jpa레파지토리 상속  엔티티의 class의  PK 파일 이뭐냐 2

public interface MemberRepository extends JpaRepository<MemberEntity,Long> {
    //data Optional null; 표시 해줌
//    @Query("SELECT COUNT (*) FROM member m WHERE m.member_id ={s}")

}
