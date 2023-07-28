package club.super_coding.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.NotBlank;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {

//    @NotBlank //필수값
    private String loginId;
//    @NotBlank //필수값
    private String loginPassword;
}
