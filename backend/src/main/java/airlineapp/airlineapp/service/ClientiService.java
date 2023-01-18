package airlineapp.airlineapp.service;

import airlineapp.airlineapp.entity.Clienti;
import airlineapp.airlineapp.repository.ClientiRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class ClientiService {
    private final ClientiRepository clientiRepository;

    @Autowired
    public ClientiService(ClientiRepository clientiRepository) {
        this.clientiRepository = clientiRepository;
    }

    public List<Clienti> getAllClienti() {
        return clientiRepository.getAllClienti();
    }

    public List<Object[]> getDetaliiCalatorie() {
        return clientiRepository.getDetaliiCalatorie();
    }

    public List<Object[]> getBileteCostMic() {
        return clientiRepository.getBileteCostMic();
    }

    public List<Object[]> getStatutBilete() {
        return clientiRepository.getStatutBilete();
    }

    public List<Object[]> getValBilete() {
        return clientiRepository.getValBilete();
    }

    public void deleteClientiBilete() {
        clientiRepository.deleteClientiBilete();
    }

    public void addClienti(Clienti c) {
    }
}
