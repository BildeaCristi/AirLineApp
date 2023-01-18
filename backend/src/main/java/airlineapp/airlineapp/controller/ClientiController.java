package airlineapp.airlineapp.controller;

import airlineapp.airlineapp.entity.Clienti;
import airlineapp.airlineapp.service.ClientiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/clienti")
public class ClientiController {

    @Autowired
    private final ClientiService clientService;

    @Autowired
    public ClientiController(ClientiService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    public void addPersoana(@RequestBody Clienti c) {
        clientService.addClienti(c);
    }

    @GetMapping(path = "all")
    public List<Clienti> getAllClienti() {
        return clientService.getAllClienti();
    }

    @GetMapping(path = "/4a")
    public List<Object[]> getDetaliiCalatorie() {
        return clientService.getDetaliiCalatorie();
    }

    @GetMapping(path = "/5a")
    public List<Object[]> getBileteCostMic() {
        return clientService.getBileteCostMic();
    }

    @GetMapping(path = "/5b")
    public List<Object[]> getStatutBilete() {
        return clientService.getStatutBilete();
    }
    @GetMapping(path = "/6b")
    public List<Object[]> getValBilete() {
        return clientService.getValBilete();
    }

    @DeleteMapping(path = "/7b")
    public void deleteClientiBilete() {
        clientService.deleteClientiBilete();
    }


}
