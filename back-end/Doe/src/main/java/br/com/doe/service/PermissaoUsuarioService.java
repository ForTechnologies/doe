package br.com.doe.service;

import br.com.doe.controller.dtos.PermissaoDto;
import br.com.doe.controller.mappers.PermissaoUsuarioMapper;
import br.com.doe.entities.Permissao;
import br.com.doe.repositories.PermissaoUsuarioRepository;
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
