package airlineapp.airlineapp.service;

import airlineapp.airlineapp.entity.Bilete;
import airlineapp.airlineapp.repository.BileteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BileteService {
    private final BileteRepository bileteRepository;

    @Autowired
    public BileteService(BileteRepository bileteRepository) {
        this.bileteRepository = bileteRepository;
    }

    public List<Bilete> getAllBilete() {
        return bileteRepository.getAllBilete();
    }

    public List<Object[]> getClasaSursaDestinatia(){ return bileteRepository.getClasaSursaDestinatia(); }

    public void addBilete(Bilete b) {
    }

}

