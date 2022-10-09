package br.com.doe.controller.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter @Setter
public class UsuarioDto {

    private Long id;

    @Email
    @Size(max=50)
    private String email;

    @NotBlank(message = "Senha inválida")
    @Size(max=30)
    private String senha;

    @NotBlank(message = "Nome inválido")
    @Size(max=100)
    private String nome;

    @JsonProperty
    public Long getId() {
        return id;
    }

    @JsonIgnore
    public void setId(Long id) {
        this.id = id;
    }
}
