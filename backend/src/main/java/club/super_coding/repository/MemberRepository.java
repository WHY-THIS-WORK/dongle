package club.super_coding.repository;


import club.super_coding.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository //해당 클래스를 Repository로 사용 선언 MemberEntity 를 이용하여 데이터 통신
public interface MemberRepository extends JpaRepository<MemberEntity,String> {


 public boolean existsByMemberIdAndPassword(String memberId , String password);
}


