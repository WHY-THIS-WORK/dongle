package club.super_coding.controller.club;

import club.super_coding.dto.ClubDto;
import club.super_coding.entity.Category;
import club.super_coding.entity.Club;
import club.super_coding.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

    // 동아리 신청 POST /newclub
    @PostMapping("/newclub")
    public Club postNewClub(@RequestBody ClubDto club) {//동아리 신청 POST /newclub
        System.out.println("club = " + club);
        Integer id = club.getCategory().getId();
        System.out.println("id = " + id);

        Club club1 = clubService.saveNewClub(club);
        return club1;
    }

}
