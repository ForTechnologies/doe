package br.com.doe.core.controllers.mappers;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CampanhaMapper {
    CampanhaDto entityToDto(Campanha entity);
    Campanha dtoToEntity(CampanhaDto dto);
}
