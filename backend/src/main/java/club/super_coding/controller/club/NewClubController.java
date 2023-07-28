package club.super_coding.controller.club;

import club.super_coding.entity.Club;
import club.super_coding.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/*
 * 20230722 김주환
 * 동아리 신청화면으로 이동
 * 동아리 신청 기능
 * */

@Slf4j
@RestController
@RequestMapping("/")
public class NewClubController {

    @Autowired
    ClubService clubService;


    @GetMapping("/newclub")
    public String getClubAllList() { // 동아리 신청 화면으로 이동 GET /newclub
        return "newclub";
    }

    // 동아리 신청 POST /newclub
    @PostMapping("/newclub")
    public Club postNewClub(@RequestBody Club club) {//동아리 신청 POST /newclub
        log.info(club.toString());
        clubService.saveNewClub(club);
        return club;
    }

}
