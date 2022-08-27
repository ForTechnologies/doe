package grupo9.loginlogoff;

import java.util.UUID;

public class Usuario {
    private UUID id;
    private String nome;
    private String email;
    private String senha;
    private Boolean is_active;

    public Usuario(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.is_active = false;
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


    public void setIs_active(Boolean is_active) {
        this.is_active = is_active;
    }

    public Boolean getIs_active() {
        return is_active;
    }


}
