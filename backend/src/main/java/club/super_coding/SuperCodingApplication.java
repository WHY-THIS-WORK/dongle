package club.super_coding;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;


//시큐어리티 보안

@EntityScan(basePackages = {"club.super_coding.entity"})
@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class})
public class SuperCodingApplication {
    public static void main(String[] args) {
        Logger logger = LoggerFactory.getLogger(SuperCodingApplication.class);
        SpringApplication.run(SuperCodingApplication.class, args);



    }


}




