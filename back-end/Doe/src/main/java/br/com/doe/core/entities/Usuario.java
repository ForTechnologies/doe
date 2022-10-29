package br.com.doe.entities;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Entity
@Getter @Setter
public class Usuario extends BaseEntity {
    @Email
    @Size(max=50)
    @Column(unique = true)
    private String email;

    @NotBlank(message = "Campo inválido")
    private String senha;

    @NotBlank(message = "Campo inválido")
    @Size(max=100)
    private String nome;

    @Past
    private LocalDate dataNascimento;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Permissao> permissoesOng = new ArrayList<>();

}
