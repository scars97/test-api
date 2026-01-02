package com.example.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SimpleController {

    @GetMapping("/hello")
    public Map<String, Object> hello() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Hello, World!");
        response.put("status", "success");
        response.put("timestamp", System.currentTimeMillis());
        return response;
    }
}

