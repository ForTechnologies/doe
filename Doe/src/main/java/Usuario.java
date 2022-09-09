public abstract  class Usuario implements I_estatisticas {

    private Long idUsuario;
    private String email;
    private String senha;
    private String nome;

    public Usuario(Long idUsuario, String email, String senha, String nome) {
        this.idUsuario = idUsuario;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }


    // methods

    public abstract boolean login(String email, String senha);

    public abstract void logoff();

    public abstract boolean doar();

    public abstract void entrarComunidade();

    @Override
    public void verEstatisticas() {

    }

    // getters


    public Long getIdUsuario() {
        return idUsuario;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getNome() {
        return nome;
    }

    // setters

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


}
