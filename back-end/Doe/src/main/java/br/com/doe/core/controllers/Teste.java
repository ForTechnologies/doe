package br.com.doe.core.controllers;

import br.com.doe.core.dtos.UsuarioAutenticado;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/teste")
public class Teste {
    @GetMapping
    public ResponseEntity<?> teste(){
        return ResponseEntity.status(200).body(new UsuarioAutenticado());
    }
}

