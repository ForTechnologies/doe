package br.com.doe.controller;

import br.com.doe.controller.dtos.OngDto;
import br.com.doe.controller.dtos.PermissaoDto;
import br.com.doe.controller.dtos.UsuarioAutenticado;
import br.com.doe.controller.dtos.UsuarioDto;
import br.com.doe.entities.Permissao;
import br.com.doe.entities.TipoPermissao;
import br.com.doe.entities.Usuario;
import br.com.doe.service.OngService;
import br.com.doe.service.PermissaoUsuarioService;
import br.com.doe.service.UsuarioService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/ongs")
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

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable int id){
        service.deletar(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
