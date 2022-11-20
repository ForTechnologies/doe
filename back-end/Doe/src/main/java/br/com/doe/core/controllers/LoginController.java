package br.com.doe.core.controllers;

import br.com.doe.core.dtos.UsuarioAutenticado;
import br.com.doe.core.dtos.UsuarioDto;
import br.com.doe.core.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.codec.Utf8;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService service;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody UsuarioDto user){
        String token = ""+ user.getEmail() +":" + user.getSenha();
        token = Base64.getEncoder().encodeToString(token.getBytes());

        //TODO verificar no banco se existe esse usuário com essa senha (findByEmailAndPasswaord(email, senha))

        Map<String, String> authenticateUserToken = new HashMap<>();
        authenticateUserToken.put("token", token);

        return ResponseEntity.status(200).body(authenticateUserToken);
    }

}
