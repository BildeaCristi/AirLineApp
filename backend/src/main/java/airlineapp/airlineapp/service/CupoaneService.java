package airlineapp.airlineapp.service;

import airlineapp.airlineapp.entity.Cupoane;
import airlineapp.airlineapp.repository.CupoaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CupoaneService {
    private final CupoaneRepository cupoaneRepository;
    @Autowired
    public CupoaneService(CupoaneRepository cupoaneRepository) {
        this.cupoaneRepository = cupoaneRepository;
    }
    public List<Cupoane> getAllCupoane(){
        return cupoaneRepository.getAllCupoane();
    }

    public List<Object[]> getPerechiZboruri(){ return cupoaneRepository.getPerechiZboruri(); }
    public List<Object[]> getValoareZboruri(){ return cupoaneRepository.getValoareZboruri(); }

    public void addCupoane(Cupoane c) {
    }
}

