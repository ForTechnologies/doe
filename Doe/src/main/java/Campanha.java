import java.util.Date;

public class Campanha {

    private Long idCampanha;
    private String causaCampanha;
    private Double metaArrecadacaoEmDinheiro;
    private Integer metaArrecadacaoEmItens;
    private Date inicioCampanha;
    private Date fimCampanha;
    private ONG ongResponsavel;

    public Campanha(Long idCampanha, String causaCampanha, Double metaArrecadacaoEmDinheiro,
                    Integer metaArrecadacaoEmItens, Date inicioCampanha, Date fimCampanha, ONG ongResponsavel) {
        this.idCampanha = idCampanha;
        this.causaCampanha = causaCampanha;
        this.metaArrecadacaoEmDinheiro = metaArrecadacaoEmDinheiro;
        this.metaArrecadacaoEmItens = metaArrecadacaoEmItens;
        this.inicioCampanha = inicioCampanha;
        this.fimCampanha = fimCampanha;
        this.ongResponsavel = ongResponsavel;
    }

    public void calcularPorcentagemDoacoesRecebidas(){

    }

    public Integer quantidadeDoadores(){
        return null;
    }

    public Double quantidadeDeDinheiroRecebido(){
        return null;
    }

    public Integer quantidadeDeiItensRecebido(){
        return null;
    }
    


}
