public class Doador extends Usuario{

    public Doador(Long idUsuario, String email, String senha, String nome) {
        super(idUsuario, email, senha, nome);
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
