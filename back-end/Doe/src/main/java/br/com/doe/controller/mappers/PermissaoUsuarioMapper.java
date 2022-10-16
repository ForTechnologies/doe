package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.PermissaoDto;
import br.com.doe.entities.Permissao;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PermissaoUsuarioMapper {
    Permissao dtoToEntity(PermissaoDto dto);
}
