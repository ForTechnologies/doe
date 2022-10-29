package br.com.doe.core.dtos;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class CampanhaDto {
    private String titulo;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String descricao;
    private Integer nmrDoadores;
    private String urlImagem;
    private Integer ong;
}
