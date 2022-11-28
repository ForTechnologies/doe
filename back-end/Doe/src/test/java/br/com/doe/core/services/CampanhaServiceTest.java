package br.com.doe.core.services;

import br.com.doe.core.controllers.exception.NotFoundException;
import br.com.doe.core.controllers.mappers.CampanhaMapper;
import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.repositories.CampanhaRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = CampanhaService.class)
class CampanhaServiceTest {
    @Autowired
    CampanhaService service;

    @MockBean
    CampanhaRepository repositorio;

    @MockBean
    CampanhaMapper mapper;

    @Test
    @DisplayName("get campanhas por ong deve retornar uma lista de campanhas dto")
    void getCampanhasOng(){
        int idTeste = 12;

        List<Campanha> lista = List.of(
                mock(Campanha.class),
                mock(Campanha.class)
        );

        when(repositorio.findCampanhaByOngId(idTeste)).thenReturn(lista);
        var respostaEsperada = lista.stream().map( item -> mapper.entityToDto(item))
                                                               .collect(Collectors.toList());
        List<CampanhaDto> respostaObtida = service.buscarCampanhasPorOng(idTeste);
        assertEquals(respostaEsperada, respostaObtida);
    }

    @Test
    @DisplayName("put campanha, com id invalido, deve retornar NotFoundException")
    void putCampanhaComIdInvalido(){
        int idTeste = 12;
        CampanhaDto campanhaDtoTeste = new CampanhaDto();
        when(repositorio.existsById(idTeste)).thenReturn(false);
        assertThrows(NotFoundException.class, () -> service.atualizar(idTeste,campanhaDtoTeste));
    }




}