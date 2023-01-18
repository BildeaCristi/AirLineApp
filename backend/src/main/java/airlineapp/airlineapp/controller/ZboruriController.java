package airlineapp.airlineapp.controller;

import airlineapp.airlineapp.entity.Zboruri;
import airlineapp.airlineapp.service.ZboruriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/zboruri")
public class ZboruriController {
    @Autowired
    private final ZboruriService zboruriService;

    @Autowired
    public ZboruriController(ZboruriService zboruriService) {
        this.zboruriService = zboruriService;
    }

    @PostMapping
    public void addZboruri(@RequestBody Zboruri z){
        zboruriService.addZboruri(z);
    }
    @GetMapping("/all")
    public List<Zboruri> getAllZboruri(){
        return zboruriService.getAllZboruri();
    }

    @GetMapping(path="/3b")
    public List<Object[]>getAparatDeZbor(){
        return zboruriService.getAparatDeZbor();
    }

}
