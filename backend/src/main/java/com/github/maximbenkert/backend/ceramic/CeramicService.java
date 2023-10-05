package com.github.maximbenkert.backend.ceramic;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
