package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.UsuarioDto;
import br.com.doe.entities.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    UsuarioDto entityToDto(Usuario usuario);
    Usuario dtoToEntity(UsuarioDto usuarioDto);
}
