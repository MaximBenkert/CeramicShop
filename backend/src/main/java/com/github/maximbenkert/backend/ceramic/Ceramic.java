package com.github.maximbenkert.backend.ceramic;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document("ceramics")
public record Ceramic(
        @Id
        String id,
        String name,
        String description,
        BigDecimal price
) {


}
