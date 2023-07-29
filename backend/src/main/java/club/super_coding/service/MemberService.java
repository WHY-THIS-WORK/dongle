package club.super_coding.service;



import club.super_coding.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.Optional;

//중간에 서비스를 두어 데이터를 처리 , 서비스는 스프링에서 데이터를 처리하기위해
//작성되는 클래스

@Service
@RequiredArgsConstructor
public class  MemberService {
    @Autowired  //한번만 복사
    MemberRepository memberRepository;




}

