package br.com.doe.controller.dtos;

import lombok.Data;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
public class UsuarioAutenticado {
    private String usuario;
    private boolean autenticado;
    private Collection<? extends GrantedAuthority> autorizacoes;

    public UsuarioAutenticado() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        this.usuario = auth.getName();
        this.autenticado = auth.isAuthenticated();
        this.autorizacoes = auth.getAuthorities();
    }
}
