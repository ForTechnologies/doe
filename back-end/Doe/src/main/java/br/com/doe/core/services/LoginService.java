package br.com.doe.service;


import br.com.doe.controller.mappers.UsuarioMapper;
import br.com.doe.repositories.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@AllArgsConstructor
@Service
public class LoginService implements UserDetailsService  {

    UsuarioRepository repositorio;
    UsuarioMapper mapper;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repositorio.findByEmail(email)
                .map(mapper::entityToDto)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

    }



}

