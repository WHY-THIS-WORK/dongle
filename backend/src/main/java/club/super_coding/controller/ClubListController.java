package club.super_coding.controller;

import club.super_coding.entity.Club;
import club.super_coding.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/club/")
public class ClubListController {

    @Autowired
    ClubService clubService;

    @GetMapping("/")
    public List<Club> getClubAllList() {
        return clubService.getClubList();
    }


    @GetMapping("/{id}")
    public List<Club> getClubIdList(@PathVariable("id") int id) {
        return clubService.getClubList();
    }

}
