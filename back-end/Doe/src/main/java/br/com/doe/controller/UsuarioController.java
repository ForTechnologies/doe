package br.com.doe.controller;

import br.com.doe.controller.dtos.UsuarioDto;
import br.com.doe.controller.exception.NotFoundException;
import br.com.doe.service.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@AllArgsConstructor
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    //@Autowired
    private UsuarioService service;


    @PostMapping
    public ResponseEntity<String> criar(@RequestBody @Valid UsuarioDto novoUsuario) {
        service.criar(novoUsuario);
        return new ResponseEntity<>("Usuário cadastrado", HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<?> buscar(@PathVariable String email) {
        try {
            UsuarioDto dto = service.buscar(email);
            return ResponseEntity.status(200).body(dto);
        } catch (ChangeSetPersister.NotFoundException ex) {
            throw new NotFoundException("Usuário não encontrado");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable int id) {
        service.deletar(id);
        return ResponseEntity.status(200).build();
    }

}
