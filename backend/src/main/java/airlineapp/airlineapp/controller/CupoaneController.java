package airlineapp.airlineapp.controller;

import airlineapp.airlineapp.entity.Cupoane;
import airlineapp.airlineapp.service.CupoaneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/cupoane")
public class CupoaneController {
    @Autowired
    private final CupoaneService cupoaneService;

    @Autowired
    public CupoaneController(CupoaneService cupoaneService) {
        this.cupoaneService = cupoaneService;
    }

    @PostMapping
    public void addCupoane(@RequestBody Cupoane c) {
        cupoaneService.addCupoane(c);
    }

    @GetMapping("/all")
    public List<Cupoane> getAllCupoane() {
        return cupoaneService.getAllCupoane();
    }

    @GetMapping(path = "/4b")
    public List<Object[]> getPerechiZboruri() {
        return cupoaneService.getPerechiZboruri();
    }
    @GetMapping(path = "/6a")
    public List<Object[]> getValoareZboruri() {
        return cupoaneService.getValoareZboruri();
    }


}
