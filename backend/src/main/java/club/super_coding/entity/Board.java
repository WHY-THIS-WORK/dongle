package club.super_coding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Table(name = "board")
public class Board {

    @Id
    @Column(name = "board_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardId;// 게시글Id

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "club_id")
    private Club clubId;//동아리게시판->게시판Id

    @Column(name = "board_name")
    private String boardName;//게시판_제목

    @Column(name = "deleted")
    private Integer deleted;//삭제여부


}


//    insertable = false, updatable = false
  /*  @Temporal(TemporalType.TIMESTAMP) // 날짜와 시간, 데이터베이스 timestamp 타입과 매핑 (2020-12-18 23:36:33)
    private Date insertDate;//게시판_등록시간

    @Column(name = "update_date")
    private Date updateDate;//게시판_업뎃시간

    @Column(name = "deleted")
    private Boolean deleted;//게시판_삭제유무*/

