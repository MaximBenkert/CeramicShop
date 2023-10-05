package com.github.maximbenkert.backend.ceramic;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;

public record CeramicDTO(

        String id,
        @NotBlank
        @Size(min = 3, max = 32)
        String name,
        String description,
        BigDecimal price
) {
}
