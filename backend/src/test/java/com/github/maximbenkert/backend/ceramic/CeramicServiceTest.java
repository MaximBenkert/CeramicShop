package com.github.maximbenkert.backend.ceramic;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

class CeramicServiceTest {

    CeramicService ceramicService;
    CeramicRepository ceramicRepositoryMock;
    List<Ceramic> mockCeramics;
    @BeforeEach
    public void setUp () {
        ceramicRepositoryMock = Mockito.mock(CeramicRepository.class);

        mockCeramics = Arrays.asList(
                new Ceramic("1", "Vase", "Handgemachte Vase", new BigDecimal("42.99")),
                new Ceramic("2", "Teller", "Schöner Teller", new BigDecimal("19.99"))
        );

        ceramicService = new CeramicService(ceramicRepositoryMock);
    }

    @Test
    void getAllCeramics_shouldReturn_listOfAllCeramics() {
        //GIVEN
        Mockito.when(ceramicRepositoryMock.findAll()).thenReturn(mockCeramics);
        //WHEN
        List<Ceramic> actual = ceramicService.getAllCeramics();

        //THEN
        assertEquals(mockCeramics, actual);
    }

    @Test
    void addCeramic_shouldAdd_CeramicToList (){
        //GIVEN
        Ceramic testCeramicWithoutId = new Ceramic(null, "Vase", "schöne Vase", new BigDecimal("44.55"));
        Ceramic testCeramicWithId = new Ceramic ("111", "Vase", "schöne Vase", new BigDecimal("44.55"));

        Mockito.when(ceramicRepositoryMock.save(testCeramicWithoutId))
                .thenReturn(testCeramicWithId);
        //WHEN
        Ceramic actual = ceramicService.addCeramic(testCeramicWithoutId);


        //THEN
        verify(ceramicRepositoryMock).save(testCeramicWithoutId);
        assertEquals(testCeramicWithId, actual);
        assertEquals("111", actual.id());


    }
}