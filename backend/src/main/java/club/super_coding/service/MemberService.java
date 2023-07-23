package club.super_coding.service;


import club.super_coding.dto.MemberDTO;
import club.super_coding.entity.MemberEntity;
import club.super_coding.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

//중간에 서비스를 두어 데이터를 처리 , 서비스는 스프링에서 데이터를 처리하기위해
//작성되는 클래스
@Service
@RequiredArgsConstructor

public class MemberService {
    @Autowired  //한번만 복사
    MemberRepository memberRepository;



    // MemberEntity.tosaveEntity 호출 > memberEntity로 받음
//     memberRepository를 .save 호출 후 memberEntity로 넘기면서 저장
//
    public int save(MemberEntity memberEntity) {
        //엔티티 타입의 파라미터만 전달가능 DTO를 엔티티로 변환하는 과정 필요
//        MemberEntity memberEntity = memberRepository.save(MemberEntity.toSaveEntity(memberDTO));
//        MemberEntity memberEntity = MemberEntity.toSaveEntity(memberDTO);
//        Long savedId = memberRepository.save(memberEntity).getId()
        //submit 입력 후 데이터가 service에서 받음 getMemberid 확보 후 id 검색 없으면 NULL; -> id중복 X
        //null값이 오면 save =회원가입 중복되면 중복됐다고 알림
       Optional<Integer> meme =  memberRepository.findByMember_id(memberEntity.getMember_id());
       //id 검색 하고 if 아이디 있으면 반려<Controller> 없으면 회원가입 페이지로 이동
        if (meme == null){
            memberRepository.save(memberEntity);


        }
       return 0;
    }
}