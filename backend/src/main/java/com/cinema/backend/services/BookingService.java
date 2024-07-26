package com.cinema.backend.services;

import com.cinema.backend.models.Booking;
import com.cinema.backend.models.User;
import com.cinema.backend.repositories.BookingRepository;
import com.cinema.backend.repositories.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Transactional
    public Booking saveBooking(Booking booking) {
        // Ensure the user is saved
        User user = booking.getUser();
        if (user != null && user.getId() == null) {
            userRepository.save(user);
        }

        // Save the booking
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
