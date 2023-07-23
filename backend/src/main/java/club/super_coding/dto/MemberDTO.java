package club.super_coding.dto;

import lombok.Data;


//생성자 생성
@Data
public class MemberDTO {
    private Long id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private int memberAge;
    private String memberMobile;

}
