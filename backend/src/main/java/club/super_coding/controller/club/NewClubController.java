package club.super_coding.controller.club;

import club.super_coding.entity.Category;
import club.super_coding.entity.Club;
import club.super_coding.repository.CategoryRepository;
import club.super_coding.service.ClubService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
/*
 * 20230722 김주환
 * 동아리 신청화면으로 이동
 * 동아리 신청 기능
 * */

@Slf4j
@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class NewClubController {

    ClubService clubService;

    CategoryRepository categoryRepository;

    // 동아리 신청 POST /newclub
    @PostMapping("/newclub")
    public Club postNewClub(@RequestBody Club club) {//동아리 신청 POST /newclub
        log.info("club" + club);
        clubService.saveNewClub(club);
        Optional<Category> byId = categoryRepository.findById(club.getCategory().getId());
        byId.get();

        return club;
    }

}
