import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ONG implements I_estatisticas {

    private Long idOng;
    private String cnpj;
    private String contato;
    private boolean situacaoCadastral;
    private Date dataCriacao;
    private String logradouro;
    private String bairro;
    private String localidade;
    private String cep;
    private String uf;
    private Integer numero;
    private Dirigente dirigente;
    List<Usuario> usuarios = new ArrayList<>();


    public ONG(Long idOng, String cnpj, String contato, boolean situacaoCadastral, Date dataCriacao, String logradouro,
               String bairro, String localidade, String cep, String uf, Integer numero, Dirigente dirigente,
               List<Usuario> usuarios) {
        this.idOng = idOng;
        this.cnpj = cnpj;
        this.contato = contato;
        this.situacaoCadastral = situacaoCadastral;
        this.dataCriacao = dataCriacao;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.localidade = localidade;
        this.cep = cep;
        this.uf = uf;
        this.numero = numero;
        this.dirigente = dirigente;
        this.usuarios = usuarios;
    }

    public  void criarCampanha(){

    }

    public void criarComunindade(){

    }

    public void adicionarVoluntario(){

    }

    public void calcularDoacoesRecebidas(){

    }

    @Override
    public void verEstatisticas() {

    }

    // setters

    public void setIdOng(Long idOng) {
        this.idOng = idOng;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public void setSituacaoCadastral(boolean situacaoCadastral) {
        this.situacaoCadastral = situacaoCadastral;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public void setLocalidade(String localidade) {
        this.localidade = localidade;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public void setDirigente(Dirigente dirigente) {
        this.dirigente = dirigente;
    }


    // getters

    public Long getIdOng() {
        return idOng;
    }

    public String getCnpj() {
        return cnpj;
    }

    public String getContato() {
        return contato;
    }

    public boolean isSituacaoCadastral() {
        return situacaoCadastral;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public String getBairro() {
        return bairro;
    }

    public String getLocalidade() {
        return localidade;
    }

    public String getCep() {
        return cep;
    }

    public String getUf() {
        return uf;
    }

    public Integer getNumero() {
        return numero;
    }

    public Dirigente getDirigente() {
        return dirigente;
    }

}
