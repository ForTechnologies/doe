package br.com.doe.core.controllers.mappers;


import br.com.doe.core.dtos.UsuarioDto;
import br.com.doe.core.entities.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {
    UsuarioDto entityToDto(Usuario usuario);
    Usuario dtoToEntity(UsuarioDto usuarioDto);
}
