package club.super_coding.service;


import club.super_coding.dto.*;
import club.super_coding.entity.Member;
import club.super_coding.repository.MemberRepository;
import club.super_coding.security.TokenProvider;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    TokenProvider tokenProvider;

//    existsByMemberId

//    boolean existed = memberRepository.existsByMemberIdAndPassword(loginId, loginPassword);
//        if (!existed) return ResponseDto.setFailed("로그인 정보가 일치하지 않습니다.");

    public ResponseDto<IdcheckDto> checkId(IdcheckDto dto) {

        String memberId = dto.getLoginId();

        boolean memberIdCheck = memberRepository.existsByMemberId(memberId);
        if (memberIdCheck) return ResponseDto.setFailed("중복된 아이디 입니다.");

        boolean memberIdCheck2 = memberRepository.existsByMemberId(memberId);
        if (!memberIdCheck2) return ResponseDto.setIdSuccess("가입 가능한 아이디입니다. ", null);


        return null;
    }


    public ResponseDto<?> signUp(MemberDTO dto) {

        String password = dto.getPassword();
        String passwordCheck = dto.getPasswordCheck();


        //memberId 중복 확인


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
    //전화번호 변경

    }




