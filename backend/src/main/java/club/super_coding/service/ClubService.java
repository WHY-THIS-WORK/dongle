package club.super_coding.service;

import club.super_coding.entity.Club;
import club.super_coding.repository.ClubRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ClubService {

    @Autowired // IoC 컨테이너 빈으로 등록하여 의존성을 주입
    ClubRepository clubRepository;
/*
    아래 코드는 위 @Autowired가 붙은 코드와 같은 기능을 한다
    private final ClubRepository clubRepository;
    public ClubService(ClubRepository clubRepository) {
        this.clubRepository = clubRepository;
    }
*/

    public List<Club> ClubAllList() {
        // 동아리 모두 조회
        return clubRepository.ClubAndCategoryAll();
    }
    public Optional<Club> ClubOne(int clubid){// 동아리 id를 검색한 결과가 없을 수 있으니 Optional처리하여 에러방진
        return clubRepository.ClubAndCategoryOne(clubid);
    }


    @Transactional // @Transactional이 붙은 메서드는 메서드가 포함하고 있는 작업 중에 하나라도 실패할 경우 전체 작업을 취소한다.
    public Club saveNewClub(Club club) {
            return clubRepository.save(club);
    }
}
