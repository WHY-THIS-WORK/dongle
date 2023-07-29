package club.super_coding.entity;

import club.super_coding.dto.BoardPostDto;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "board_post")
public class BoardPost {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // 게시글 ID

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "board_id", insertable = false, updatable = false)
    @Column(name = "board_id")
    private Integer boardId; // 게시판 ID

    @Column(name = "member_id")
    private String memberId; // 회원번호

    @Column(name = "title")
    private String title; /// 제목

    @Column(name = "contents")
    private String contents; // 내용

    @CreationTimestamp
    @Column(name = "insert_date")
    private LocalDate insertDate;  // 등록날짜

    @UpdateTimestamp
    @Column(name = "update_date")
    private Date updateDate; // 수정날짜

    @Column(name = "deleted")
    private Integer deleted; // 삭제여부


    public BoardPost(BoardPostDto boardPost) {
        this.boardId = boardPost.getBoardId();
        this.memberId = boardPost.getMemberId();
        this.title = boardPost.getTitle();
        this.contents = boardPost.getContents();

        this.insertDate = null;
        this.updateDate = null;
        this.deleted = 0;
    }
}















