package club.super_coding.controller;

import club.super_coding.dto.LoginDto;
import club.super_coding.dto.MemberDTO;
import club.super_coding.dto.ResponseDto;
import club.super_coding.dto.SignInResponseDto;
import club.super_coding.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//토큰 경로 설정
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    //token 받는 형식
    @PostMapping("/singup")
    public ResponseDto<?> singUp(@RequestBody MemberDTO requestBody) {
        ResponseDto<?> result = authService.signUp(requestBody);
        return result;
    }

    @PostMapping("login")
    public ResponseDto<SignInResponseDto> sigIn(@RequestBody LoginDto requestBody) {
        ResponseDto<SignInResponseDto> result = authService.signIn(requestBody);
        return result;
    }

}
