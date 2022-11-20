package br.com.doe.core.controllers.mappers;



import br.com.doe.core.dtos.OngDto;
import br.com.doe.core.entities.Ong;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OngMapper {
    OngDto entityToDto(Ong ong);
    Ong dtoToEntity(OngDto ongDto);
}
