package br.com.doe.core.services;


import br.com.doe.core.controllers.mappers.UsuarioMapper;
import br.com.doe.core.dtos.UsuarioDto;
import br.com.doe.core.entities.Usuario;
import br.com.doe.core.repositories.UsuarioRepository;
import br.com.doe.core.services.exceptions.ConflictException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;

@Service
@AllArgsConstructor
public class UsuarioService {
    private UsuarioRepository repositorio;
    private UsuarioMapper mapper;

    @Autowired
    PasswordEncoder passwordEncoder;

    public void criar(@Valid UsuarioDto dto) {
        String senhaCriptografada = passwordEncoder.encode(dto.getSenha());
        dto.setSenha(senhaCriptografada);
        Usuario entity = mapper.dtoToEntity(dto);
        try {
            repositorio.save(entity);
        }catch (DataIntegrityViolationException ex){
            throw new ConflictException("Email já cadastrado");
        }
    }

    public UsuarioDto buscar(String email) throws ChangeSetPersister.NotFoundException {
        return repositorio.findByEmail(email)
                                    .map(mapper::entityToDto)
                                    .orElseThrow(ChangeSetPersister.NotFoundException::new);
    }

    public Usuario buscarUsuario(String email) throws ChangeSetPersister.NotFoundException {
        return repositorio.findByEmail(email)
                .orElseThrow(ChangeSetPersister.NotFoundException::new);
    }

    public void deletar(int id){
        repositorio.deleteById(id);
    }

    public UsuarioDto atualizar(long id, UsuarioDto usuario){
            usuario.setId(id);
            Usuario entity = mapper.dtoToEntity(usuario);
            repositorio.save(entity);
            return usuario;
    }



}
