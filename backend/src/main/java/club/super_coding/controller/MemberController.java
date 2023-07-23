package club.super_coding.controller;


import club.super_coding.dto.MemberDTO;
import club.super_coding.entity.MemberEntity;
import club.super_coding.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor //생성자 주입
@RequestMapping //member 주소로 시작하는 컨트롤러를 여기서 다 처리
public class MemberController{
    @Autowired
    private MemberService memberService;


    @GetMapping("/join") //data  요청 /join 페이지 보여줌
    public String saveForm(){
        return "/join"; //회원관련된 페이지
    }

    //postmapping으로 가입정보 받아오기 //회원가입 되면 로그인페이지로 이동
    // 회원가입 < data 저장
    @PostMapping("/join") //form 형태 data >DTO //회원가입
    public String save(@RequestBody MemberEntity memberEntity) {
        memberService.save(memberEntity);
        return "/login"; //회원 가입 후 로그인

    }

}


