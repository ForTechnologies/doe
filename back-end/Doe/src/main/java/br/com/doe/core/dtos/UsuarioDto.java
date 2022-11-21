package br.com.doe.core.dtos;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter @Setter
public class UsuarioDto implements UserDetails {
    private Long id;
    @Email
    @Size(max=50)
    private String email;

    @NotBlank(message = "Senha inválida")
    private String senha;

    @NotBlank(message = "Nome inválido")
    @Size(max=100)
    private String nome;

    @Past
    private LocalDate dataNascimento;
    private List<PermissaoDto> permissoesOng = new ArrayList<>();

    public UsuarioDto() {
        this.id = id;
        this.email = email;
    }

    @JsonProperty
    public Long getId() {
        return id;
    }

    @JsonIgnore
    public void setId(Long id) {
        this.id = id;
    }

    @JsonIgnore()
    public String getSenha() {
        return senha;
    }

    @JsonProperty
    public void setSenha(String senha) {
        this.senha = senha;
    }

    @JsonIgnore @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.permissoesOng;
    }

    @JsonIgnore @Override
    public String getPassword() {
        return this.senha;
    }

    @JsonIgnore @Override
    public String getUsername() {
        return this.email;
    }

    @JsonIgnore @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore @Override
    public boolean isEnabled() {
        return true;
    }
}
