package com.github.maximbenkert.backend.ceramic;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CeramicRepository extends MongoRepository <Ceramic, String> {
}
