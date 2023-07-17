package club.super_coding.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/김주환")
public class 김주환Controller {

    @GetMapping
    public String get김주환() {

        return "얏호";
    }

}
