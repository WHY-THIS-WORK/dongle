package club.super_coding.controller;

import club.super_coding.entity.MemberEntity;
import club.super_coding.repository.MemberRepository;
import club.super_coding.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//해당 클래스를 Controller 레이어로 인식 Rest한 형태로 @controller + @responsebody 합쳐짐
@RestController
@Controller
@RequiredArgsConstructor //생성자 주입
@RequestMapping("/") //URL 패턴 Request의 URL의 패턴 확인 후 해당하는 패턴이 왔을 때 해당 클래스를 실행
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    private MemberRepository memberRepository;







}




