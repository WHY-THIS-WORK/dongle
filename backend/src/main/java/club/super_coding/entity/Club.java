package club.super_coding.entity;


import club.super_coding.dto.ClubDto;
import lombok.*;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.stereotype.Controller;

import javax.persistence.*;
import java.util.Optional;
import java.util.Set;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "club")// mysql에 저장된 테이블명을 수동으로 설정해줌
public class Club {

    @Id // 이 테이블에 PK를 뜻함
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "club_id")
    private Integer clubId;// 동아리ID


    @JoinColumn(name = "category")
    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;// 카테고리

    @Column
    private String name;// 동아리명

    @Column
    private String description;// 동아리설

    @Column
    private String direction;// 활동방향

    @Column(name = "board_name")
    private String boardName;// 게시판 이름

    @Column
    @ColumnDefault("0")// 동아리 상태값 기본:0 , 삭제:1
    private int deleted;//삭제여부

    @Builder
    public Club(ClubDto clubDto,  Optional<Category> category){
        this.category = category.get();
        this.name = clubDto.getName();
        this.description = clubDto.getDescription();
        this.direction = clubDto.getDirection();
        this.boardName = clubDto.getBoardName();
    }


//    @OneToMany(mappedBy = "club", cascade = CascadeType.ALL)
//    private List<Board> boards;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "name", insertable = false, updatable = false)

}
