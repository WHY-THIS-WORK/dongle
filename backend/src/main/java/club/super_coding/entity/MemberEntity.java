package club.super_coding.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

//db 정의 컬럼 생성
@Entity
@Getter
@Setter
@Table(name = "member")
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private int id;
    //unique = true 유일한 값만 저장할수 있음을 의미 중복체크
    @Column
    private String member_id;

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


    //Dto 를 받고 그 값을 꺼내서 엔티티에 각각 옮겨 담는 과정
//    public static MemberEntity toSaveEntity(MemberDTO memberDTO){
//        MemberEntity memberEntity = new MemberEntity();
//        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
//        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
//        memberEntity.setMemberName(memberDTO.getMemberName());
//        memberEntity.setMemberAge(memberDTO.getMemberAge());
//        memberEntity.setMemberMobile(memberDTO.getMemberMobile());
//        return memberEntity;

}



