package br.com.doe.core.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class CampanhaDto {
    private Integer id;
    private String titulo;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String descricao;
    private String urlImagem;
    private int idOng;

}
