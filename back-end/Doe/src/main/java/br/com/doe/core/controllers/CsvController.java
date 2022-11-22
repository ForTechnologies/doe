package br.com.doe.core.controllers;


import br.com.doe.core.entities.Campanha;
import br.com.doe.core.entities.Ong;
import br.com.doe.core.services.CsvService;
import br.com.doe.utils.ListaObj;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/relatorios")
public class CsvController {

    private final CsvService csv = new CsvService();


    @GetMapping("/baixarTest")
    public ResponseEntity getRelatorio() {

        return ResponseEntity.status(200)
                .header("content-type", "text/csv")
                .header("content-disposition", "filename=\"relatorio.csv\"")
                .body(csv.leExibeArquivoCsv("relatorio"));
    }


    @GetMapping("/gravarTest")
    public ResponseEntity<ListaObj<Campanha>>gravarTest() {
        ListaObj<Campanha> campanhaListaObj = new ListaObj<>(10);

        Campanha campanha;
        Ong ong = new Ong();

        Campanha campanha1 = new Campanha("Campanha Legal",LocalDate.now(),LocalDate.now(),"Descrição Legal","legal.com", ong);
        Campanha campanha2 = new Campanha("Campanha Daora",LocalDate.now(),LocalDate.now(),"Descrição Daora","daora.com", ong);
        Campanha campanha3 = new Campanha("Campanha Massa",LocalDate.now(),LocalDate.now(),"Descrição Massa","massa.com", ong);


        campanhaListaObj.adiciona(campanha1);
        campanhaListaObj.adiciona(campanha2);
        campanhaListaObj.adiciona(campanha3);



        for (int i = 0; i < campanhaListaObj.getTamanho(); i++) {
            for (int i2 = i; i2 < campanhaListaObj.getTamanho(); i2++) {
                Campanha aux = campanhaListaObj.getElemento(i);
                if (campanhaListaObj.getElemento(i2).getOng().getId() < aux.getOng().getId()) {
                    campanhaListaObj.alterarIndex(i, campanhaListaObj.getElemento(i2));
                    campanhaListaObj.alterarIndex(i2, aux);
                }
            }
        }
        csv.gravaArquivoCsv(campanhaListaObj, "relatorio");
        return ResponseEntity.status(200).body(campanhaListaObj);
    }
}
