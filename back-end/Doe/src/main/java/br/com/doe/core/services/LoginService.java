package br.com.doe.core.services;


import br.com.doe.core.controllers.mappers.UsuarioMapper;
import br.com.doe.core.dtos.UsuarioDto;
import br.com.doe.core.repositories.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;


@AllArgsConstructor
@Service
public class LoginService implements UserDetailsService  {

    UsuarioRepository repositorio;
    UsuarioMapper mapper;
    PasswordEncoder passwordEncoder;

    public Boolean login(UsuarioDto user){
        String senhaCriptografada = passwordEncoder.encode(user.getSenha());

        var usuarioLogado = repositorio.findByEmail(user.getEmail());

        if(usuarioLogado.isEmpty() || !passwordEncoder.matches(user.getSenha(), usuarioLogado.get().getSenha())){
            return false;
        }


        return true;
    }
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repositorio.findByEmail(email)
                .map(mapper::entityToDto)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

    }



}

