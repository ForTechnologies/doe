import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Comunidade {

    private Long idComunidade;
    private ONG ongResponsavel;
    private List<Usuario> membros = new ArrayList<>();
    private List<Usuario> administratodres = new ArrayList<>();
    private Date dataCriacao;


    public Comunidade(Long idComunidade, ONG ongResponsavel, List<Usuario> membros, List<Usuario> administratodres, Date dataCriacao) {
        this.idComunidade = idComunidade;
        this.ongResponsavel = ongResponsavel;
        this.membros = membros;
        this.administratodres = administratodres;
        this.dataCriacao = dataCriacao;
    }


    // methods
    public void publicar(){

    }

    public void adicionarAdministradores (Voluntario v){

    }

    public Integer quantidadeMembros(){
        return null;
    }


    // getters


}
