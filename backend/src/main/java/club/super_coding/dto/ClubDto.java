package club.super_coding.dto;
/*
 * 동아리 신청시 POST에서 사용
 */

import club.super_coding.entity.Category;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClubDto {

    private Integer id;// 인덱스
    private Category category;// 카테고리
    private String name;// 동아리명
    private String description;// 동아리설명
    private String direction;// 활동방향
    private String boardName;// 게시판명




}
