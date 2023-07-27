package club.super_coding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class MypageDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public class MemberDTO {
        private String nickname;
        private String email;
        private String phone;



    }
}
