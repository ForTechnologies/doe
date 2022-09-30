package grupo9.loginlogoff;

import java.util.Objects;
import java.util.UUID;

public class Usuario {
    private UUID id;
    private String nome;
    private String email;
    private String senha;
    private Boolean isActive;

    public Usuario(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.isActive = false;
    }


    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }


    public void setIsActive(Boolean is_active) {
        this.isActive = is_active;
    }

    public Boolean getIsActive() {
        return isActive;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return email.equalsIgnoreCase(usuario.email) && senha.equals(usuario.senha);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, senha);
    }
}
