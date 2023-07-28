package club.super_coding.service;


import club.super_coding.dto.LoginDto;
import club.super_coding.dto.MemberDTO;
import club.super_coding.dto.ResponseDto;
import club.super_coding.dto.SignInResponseDto;
import club.super_coding.entity.Member;
import club.super_coding.repository.MemberRepository;
import club.super_coding.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    TokenProvider tokenProvider;

    public ResponseDto<?> signUp(MemberDTO dto) {
        String memberId = dto.getMemberId();
        String password = dto.getPassword();
        String passwordCheck = dto.getPasswordCheck();


        //memberId 중복 확인
        try {
            if (1 == memberRepository.countByMemberId(memberId)) return ResponseDto.setFailed("아이디가 중복 됩니다.");

        } catch (Exception e) {
            return ResponseDto.setFailed("Data Base Error!");
        }


        //비밀번호가 일치 하지 않을경우 failed response 반환
        if (!password.equals(passwordCheck)) return ResponseDto.setFailed("패스워드가 일치하지 않습니다.");

        //MemberEntity 생성
        Member member = new Member(dto);

        //memberRepository를 이용해서 데이터베이스에 Entity 저장!
        try {
            memberRepository.save(member);
        } catch (Exception error) {
            return ResponseDto.setFailed("Data Base Error!");
        }
        //성공시 Success response 반환
        return ResponseDto.setSuccess("가입에 성공 하였습니다.", null);

    }

    //data 존재 유무 확인
    public ResponseDto<SignInResponseDto> signIn(LoginDto dto) {
        String loginId = dto.getLoginId();
        String loginPassword = dto.getLoginPassword();


        boolean existed = memberRepository.existsByMemberIdAndPassword(loginId, loginPassword);
        if (!existed) return ResponseDto.setFailed("로그인 정보가 일치하지 않습니다.");


        Member member;


        member = memberRepository.findByMemberId(loginId);


        member.setPassword("");

        String token = tokenProvider.create(member);
        int exprTime = 3_600_000;

        SignInResponseDto signInResponseDto = new SignInResponseDto(token, exprTime, member);
        return ResponseDto.setSuccess("로그인에 성공 하였습니다.", signInResponseDto);
    }
}


