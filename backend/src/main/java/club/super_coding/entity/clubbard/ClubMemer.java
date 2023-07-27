package club.super_coding.entity.clubbard;

import club.super_coding.entity.Club;
import club.super_coding.entity.MemberEntity;

import javax.persistence.*;

@Entity
@Table(name = "club_member")
public class ClubMemer {
    @EmbeddedId
    private ClubMemberId clubMemberId;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("clubId")
    @JoinColumn(name = "club_id")
    private Club club;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("memberId")
    @JoinColumn(name = "member_id")
    private MemberEntity member;


}
