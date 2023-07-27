package club.super_coding.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Table(name = "board_post")
public class BoardPost {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // 게시글 ID

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id", insertable = false, updatable = false)
    private Board boardId; // 게시판 ID

    @Column(name = "member_id")
    private Integer memberId; // 회원번호

    @Column(name = "title")
    private String title; /// 제목

    @Column(name = "contents")
    private String contents; // 내용

    @Column(name = "insert_date")
    private LocalDate insert_date;  // 등록날짜

    @Column(name = "update_date")
    private Date update_date; // 수정날짜

    @Column(name = "deleted")
    private Integer deleted; // 삭제여부


}















