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
    List<Ceramic> mockCeramics;
    String notExistingTestId = "1234";
    @BeforeEach
    public void setUp () {
        ceramicRepositoryMock = Mockito.mock(CeramicRepository.class);
        ceramicService = new CeramicService(ceramicRepositoryMock);

        Ceramic testCeramic1 = new Ceramic("1", "Vase", "Handgemachte Vase", new BigDecimal("42.99"));
        Ceramic testCeramic2 = new Ceramic("2", "Teller", "Schöner Teller", new BigDecimal("19.99"));

        mockCeramics = Arrays.asList(testCeramic1, testCeramic2);
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
        assertEquals(testCeramicWithId.id(), actual.id());
    }

    @Test
    void getCeramicById_shouldReturnCeramicById (){
        //GIVEN
        Mockito.when(ceramicRepositoryMock.findById(mockCeramics.get(0).id()))
                .thenReturn(Optional.of(mockCeramics.get(0)));
        //WHEN
        Ceramic actual = ceramicService.getCeramicById(mockCeramics.get(0).id());

        //THEN
        verify(ceramicRepositoryMock).findById(mockCeramics.get(0).id());
        assertEquals(actual, mockCeramics.get(0));
    }

    @Test
    void getCeramicById_shouldThrowException_whenInvalidId () {
        //GIVEN
        String errorMessage = "Ceramic with Id " + notExistingTestId + " not found!";

        Mockito.when(ceramicRepositoryMock.findById(notExistingTestId))
                .thenThrow(new NoSuchElementException(errorMessage));

        //WHEN
        Exception exception = assertThrows(NoSuchElementException.class,
                () -> ceramicService.getCeramicById(notExistingTestId));
        //THEN
        verify(ceramicRepositoryMock).findById(notExistingTestId);
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    void deleteCeramic_shouldDeleteCeramic () {
        //GIVEN
        Mockito.when(ceramicRepositoryMock.existsById(mockCeramics.get(0).id()))
                .thenReturn(true);

        //WHEN
        ceramicService.deleteCeramic(mockCeramics.get(0).id());

        //THEN
        verify(ceramicRepositoryMock).existsById(mockCeramics.get(0).id());
        verify(ceramicRepositoryMock).deleteById(mockCeramics.get(0).id());
    }

}