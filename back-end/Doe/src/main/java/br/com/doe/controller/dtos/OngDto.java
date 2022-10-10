package br.com.doe.controller.dtos;

import br.com.doe.entities.Endereco;
import br.com.doe.entities.Permissao;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter @Setter
public class OngDto {
    @Size(max=14)
    private String cnpj;

    @Size(max=12)
    private Integer contato;

    @Email
    @Size(max=50)
    private String email;

    @Past
    private LocalDate dataCriacao;

    @OneToOne
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;

    private Permissao permissao;
}
