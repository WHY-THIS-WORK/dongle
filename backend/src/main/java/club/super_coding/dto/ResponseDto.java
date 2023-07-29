package club.super_coding.dto;


import lombok.AllArgsConstructor;
import lombok.Data;



@AllArgsConstructor(staticName ="set") //이름 고정
@Data
public class ResponseDto<D> {
    private boolean result;
    private String message;
    private D data;

    //성공 인스턴스
    public static <D> ResponseDto<D> setSuccess(String message, D data){
        return ResponseDto.set(true ,message,data);
    }
    public static <D> ResponseDto<D> setIdFailed(String message, D data){
        return ResponseDto.set(false ,message,data);
    }
    public static <D> ResponseDto<D> setIdSuccess(String message, D data){
        return ResponseDto.set(false ,message,null);
    }
    //실패 인스턴스
    public static <D> ResponseDto<D> setFailed(String message){
        return ResponseDto.set(false,message,null);
    }
}
