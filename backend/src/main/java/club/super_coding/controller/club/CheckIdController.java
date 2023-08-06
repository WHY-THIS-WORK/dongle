package club.super_coding.controller.club;

import club.super_coding.dto.MemberDTO;
import club.super_coding.dto.ResponseDto;
import club.super_coding.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class CheckIdController {

    @Autowired
    AuthService authService;

    //ID중복확인
    @GetMapping("/id_check/{memberId}")
    public ResponseDto<?> checkNicknameDuplicate(@PathVariable MemberDTO requestBody) {
        ResponseDto<?> result = authService.checkNicknameDuplicate(requestBody);
        return result;
    }
}