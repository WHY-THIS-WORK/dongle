package club.super_coding.controller;

import club.super_coding.dto.LoginDto;
import club.super_coding.dto.MemberDTO;
import club.super_coding.dto.ResponseDto;
import club.super_coding.dto.SignInResponseDto;
import club.super_coding.service.AuthService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//토큰 경로 설정



@Slf4j //데이터 확인
@RestController
@RequestMapping

public class AuthController {

    @Autowired
    AuthService authService;

    //token 받는 형식



    @PostMapping("/signup")
    public ResponseDto<?> singUp(@RequestBody MemberDTO requestBody) {
        ResponseDto<?> result = authService.signUp(requestBody);
        return result;
    }

    @PostMapping("/login")
    public ResponseDto<SignInResponseDto> signIn(@RequestBody LoginDto requestBody) {
       log.info("RequsetBody" +requestBody);
        ResponseDto<SignInResponseDto> result = authService.signIn(requestBody);
        return result;
    }




}
