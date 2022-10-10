package br.com.doe.entities;

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
    @Size(max = 50)
    private String logradouro;

    @NotBlank
    @Size(max= 20)
    private String bairro;

    @NotNull
    @Size(max= 5)
    private Integer numero;

    @NotBlank
    @Size(max=8)
    private String cep;

    @NotBlank
    @Size(max= 20)
    private String localidade;

    @NotBlank
    @Size(max=2)
    private String uf;

    @OneToOne
    @JoinColumn(name = "ong_id")
    private Ong ong;

}
