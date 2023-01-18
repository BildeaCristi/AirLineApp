package airlineapp.airlineapp.service;

import airlineapp.airlineapp.entity.Zboruri;
import airlineapp.airlineapp.repository.ZboruriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZboruriService {
    private final ZboruriRepository zboruriRepository;
    @Autowired
    public ZboruriService(ZboruriRepository zboruriRepository) {
        this.zboruriRepository = zboruriRepository;
    }
    public List<Zboruri> getAllZboruri(){
        return zboruriRepository.getAllZboruri();
    }

    public List<Object[]> getAparatDeZbor(){ return zboruriRepository.getAparatDeZbor(); }

    public void addZboruri(Zboruri z) {
    }
}
