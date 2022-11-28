package br.com.doe.core.controllers.mappers;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CampanhaMapper {
    @Mapping(target = "idOng", source = "ong.id")
    CampanhaDto entityToDto(Campanha entity);
    @Mapping(target = "ong.id", source = "idOng")
    Campanha dtoToEntity(CampanhaDto dto);
}
