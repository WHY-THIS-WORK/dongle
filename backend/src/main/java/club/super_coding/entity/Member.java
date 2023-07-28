package club.super_coding.entity;


import club.super_coding.dto.MemberDTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;


//db 정의 컬럼 생성

@AllArgsConstructor
@NoArgsConstructor
@Entity(name ="Entity")
@Getter
@Setter
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    //unique = true 유일한 값만 저장할수 있음을 의미 중복체크
    @Column(name = "member_id")
    private String memberId;

    @Column
    private String nickname;

    @Column
    private String password;

    @Column
    private String email;

    @Column
    private String phone;

    @Column
    private String join_date;

    @Column
    private int deleted;

    public Member(MemberDTO dto){
        this.password = dto.getPassword();
        this.email = dto.getEmail();
        this.nickname = dto.getNickname();
        this.phone = dto.getPhone();
        this.memberId = dto.getMemberId();
        this.join_date = dto.getJoinDate();
    }

}