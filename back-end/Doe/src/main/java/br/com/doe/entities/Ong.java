package br.com.doe.entities;


import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Entity
@Getter @Setter
public class Ong extends BaseEntity{
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

    @OneToOne(mappedBy = "ong",cascade = CascadeType.PERSIST)
    private Permissao permissao;
}
