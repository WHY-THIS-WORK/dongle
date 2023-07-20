package club.super_coding.service;

import club.super_coding.entity.Club;
import club.super_coding.repository.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubService {

    @Autowired
    ClubRepository clubRepository;


    public List<Club> getClubList() {
        return clubRepository.findAll();
    }
}
