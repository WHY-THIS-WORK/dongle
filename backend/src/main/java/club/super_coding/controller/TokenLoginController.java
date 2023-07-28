package club.super_coding.controller;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//토큰을 갖고 로그인
@RestController
@RequestMapping("/")
public class TokenLoginController {


    @GetMapping("/")
    public String getBoard(String userEmail){

        return "로그인된 사용자는 " + userEmail +"입니다.";
    }
}
