package com.github.maximbenkert.backend.ceramic;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/ceramics")
@RequiredArgsConstructor
public class CeramicController {

    private final CeramicService ceramicService;

    @GetMapping
    List<Ceramic> getAllCeramics(){return ceramicService.getAllCeramics();}
}
