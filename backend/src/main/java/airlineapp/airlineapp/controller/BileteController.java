package airlineapp.airlineapp.controller;

import airlineapp.airlineapp.entity.Bilete;
import airlineapp.airlineapp.service.BileteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path="/bilete")
public class BileteController {
    @Autowired
    private final BileteService bileteService;

    @Autowired
    public BileteController(BileteService bileteService) {
        this.bileteService = bileteService;
    }

    @PostMapping
    public void addBilete(@RequestBody Bilete b){
        bileteService.addBilete(b);
    }
    @GetMapping(path="/all")
    public List<Bilete> getAllBilete(){
        return bileteService.getAllBilete();
    }

    @GetMapping(path="/3a")
    public List<Object[]>getClasaSursaDestinatia(){
        return bileteService.getClasaSursaDestinatia();
    }

}
