package club.super_coding.service;

import club.super_coding.entity.Test_db;
import club.super_coding.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class TestService {

    @Autowired
    TestRepository testRepository;
    
    public Collection<Test_db> gettitle(){
        return testRepository.findAll();
    }
}
