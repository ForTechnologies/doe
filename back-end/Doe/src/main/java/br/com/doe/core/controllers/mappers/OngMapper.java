package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.OngDto;
import br.com.doe.entities.Ong;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OngMapper {
    OngDto entityToDto(Ong ong);
    Ong dtoToEntity(OngDto ongDto);
}
