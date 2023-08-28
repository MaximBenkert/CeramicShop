package com.github.maximbenkert.backend.ceramic;

import org.springframework.data.annotation.Id;

public record Ceramic(
        @Id
        String id,
        String name,
        String description,
        double price
) {


}
