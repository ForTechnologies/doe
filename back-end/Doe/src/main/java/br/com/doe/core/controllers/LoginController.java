package br.com.doe.core.controllers;

import br.com.doe.core.dtos.UsuarioAutenticado;
import br.com.doe.core.dtos.UsuarioDto;
import br.com.doe.core.repositories.UsuarioRepository;
import br.com.doe.core.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.codec.Utf8;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @Autowired
    LoginService service;


    @PostMapping
    public ResponseEntity<?> login(@RequestBody UsuarioDto user){
        Boolean usuarioValidado = service.login(user);

        if(usuarioValidado){
            String token = ""+ user.getEmail() +":" + user.getSenha();
            token = Base64.getEncoder().encodeToString(token.getBytes());

            Map<String, String> authenticateUserToken = new HashMap<>();
            authenticateUserToken.put("token", token);
            return ResponseEntity.status(200).body(authenticateUserToken);
        }
            return ResponseEntity.status(400).build();
    }

}
