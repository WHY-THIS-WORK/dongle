package club.super_coding.controller;

import club.super_coding.entity.Club;
import club.super_coding.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/")
public class ClubListController {

    @Autowired
    ClubService clubService;


    @GetMapping("/{id}")
    public List<Club> getClubIdList(@PathVariable("id") int id) {
        return clubService.getClubList();
    }


    @GetMapping("/newclub")
    public String getClubAllList() {
        // 동아리 신청 화면으로 이동 GET /newclub
        return "newclub";
    }

    @PostMapping("/newclub")
    public Club postNewClub(@RequestBody Club club) {
        //동아리 신청 POST /newclub
        log.info(club.toString());
        clubService.saveNewClub(club);
        return club;
    }

}
