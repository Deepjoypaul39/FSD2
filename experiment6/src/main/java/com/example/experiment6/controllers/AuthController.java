package com.example.experiment6.controllers;

import com.example.experiment6.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    private JwtUtil jwtUtil = new JwtUtil();

    // LOGIN API
    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password) {

        if (username.equals("admin") && password.equals("admin")) {
            return jwtUtil.generateToken(username);
        }

        return "Invalid credentials";
    }

    // PROTECTED API
    @GetMapping("/protected")
    public String protectedRoute() {
        return "This is protected API";
    }
}