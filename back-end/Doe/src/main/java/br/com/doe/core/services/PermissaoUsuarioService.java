package br.com.doe.core.services;

import br.com.doe.core.controllers.mappers.PermissaoUsuarioMapper;
import br.com.doe.core.entities.Permissao;
import br.com.doe.core.repositories.PermissaoUsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class PermissaoUsuarioService {
    private PermissaoUsuarioRepository repositorio;
    private PermissaoUsuarioMapper mapper;

    public void criar(Permissao permissao){
        repositorio.save(permissao);
    }
}
