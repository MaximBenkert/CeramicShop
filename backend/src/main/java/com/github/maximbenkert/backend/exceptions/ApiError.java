package com.github.maximbenkert.backend.exceptions;

import java.time.Instant;

public record ApiError(
        String message,
        Instant timestamp
) {
}
