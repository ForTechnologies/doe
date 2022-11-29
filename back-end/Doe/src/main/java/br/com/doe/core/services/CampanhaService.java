package br.com.doe.core.services;

import br.com.doe.core.controllers.exception.NotFoundException;
import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.controllers.mappers.CampanhaMapper;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.entities.Ong;
import br.com.doe.core.repositories.CampanhaRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service @AllArgsConstructor
public class CampanhaService {
    private CampanhaRepository repositorio;
    private CampanhaMapper mapper;

    public void criar(CampanhaDto dto) {
        //gambiarra
        dto.setIdOng(1);
        var campanha = mapper.dtoToEntity(dto);
        repositorio.save(campanha);
    }

    public List<CampanhaDto> buscarCampanhasPorOng(int id) {
        return repositorio.findCampanhaByOngId(id)
                .stream().map(entity -> mapper.entityToDto(entity))
                .collect(Collectors.toList());
    }

    public void deletar(int id) {
        repositorio.deleteById(id);
    }

    public CampanhaDto atualizar(int id,CampanhaDto campanha){
        if(!repositorio.existsById(id)) {
            throw new NotFoundException("Campanha não encontrada");
        }

        Campanha entidade = mapper.dtoToEntity(campanha);
        entidade.setId(id);
        return mapper.entityToDto(repositorio.save(entidade));

    }
}
