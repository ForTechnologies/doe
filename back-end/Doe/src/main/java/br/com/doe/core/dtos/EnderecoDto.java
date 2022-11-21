package br.com.doe.core.dtos;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter @Setter
public class EnderecoDto {
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

}
