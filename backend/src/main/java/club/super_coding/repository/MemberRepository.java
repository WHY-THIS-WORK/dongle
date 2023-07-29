package club.super_coding.repository;



import club.super_coding.dto.MemberDTO;
import club.super_coding.dto.TokenDTO;
import club.super_coding.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository //해당 클래스를 Repository로 사용 선언 MemberEntity 를 이용하여 데이터 통신
public interface MemberRepository extends JpaRepository<Member,Integer> {


  boolean existsByMemberIdAndPassword(String memberId, String password);

    boolean  existsByMemberId(String memberId);

 int countByMemberId(String memberId);

 Member findByMemberId(String memberId);



//    Member FindByPhone(String phone);










}


