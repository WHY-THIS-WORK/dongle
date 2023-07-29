package club.super_coding.dto;


import club.super_coding.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//유저 타입을 반환 로그인 DTO
@NoArgsConstructor
@AllArgsConstructor
@Data  //TOKEN , 만료기간
public class SignInResponseDto {
    private String token;
    private int exprTime;
    private Member user;

}
