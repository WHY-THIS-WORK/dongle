package club.super_coding.entity.clubbard;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class ClubMemberId implements Serializable {
    @Column(name = "member_id")
    private Integer memberId ;

    @Column(name = "club_id")
    private Integer clubId;

}
