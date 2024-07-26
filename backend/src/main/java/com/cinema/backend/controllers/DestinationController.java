package com.cinema.backend.controllers;

import com.cinema.backend.models.Destination;
import com.cinema.backend.services.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/destinations")
public class DestinationController {

    @Autowired
    private DestinationService service;

    @GetMapping
    public List<Destination> getAllDestinations() {
        return service.getAllDestinations();
    }

    @GetMapping("/{id}")
    public Destination getDestinationById(@PathVariable Long id) {
        return service.getDestinationById(id);
    }

    @PostMapping
    public Destination createDestination(@RequestBody Destination destination) {
        return service.saveDestination(destination);
    }
}
