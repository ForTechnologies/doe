package br.com.doe.core.controllers;


import br.com.doe.core.dtos.OngDto;
import br.com.doe.core.services.OngService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/ongs")
@CrossOrigin(origins = "http://localhost:3000")
public class OngController {
    private OngService service;
    @PostMapping
    public ResponseEntity<?> criar(@RequestBody @Valid OngDto novaOng) throws ChangeSetPersister.NotFoundException {
        service.criar(novaOng);
        return new ResponseEntity<>("Ong cadastrada com sucesso", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> buscarTodas() throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(service.buscarOngs());
    }

    @Secured("ADMIN")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable int id){
        service.deletar(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
