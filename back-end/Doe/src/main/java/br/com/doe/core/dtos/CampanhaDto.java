package br.com.doe.core.dtos;

import br.com.doe.core.entities.Ong;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class CampanhaDto {
    private String titulo;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String descricao;
    private String urlImagem;
    private Ong ong;
}
