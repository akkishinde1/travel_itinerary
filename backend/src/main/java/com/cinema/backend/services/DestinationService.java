package com.cinema.backend.services;

import com.cinema.backend.models.Destination;
import com.cinema.backend.repositories.DestinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationService {

    @Autowired
    private DestinationRepository repository;

    public List<Destination> getAllDestinations() {
        return repository.findAll();
    }

    public Destination getDestinationById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Destination saveDestination(Destination destination) {
        return repository.save(destination);
    }
}
