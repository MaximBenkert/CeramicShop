package com.github.maximbenkert.backend.ceramic;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ceramics")
@RequiredArgsConstructor
public class CeramicController {

    private final CeramicService ceramicService;

    @GetMapping
    List<Ceramic> getAllCeramics(){return ceramicService.getAllCeramics();}

    @PostMapping
    Ceramic addCeramic(@RequestBody Ceramic ceramic) {
        return ceramicService.addCeramic(ceramic);
    }

}


