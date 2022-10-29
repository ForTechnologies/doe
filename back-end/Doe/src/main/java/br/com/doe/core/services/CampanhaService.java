package br.com.doe.core.services;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.controllers.mappers.CampanhaMapper;
import br.com.doe.core.repositories.CampanhaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service @AllArgsConstructor
public class CampanhaService {
    private CampanhaRepository repositorio;
    private CampanhaMapper mapper;
    public void criar(CampanhaDto dto){
        var campanha = mapper.dtoToEntity(dto);
        repositorio.save(campanha);
    }
}