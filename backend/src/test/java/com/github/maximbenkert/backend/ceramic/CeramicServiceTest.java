package com.github.maximbenkert.backend.ceramic;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

class CeramicServiceTest {

    CeramicService ceramicService;
    CeramicRepository ceramicRepositoryMock;
    List<Ceramic> mockCeramics;String testIdOne = "1234";
    @BeforeEach
    public void setUp () {
        ceramicRepositoryMock = Mockito.mock(CeramicRepository.class);

        Ceramic testCeramic1 = new Ceramic("1", "Vase", "Handgemachte Vase", new BigDecimal("42.99"));
        Ceramic testCeramic2 = new Ceramic("2", "Teller", "Schöner Teller", new BigDecimal("19.99"));

        mockCeramics = Arrays.asList(testCeramic1, testCeramic2);

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
        CeramicDTO testCeramicDTOWithoutId = new CeramicDTO(null, "Vase", "schöne Vase", new BigDecimal("44.55"));
        Ceramic testCeramicWithoutId = new Ceramic(null, "Vase", "schöne Vase", new BigDecimal("44.55"));
        Ceramic testCeramicWithId = new Ceramic ("111", "Vase", "schöne Vase", new BigDecimal("44.55"));

        Mockito.when(ceramicRepositoryMock.save(testCeramicWithoutId))
                .thenReturn(testCeramicWithId);
        //WHEN
        Ceramic actual = ceramicService.addCeramic(testCeramicDTOWithoutId);


        //THEN
        verify(ceramicRepositoryMock).save(testCeramicWithoutId);
        assertEquals(testCeramicWithId, actual);
        assertEquals("111", actual.id());
    }

    @Test
    void getCeramicById_shouldReturnCeramicById (){
        //GIVEN
        String idTestCeramic1 = "1";
        Ceramic testCeramic1 = new Ceramic("1", "Vase", "Handgemachte Vase", new BigDecimal("42.99"));
        Mockito.when(ceramicRepositoryMock.findById(idTestCeramic1)).thenReturn(Optional.of(testCeramic1));

        //WHEN
        Ceramic actual = ceramicService.getCeramicById(idTestCeramic1);

        //THEN
        verify(ceramicRepositoryMock).findById(idTestCeramic1);
        assertEquals(actual, testCeramic1);
    }

    @Test
    void getCeramicById_shouldThrowException_whenInvalidId () {
        String errorMessage = "Ceramic with Id " + testIdOne + " not found!";

        Mockito.when(ceramicRepositoryMock.findById(testIdOne))
                .thenThrow(new NoSuchElementException(errorMessage));

        Exception exception = assertThrows(NoSuchElementException.class,
                () -> ceramicService.getCeramicById(testIdOne));

        verify(ceramicRepositoryMock).findById(testIdOne);
        assertEquals(errorMessage, exception.getMessage());
    }

}