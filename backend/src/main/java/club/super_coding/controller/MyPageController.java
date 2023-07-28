package club.super_coding.controller;

import antlr.Token;
import club.super_coding.security.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import io.jsonwebtoken.Claims;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import club.super_coding.entity.Member;
import club.super_coding.service.MyPageService;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.validation.Validator;


//해당 클래스를 Controller 레이어로 인식 Rest한 형태로 @controller + @responsebody 합쳐짐
@RestController
@RequestMapping("/") //URL 패턴 Request의 URL의 패턴 확인 후 해당하는 패턴이 왔을 때 해당 클래스를 실행
public class  MyPageController {
    @Autowired
    MyPageService myPageService;




    public MyPageController(MyPageService myPageService) {
        this.myPageService = myPageService;
    }

    //header
    @RequestMapping("/mypage/profile")
    public Claims myPageProfile(@RequestHeader("TokenProvider") String tokenProvider , Model model){
       if (TokenProvider.validate(tokenProvider)) {

           model.addAttribute("error","JWT 토큰이 null이거나 비어있습니다.");
                   return null;
       }
        Claims claims =Jwts.parser().setSigningKey("jwtseckey!@")
                .parseClaimsJws(tokenProvider).getBody();

        //클레임에서 원하는 데이터를 추출하여 Model에 추가
        String memberId = claims.get("MemberId",String.class);
        String email =claims.get("email",String.class);
        String phone = claims.get("phone",String.class);
        String name = claims.get("name",String.class);

        model.addAttribute("MemberId",memberId);
        model.addAttribute("email",email);
        model.addAttribute("phone",phone);
        model.addAttribute("name",name);

        return claims;
    }

    @GetMapping("/mypage/{id}")
    public Member getMemberById(@PathVariable String memberId) {
        return myPageService.getMemberById(memberId);
    }


}









