package com.github.maximbenkert.backend.ceramic;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ceramics")
@RequiredArgsConstructor
public class CeramicController {

    private final CeramicService ceramicService;

    @GetMapping
    List<Ceramic> getAllCeramics() {
        return ceramicService.getAllCeramics();
    }

    @PostMapping
    Ceramic addCeramic(@RequestBody @Valid CeramicDTO ceramicDTO) {
        return ceramicService.addCeramic(ceramicDTO);
    }

    @GetMapping("/{id}")
    Ceramic getCeramicById(@PathVariable String id) {
        return ceramicService.getCeramicById(id);
    }
    @DeleteMapping("/{id}")
    void deleteCeramic (@PathVariable String id) {
        if (id.isBlank()) {
            throw new IllegalArgumentException("Id is empty");
        }
        ceramicService.deleteCeramic(id);
    }
}


