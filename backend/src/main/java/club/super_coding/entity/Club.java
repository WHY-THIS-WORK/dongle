package club.super_coding.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "club")
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int id;
    @Column
    private String category;// 카테고리
    @Column
    private String name;// 동아리명
    @Column
    private String description;// 동아리설
    @Column
    private String direction;// 활동방향
    @Column
    private boolean deleted;//삭제여부

}
