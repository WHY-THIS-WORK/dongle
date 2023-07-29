package club.super_coding.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {
  private String memberId;
  private String nickname;
  private String password;
  private String passwordCheck;
  private String email;
  private String phone;
  private String joinDate;
  private Integer deleted;

}
