package br.com.doe.core.controllers.mappers;


import br.com.doe.core.dtos.PermissaoDto;
import br.com.doe.core.entities.Permissao;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PermissaoUsuarioMapper {
    Permissao dtoToEntity(PermissaoDto dto);
}
