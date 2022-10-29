package br.com.doe.core.controllers;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.services.CampanhaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController @RequestMapping("/campanhas")  @AllArgsConstructor
public class CampanhaController {
    private CampanhaService service;
    @PostMapping
    public ResponseEntity<?> criar(@RequestBody @Valid CampanhaDto novaCampanha) {
        service.criar(novaCampanha);
        return new ResponseEntity<>("Campanha cadastrada com sucesso", HttpStatus.CREATED);
    }

}
