public class Voluntario extends Usuario {

    private Integer cadastro;
    private boolean isAtivo;

    public Voluntario(Long idUsuario, String email, String senha, String nome, Integer cadastro) {
        super(idUsuario, email, senha, nome);
        this.cadastro = cadastro;
        this.isAtivo = false;
    }


    public void recolherDoacao(){

    }

    @Override
    public boolean login(String email, String senha) {
        return false;
    }

    @Override
    public void logoff() {

    }

    @Override
    public boolean doar() {
        return false;
    }

    @Override
    public void entrarComunidade() {

    }

    @Override
    public void verEstatisticas() {
        super.verEstatisticas();
    }
}
