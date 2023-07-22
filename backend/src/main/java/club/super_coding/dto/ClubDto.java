package club.super_coding.dto;
/*
 * 동아리 신청시 POST에서 사용
 */

import lombok.*;

@ToString
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClubDto {

    private int id;// 인덱스
    private String category;// 카테고리
    private String name;// 동아리명
    private String description;// 동아리설명
    private String direction;// 활동방향




}
