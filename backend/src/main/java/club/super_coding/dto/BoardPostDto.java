package club.super_coding.dto;
/*
 * 게시글 작성시 POST에서 사용
 */

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardPostDto {

    private int id;
    private String title;
    private String contents;
}
