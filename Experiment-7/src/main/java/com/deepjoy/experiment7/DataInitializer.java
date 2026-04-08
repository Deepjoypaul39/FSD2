package com.deepjoy.experiment7;

import com.deepjoy.experiment7.entity.UserEntity;
import com.deepjoy.experiment7.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder;

    public DataInitializer(UserRepository repo, BCryptPasswordEncoder encoder) {
        this.repo = repo;
        this.encoder = encoder;
    }

    @Override
    public void run(String... args) {

        if (repo.count() == 0) {

            UserEntity user = new UserEntity();
            user.setUsername("user1");
            user.setPassword(encoder.encode("user123"));
            user.setRole("ROLE_USER");
            repo.save(user);

            UserEntity admin = new UserEntity();
            admin.setUsername("admin1");
            admin.setPassword(encoder.encode("admin123"));
            admin.setRole("ROLE_ADMIN");
            repo.save(admin);
        }
    }
}