package club.super_coding.security;


import club.super_coding.entity.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.time.Instant;
import java.time.temporal.ChronoUnit;


//JWT : 전자 서명이 된 토큰
//JSON 형태로 구성된 토큰
// {header}.{payload}.{signature}

// header : typ (해당 토큰의 타입), alg(토큰을 서명하기 위해 사용된해시 알고리즘)
// payload: sub(해당 토큰의 주인), iat(토큰이 발행된 시간) ,exp(토큰이 만료되는 시간)

@Service
public class TokenProvider {

    //검증을 위한 키 및 JWT 생성
    private static final String SECURITY_KEY = "jwtseckey!@";


    //JWT 생성하는 매서드
    public String create(Member member) {
        Claims claims = Jwts.claims();
        claims.put("Id", member.getMemberId()); //담고 싶은 값
        claims.put("email", member.getEmail()); //담고 싶은 값
        claims.put("phone", member.getPhone()); //담고 싶은 값
        //JWT 만료날짜 현재 날짜 +1시간으로 설정
       Date exprTime = (Date) Date.from(Instant.now().plus(1,ChronoUnit.HOURS));
        //JWT 생성
        return Jwts.builder()
                //암호화에 사용 될 알고리즘,키
                .signWith(SignatureAlgorithm.HS512, SECURITY_KEY)
                //JWT 제목 , 생성일 , 만료일
                .setSubject(member.getMemberId())
                .setIssuedAt(new java.util.Date())
                .setExpiration(exprTime)
                .setClaims(claims)
                //생성
                .compact();
    }

    //JWT 검증
    public static boolean validate (String token){
        //매개변수로 받은 token을 키를 사용해서 복보화 (디코딩)
        Claims claims = Jwts.parser().setSigningKey(SECURITY_KEY)
                .parseClaimsJws(token).getBody();
        //디코딩된 토큰의 payload에서 제목을 가져옴
        return Boolean.parseBoolean(claims.getSubject());
    }
}