package club.super_coding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "board")
public class Board {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private int club_id;//게시동아리_아이디

    @Column
    private int member_id;//게시판_작성자

    @Column
    private String title;//게시판_제목

    @Column
    private String contents;//게시판_내용

    @Column
    private Date insert_date;//게시판_등록시간

    @Column
    private Date update_date;//게시판_업뎃시간

    @Column
    private Boolean deleted;//게시판_삭제유무
}
