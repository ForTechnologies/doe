package br.com.doe.core.entities;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Getter @Setter
public class Endereco extends BaseEntity{
    @NotBlank
    private String logradouro;

    @NotBlank
    private String bairro;

    @NotNull
    private Integer numero;

    @NotBlank
    private String cep;

    @NotBlank
    private String localidade;

    @NotBlank
    private String uf;

    @OneToOne(mappedBy = "endereco")
    private Ong ong;

}
