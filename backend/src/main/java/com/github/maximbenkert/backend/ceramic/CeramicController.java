package com.github.maximbenkert.backend.ceramic;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ceramics")
public class CeramicController {

    @GetMapping
    String ceramic(){
        return "Ton ist Ton";
    }
}
