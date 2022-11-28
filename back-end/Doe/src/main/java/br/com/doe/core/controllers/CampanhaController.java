package br.com.doe.core.controllers;

import br.com.doe.core.controllers.exception.NotFoundException;
import br.com.doe.core.controllers.mappers.CampanhaMapper;
import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.repositories.CampanhaRepository;
import br.com.doe.core.services.CampanhaService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController @RequestMapping("/campanhas")  @AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class CampanhaController {
    private CampanhaService service;

    @PostMapping()
    public ResponseEntity<?> criar(@RequestBody @Valid CampanhaDto novaCampanha) {
        service.criar(novaCampanha);
        return new ResponseEntity<>("Campanha cadastrada com sucesso", HttpStatus.CREATED);
    }

    @GetMapping("/{idOng}")
    public ResponseEntity<List<CampanhaDto>> buscaCampanhasPorOng(@PathVariable int idOng){
        return ResponseEntity.status(200).body(service.buscarCampanhasPorOng(idOng));
    }

    @PutMapping("/{idCampanha}")
    public ResponseEntity<CampanhaDto> atualizaCampanha(@PathVariable int idCampanha, @RequestBody CampanhaDto campanha){
        return ResponseEntity.status(200).body(service.atualizar(idCampanha, campanha));
    }

    //@Secured("ADMIN")
    @DeleteMapping("/{idCampanha}")
    public ResponseEntity<?> deletar(@PathVariable int idCampanha){
        service.deletar(idCampanha);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
