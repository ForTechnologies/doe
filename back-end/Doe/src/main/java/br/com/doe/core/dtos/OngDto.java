package br.com.doe.core.dtos;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Getter @Setter
public class OngDto {
    private Integer id;
    @Size(max=14)
    private String cnpj;

    @Size(max=12)
    private String contato;

    @Email
    @Size(max=50)
    private String email;
    @Past
    private LocalDate dataCriacao;

    private EnderecoDto endereco;
}
