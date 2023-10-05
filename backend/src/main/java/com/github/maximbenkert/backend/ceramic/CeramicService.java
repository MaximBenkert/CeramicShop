package com.github.maximbenkert.backend.ceramic;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CeramicService {

    private final CeramicRepository ceramicRepository;

    public List<Ceramic> getAllCeramics () {
        return ceramicRepository.findAll();
    }

    public Ceramic addCeramic(CeramicDTO ceramicDTO) {
        Ceramic ceramic = new Ceramic(null, ceramicDTO.name(), ceramicDTO.description(), ceramicDTO.price());
        return  ceramicRepository.save(ceramic);
    }

    public Ceramic getCeramicById(String id) {
        String errorMessage = "Ceramic with Id " + id + " not found!";
        return ceramicRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException(errorMessage));
    }
}
