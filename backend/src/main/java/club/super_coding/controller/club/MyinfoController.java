package club.super_coding.controller.club;

import club.super_coding.entity.Member;
import club.super_coding.service.MyPageService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

public class MyinfoController {



    @Autowired
    MyPageService myPageService;
    @PutMapping("/update_profile")
    public ResponseEntity<String> updateMyPageProfile
            (@RequestHeader("Authorization") String authorizationHeader, @RequestBody Member updatedMember) {
        String accessToken = authorizationHeader
                .replace("Bearer ", "");

        // JWT 토큰 검증 및 사용자 신원 확인
        Claims claims = Jwts.parser().setSigningKey("jwtseckey!@")
                .parseClaimsJws(accessToken).getBody();

        if (claims == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid token.");
        }

        // 사용자 신원이 확인되면, 회원 정보를 수정
        String memberId = claims
                .get("MemberId", String.class);

        Member existingMember = myPageService
                .getMemberById(memberId);

        if (existingMember == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Member not found.");
        }

        existingMember.setEmail(updatedMember.getEmail());
        existingMember.setPhone(updatedMember.getPhone());
        existingMember.setNickname(updatedMember.getNickname());
        existingMember.setNickname(updatedMember.getNickname());
        // ...

        myPageService.updatemember(existingMember);

        return ResponseEntity.ok("Member information updated successfully.");
    }
    //    비밀번호 변경


}
