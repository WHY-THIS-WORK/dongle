package club.super_coding.controller;

import club.super_coding.entity.Test_db;
import club.super_coding.service.TestService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import java.util.Collection;

@ApiIgnore
@RestController
@RequestMapping("/")
public class MainController {
    //Controller
    @Autowired
    TestService testService;

    @GetMapping("/main")
    public Collection<Test_db> getMain(Model model) {
        return testService.gettitle();
    }


    @PostMapping("/main")
    public String PostMain(String str) {
        return str;
    }
}
