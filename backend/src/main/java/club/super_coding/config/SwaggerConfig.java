package club.super_coding.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;


import java.util.HashSet;
import java.util.Set;

@Configurable // 스프링 실행시 설정파일 읽어드리기 위한 어노테이션
@EnableWebMvc // Swagger 를 사용하겠다는 어노테이션

//스웨거 설정 클래스
public class SwaggerConfig extends WebMvcConfigurationSupport {
    /*
        이 때, 해당 패키지 내에 포함되지만 Swagger 문서로 만들고 싶지 않을 경우
        (예를들어 테스트용 컨트롤러나 api 작업자에게 보이기 싫은 api 등) 해당
        컨트롤러에 @ApiIgnore 어노테이션을 추가하여 제외시킬 수 있음.
        */

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/swagger-ui/**").addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/springfox-swagger-ui/");    }

    private ApiInfo swaggerInfo() {
        return new ApiInfoBuilder().title("Iot API").description("Iot API Docs").build();
    }

    @Bean
    public Docket swaggerApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .consumes(getConsumeContentTypes())
                .produces(getProduceContentTypes())
                .apiInfo(swaggerInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("club.super_coding/controller/*"))
                //스프링 컨트롤러 폴더 지정으로 REST API를 찾을 수 있게 도와줌
                .paths(PathSelectors.any())
                .build()
                .useDefaultResponseMessages(false);
    }


    private Set<String> getConsumeContentTypes() {
        Set<String> consumes = new HashSet<>();
        consumes.add("application/json;charset=UTF-8");
        consumes.add("application/x-www-form-urlencoded");
        return consumes;
    }

    private Set<String> getProduceContentTypes() {
        Set<String> produces = new HashSet<>();
        produces.add("application/json;charset=UTF-8");
        return produces;
    }
}
