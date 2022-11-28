package br.com.doe.core.controllers;

import br.com.doe.core.controllers.mappers.CampanhaMapper;
import br.com.doe.core.services.CampanhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = CampanhaController.class)
class CampanhaControllerTest {
    @Autowired
    CampanhaController controller;

    @MockBean
    CampanhaService service;

}