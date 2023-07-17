package club.super_coding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {"club.super_coding.entity"})
public class SuperCodingApplication {

    public static void main(String[] args) {
        SpringApplication.run(SuperCodingApplication.class, args);
    }

}
