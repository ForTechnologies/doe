package br.com.doe.controller;



import br.com.doe.controller.dtos.UsuarioAutenticado;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/login")
public class LoginController {
    @PostMapping
    public ResponseEntity<?> login(){
        return ResponseEntity.status(200).body(new UsuarioAutenticado());
    }

}
