package club.super_coding.service;

import club.super_coding.entity.Member;
import club.super_coding.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



//중간에 서비스를 두어 데이터를 처리 , 서비스는 스프링에서 데이터를 처리하기위해
//작성되는 클래스
@Transactional
@Service
public class MyPageService {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    public MyPageService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member saveMember(Member memberEntity) {
        return memberRepository.save(memberEntity);
    }

    public Member getMemberById(String memberId) {
        return memberRepository.findByMemberId(memberId);
    }
}


