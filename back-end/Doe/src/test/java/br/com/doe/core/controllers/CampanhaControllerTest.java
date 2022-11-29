package br.com.doe.core.controllers;


import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.services.CampanhaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;


@SpringBootTest(classes = CampanhaController.class)
class CampanhaControllerTest {
    @Autowired
    CampanhaController controller;

    @MockBean
    CampanhaService service;


    @Test
    void get200ComCorpo(){
        int idTeste = 12;
        List<CampanhaDto> lista = List.of(
                mock(CampanhaDto.class),
                mock(CampanhaDto.class)
        );

        when(service.buscarCampanhasPorOng(idTeste)).thenReturn(lista);
        ResponseEntity<List<CampanhaDto>> respostaObtida = controller.buscaCampanhasPorOng(12);

        assertEquals(200, respostaObtida.getStatusCodeValue());
        assertNotNull(respostaObtida.getBody());
    }

    @Test
    void put200ComCorpo(){
        CampanhaDto campanhaTeste = new CampanhaDto();
        when(service.atualizar(12, campanhaTeste)).thenReturn(campanhaTeste);
        ResponseEntity<CampanhaDto> respostaObtida = controller.atualizaCampanha(12, campanhaTeste);

        assertEquals(200, respostaObtida.getStatusCodeValue());
        assertNotNull(respostaObtida.getBody());
    }

}