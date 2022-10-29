package br.com.doe.core.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity @Getter @Setter
public class Campanha extends BaseEntity {
    private String titulo;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private String descricao;
    private Integer nmrDoadores;
    private String urlImagem;

    @ManyToOne
    @JoinColumn(name = "ong_id")
    private Ong ong;

}
