package com.github.maximbenkert.backend.ceramic;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document("ceramics")
public record Ceramic(
        @Id
        String id,
        @NotBlank
        @Size(min = 3, max = 32)
        String name,
        String description,
        BigDecimal price
) {


}
