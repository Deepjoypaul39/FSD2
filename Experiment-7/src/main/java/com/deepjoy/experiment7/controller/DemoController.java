package com.deepjoy.experiment7.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class DemoController {

    @GetMapping("/public/hello")
    public Map<String, String> publicApi() {
        return Map.of("message", "Public API");
    }

    @GetMapping("/user/profile")
    public Map<String, String> userApi() {
        return Map.of("message", "User API");
    }

    @GetMapping("/admin/dashboard")
    public Map<String, String> adminApi() {
        return Map.of("message", "Admin API");
    }
}