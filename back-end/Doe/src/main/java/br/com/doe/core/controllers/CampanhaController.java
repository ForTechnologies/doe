package br.com.doe.core.controllers;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.services.CampanhaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController @RequestMapping("/campanhas")  @AllArgsConstructor
public class CampanhaController {
    private CampanhaService service;
    @PostMapping
    public ResponseEntity<?> criar(@RequestBody @Valid CampanhaDto novaCampanha) {
        service.criar(novaCampanha);
        return new ResponseEntity<>("Campanha cadastrada com sucesso", HttpStatus.CREATED);
    }

    @GetMapping("/{idOng}")
    public ResponseEntity<List<CampanhaDto>> buscaCampanhasPorOng(@PathVariable int idOng){
        return ResponseEntity.status(200).body( service.getCampanhasPorOng(idOng));
    }

}
