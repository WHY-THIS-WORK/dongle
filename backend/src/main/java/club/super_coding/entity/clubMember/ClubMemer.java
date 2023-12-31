package club.super_coding.entity.clubMember;

import club.super_coding.entity.Club;
import club.super_coding.entity.Member;

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
    private Member member;


}
