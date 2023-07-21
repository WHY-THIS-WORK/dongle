package club.super_coding.service;

import club.super_coding.entity.Club;
import club.super_coding.repository.ClubRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@Service
public class ClubService {

    @Autowired
    ClubRepository clubRepository;


    public List<Club> getClubList() {
        return clubRepository.findAll();
    }


    @Transactional
    public Club saveNewClub(Club club) {
        log.info(club.toString());

        return clubRepository.save(club);
    }
}
