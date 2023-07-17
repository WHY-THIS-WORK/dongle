package club.super_coding.controller;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/서동욱")
public class SwaggerRedirector {
    //https://nahwasa.com/entry/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-Swagger-UI-300-%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-22-%EC%9D%B4%EC%83%81-Spring-Boot-Swagger-UI
    @GetMapping
    public String api() {
        return "redirect:/swagger-ui/index.html";
    }
}
