package com.cinema.backend.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    private Integer numTravelers;
    private String selectedDate;
    private Float totalPrice;

    public Booking() {
    }

    public Booking(Long id, User user, Destination destination, Integer numTravelers, String selectedDate, Float totalPrice) {
        this.id = id;
        this.user = user;
        this.destination = destination;
        this.numTravelers = numTravelers;
        this.selectedDate = selectedDate;
        this.totalPrice = totalPrice;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }

    public Integer getNumTravelers() {
        return numTravelers;
    }

    public void setNumTravelers(Integer numTravelers) {
        this.numTravelers = numTravelers;
    }

    public String getSelectedDate() {
        return selectedDate;
    }

    public void setSelectedDate(String selectedDate) {
        this.selectedDate = selectedDate;
    }

    public Float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", user=" + user +
                ", destination=" + destination +
                ", numTravelers=" + numTravelers +
                ", selectedDate='" + selectedDate + '\'' +
                ", totalPrice=" + totalPrice +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(id, booking.id) &&
                Objects.equals(user, booking.user) &&
                Objects.equals(destination, booking.destination) &&
                Objects.equals(numTravelers, booking.numTravelers) &&
                Objects.equals(selectedDate, booking.selectedDate) &&
                Objects.equals(totalPrice, booking.totalPrice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, destination, numTravelers, selectedDate, totalPrice);
    }
}
