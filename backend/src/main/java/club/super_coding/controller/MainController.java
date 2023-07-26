package club.super_coding.controller;

import club.super_coding.entity.Club;
import club.super_coding.service.ClubService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
 * 20230722 김주환
 * 동아리 전체출력 기능
 * 메인페이지: getMainAllClub
 */
@Slf4j
@RestController// 적어주면 메소드 return시 Json형식으로 프론트에 전달
@RequestMapping("/")// 아무지정없는 / 경로 요청시 호출
public class MainController {
    // 기본 주소 http://52.78.248.174:5173/
    // 로컬 주소 http://localhost:5173/
    @Autowired
    ClubService clubService;// 동아리관련 서비스 DI


    @GetMapping    // 아무것도 적지 않았으므로 Get의 / 요청시 호출
    public List<Club> getMainAllClub() {// Club 타입의 객체를 List형식으로 return(중복 값이 있을 수 있기 때문에 List로 받음)
        //메인페이지 화면으로 이동 GET /
        return clubService.ClubAllList();// 모든 동아리리스트를 return 으로 프론트에 보내준다

    }


}
