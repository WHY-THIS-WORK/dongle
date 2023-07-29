package club.super_coding.controller.club;

import club.super_coding.dto.*;
import club.super_coding.service.AuthService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


//토큰 경로 설정



@Slf4j //데이터 확인
@RestController
@RequestMapping

public class AuthController {

    @Autowired
    AuthService authService;

    //token 받는 형식


    @PostMapping("/signup")
    public ResponseDto<?> signUp(@RequestBody MemberDTO requestBody) {
        ResponseDto<?> result = authService.signUp(requestBody);
        return result;
    }

    @PostMapping("/login")
    public ResponseDto<SignInResponseDto> signIn(@RequestBody LoginDto requestBody) {
        log.info("RequsetBody" + requestBody);
        ResponseDto<SignInResponseDto> result = authService.signIn(requestBody);
        return result;
    }

    @PostMapping("/check_id")
    public ResponseDto<IdcheckDto> checkId(@RequestBody IdcheckDto requestBody) {
        log.info("RequsetBody" + requestBody);
        ResponseDto<IdcheckDto> result = authService.checkId(requestBody);
        return result;
    }
}
