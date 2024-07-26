package com.cinema.backend;

import com.cinema.backend.models.Destination;
import com.cinema.backend.services.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    @Autowired
    private DestinationService service;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        service.saveDestination(new Destination(1L, "Agra", "Agra is a city in northern India, known for the Taj Mahal, a white marble mausoleum built by Mughal emperor Shah Jahan. Agra also has other historic and architectural wonders.", "https://cdn.thecodehelp.in/Agra.jpeg", 35758f));
        service.saveDestination(new Destination(2L, "Jaipur", "Jaipur, the capital of Rajasthan, is known for its pink-hued buildings and palaces. It is also famous for its textiles, handicrafts, and cuisine.", "https://cdn.thecodehelp.in/Jaipur.jpeg", 82560f));
        service.saveDestination(new Destination(3L, "Goa", "Goa, on India's western coast, is known for its beaches, nightlife, and Portuguese-influenced architecture. It is also famous for its spicy seafood dishes.", "https://cdn.thecodehelp.in/Goa.jpeg", 29695f));
        service.saveDestination(new Destination(4L, "Varanasi", "Varanasi, on the banks of the Ganges, is a holy city for Hindus. It is known for its ancient temples, alleyways, and colorful festivals.", "https://cdn.thecodehelp.in/Varanasi.jpeg", 31095f));
        service.saveDestination(new Destination(5L, "Darjeeling", "Darjeeling, in West Bengal, is known for its tea gardens, views of the Himalayas, and colonial architecture. It is also famous for the Darjeeling Himalayan Railway.", "https://cdn.thecodehelp.in/Darjeeling.jpeg", 78595f));
        service.saveDestination(new Destination(6L, "Jaisalmer", "Jaisalmer, in Rajasthan, is known for its sandstone architecture and location in the Thar Desert. The city has impressive palaces and unique cultural traditions.", "https://cdn.thecodehelp.in/Jaisalmer.jpeg", 68595f));
        service.saveDestination(new Destination(7L, "Kochi", "Kochi, a port city in Kerala, has historic connections to trade. It is home to several stunning churches, synagogues, and mosques, and has a rich culinary tradition.", "https://cdn.thecodehelp.in/Kochi.jpeg", 68595f));
    }

}
