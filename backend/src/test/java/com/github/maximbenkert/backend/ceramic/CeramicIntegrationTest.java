package com.github.maximbenkert.backend.ceramic;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)

class CeramicIntegrationTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    Ceramic ceramicWithoutId = new Ceramic(null, "Vase", "Schöne Vase", new BigDecimal("29.99"));



    @Test
    void getAllCeramics_shouldReturnEmptyList_whenRepoIsEmpty() throws Exception {
        mockMvc.perform(get("/api/ceramics"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    void addCeramic_shouldAddCeramicToDatabase () throws Exception {
        mockMvc.perform(post("/api/ceramics")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(ceramicWithoutId)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").exists()) // Überprüfen Sie, ob die Antwort ein ID-Feld enthält
                .andExpect(jsonPath("$.name").value("Vase")) // Überprüfen Sie, ob das Name-Feld korrekt ist
                .andExpect(jsonPath("$.description").value("Schöne Vase")) // Überprüfen Sie, ob das Description-Feld korrekt ist
                .andExpect(jsonPath("$.price").value(29.99)); // Ü

    }
}