package br.com.doe.service;

import br.com.doe.controller.dtos.UsuarioDto;
import br.com.doe.controller.mappers.UsuarioMapper;
import br.com.doe.entities.Usuario;
import br.com.doe.repository.UsuarioRepository;
import br.com.doe.service.exceptions.ConflictException;
import lombok.AllArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UsuarioService {
    private UsuarioRepository repositorio;
    private UsuarioMapper mapper;

    public void criar(UsuarioDto dto) {
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

    public void deletar(int id){
        repositorio.deleteById(id);
    }

}
