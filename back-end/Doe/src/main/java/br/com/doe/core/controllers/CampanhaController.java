package br.com.doe.core.controllers;

import br.com.doe.core.controllers.mappers.CampanhaMapper;
import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.repositories.CampanhaRepository;
import br.com.doe.core.services.CampanhaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController @RequestMapping("/campanhas")  @AllArgsConstructor
public class CampanhaController {
    private CampanhaService service;

    private CampanhaRepository repositorio;

    private CampanhaMapper mapper;
    @PostMapping()
    public ResponseEntity<?> criar(@RequestBody @Valid CampanhaDto novaCampanha) {
        service.criar(novaCampanha);
        return new ResponseEntity<>("Campanha cadastrada com sucesso", HttpStatus.CREATED);
    }

    @GetMapping("/{idOng}")
    public ResponseEntity<List<CampanhaDto>> buscaCampanhasPorOng(@PathVariable int idOng){
        return ResponseEntity.status(200).body(service.getCampanhasPorOng(idOng));
    }

    @PutMapping("/{idCampanha}")
    public ResponseEntity<CampanhaDto> atualizaCampanha(@PathVariable int id, @RequestBody CampanhaDto campanha){
        if(!repositorio.existsById(id)){
            return ResponseEntity.status(404).build();
        }
        Campanha entidade = mapper.dtoToEntity(campanha);
        entidade.setId(id);
        repositorio.save(entidade);
        return ResponseEntity.status(200).body(campanha);
    }

    @Secured("ADMIN")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable int id){
        service.deletar(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }



}
