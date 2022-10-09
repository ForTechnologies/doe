package br.com.doe.entities;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Getter
@Setter
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Size(max=50)
    @Column(unique = true)
    private String email;

    @NotBlank(message = "Campo inválido")
    @Size(max=30)
    private String senha;

    @NotBlank(message = "Campo inválido")
    @Size(max=100)
    private String nome;

}
