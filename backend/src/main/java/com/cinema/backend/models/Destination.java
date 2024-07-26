package com.cinema.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Destination {

    @Id
    private Long id;
    private String name;
    @Column(length = 500)
    private String info;
    private String image;
    private float price;

    // Getters and setters
}

