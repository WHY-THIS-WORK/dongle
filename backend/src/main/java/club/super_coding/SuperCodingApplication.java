package club.super_coding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
@EntityScan(basePackages = {"club.super_coding.entity"})
<<<<<<< HEAD
public class SuperCodingApplication {
    //Cors 정책
=======

public class SuperCodingApplication {
>>>>>>> develop
    public static void main(String[] args) {
        Logger logger = LoggerFactory.getLogger(SuperCodingApplication.class);
        SpringApplication.run(SuperCodingApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry){
                registry.addMapping("/**")
                        .allowedOriginPatterns();

            }
        };
    }

}
