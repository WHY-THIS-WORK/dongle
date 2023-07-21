package club.super_coding.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "club")// mysql에 저장된 테이블명을 수동으로 설정해줌
public class Club {

    @Id // 이 테이블에 PK를 뜻함
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @ColumnDefault("0")// 동아리 상태값 기본:0 , 삭제:1
    private int deleted;//삭제여부

// @ManyToOne
//    @JoinColumn(name = "mileageNum")
}
