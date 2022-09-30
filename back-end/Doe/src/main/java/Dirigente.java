public class Dirigente extends Voluntario{

    public Dirigente(Long idUsuario, String email, String senha, String nome, Integer cadastro) {
        super(idUsuario, email, senha, nome, cadastro);
    }

    public  void criarOng(ONG ong){

    }

    @Override
    public void verEstatisticas() {
        super.verEstatisticas();
    }
}
