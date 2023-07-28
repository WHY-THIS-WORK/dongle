package club.super_coding.controller;

import club.super_coding.dto.MemberDTO;

import club.super_coding.entity.Member;
import club.super_coding.service.MyPageService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


//해당 클래스를 Controller 레이어로 인식 Rest한 형태로 @controller + @responsebody 합쳐짐
@RestController
@RequestMapping("/") //URL 패턴 Request의 URL의 패턴 확인 후 해당하는 패턴이 왔을 때 해당 클래스를 실행
public class  MyPageController {
    @Autowired
    MyPageService myPageService;

    @Autowired
    public MyPageController(MyPageService myPageService) {
        this.myPageService = myPageService;
    }

    @PostMapping("/mypage")
    public Member createMember(@RequestBody Member member) {
        return myPageService.saveMember(member);
    }

    @GetMapping("/mypage/{id}")
    public Member getMemberById(@PathVariable String memberId) {
        return myPageService.getMemberById(memberId);
    }


}









