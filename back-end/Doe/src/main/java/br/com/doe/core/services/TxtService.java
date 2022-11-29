package br.com.doe.core.services;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.entities.Ong;
import br.com.doe.utils.ListaObj;


import java.io.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


public class TxtService {




    public TxtService(){}
    public static void gravaTxt(List<Campanha> lista, String nomeArq) {
        FileWriter arq = null;
        Formatter saida = null;
        Boolean deuRuim = false;

        try{
            arq = new FileWriter(nomeArq, true);
            saida = new Formatter(arq);

        } catch (IOException err){
            System.out.println("Error ao abrir o arquivo!");
            System.exit(1);
        }


       try{
           String header = "";
           String corpo = "";
           String trailer = "";

           int contaRegDados = 0;

           // iniciando header
           header += "00DOE!";
           header = header + LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
           header = header + "01";

           gravaRegistro(nomeArq, header);


           for (int i = 0; i < lista.size() ; i++) {
               Campanha campanha = lista.get(i);
               corpo += "02";
               corpo += String.format("%03d", campanha.getId());
               corpo += String.format("%-40s", campanha.getTitulo());
               corpo += String.format("%-50s", campanha.getDescricao());
               corpo += String.format("%-10s", campanha.getDataInicio());
               corpo += String.format("%-10s", campanha.getDataFim());
               contaRegDados++;
               gravaRegistro(nomeArq, corpo);

           }

           trailer += "01";
           trailer += String.format("%010d", contaRegDados);
           gravaRegistro(nomeArq, trailer );



       } catch (FormatterClosedException err){
           System.out.println("errou ao gravar o arquivo!");
           deuRuim = true;
       } finally {
           saida.close();
           try {
            arq.close();
            } catch (IOException err){
               System.out.println("Erro ao fechar o arquivo!");
               deuRuim = true;
           }
           if (deuRuim){
               System.exit(1);
           }
       }


    }

    public static void gravaRegistro (String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            // o argumento true é para indicar que o arquivo não será sobrescrito e sim
            // gravado com append (no final do arquivo)
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro);
            saida.newLine();
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }


    public static void leArquivoTxt(String nomeArq) {
        BufferedReader entrada = null;
        int contaRegDadoLido = 0;
        List<Campanha> listaLida = new ArrayList();

        try {
            entrada = new BufferedReader(new FileReader(nomeArq));
        } catch (IOException var15) {
            System.out.println("Erro ao abrir o arquivo");
            var15.printStackTrace();
        }

        try {
            for(String registro = entrada.readLine(); registro != null; registro = entrada.readLine()) {
                String tipoRegistro = registro.substring(0, 2);
                if (tipoRegistro.equals("00")) {
                    System.out.println("Registro de header");
                    System.out.println("Tipo de arquivo: " + registro.substring(3, 7));
                    System.out.println("Data e hora da gravação: " + registro.substring(8, 27));
                    System.out.println("Versão do documento: " + registro.substring(28, 30));
                } else if (tipoRegistro.equals("01")) {
                    System.out.println("Registro de trailer");
                    int qtdRegDadoGravado = Integer.parseInt(registro.substring(2, 12));
                    System.out.println("Quantidade de reg de dados lidos: " + contaRegDadoLido);
                    System.out.println("Quantidade de reg de dados gravados: " + qtdRegDadoGravado);
                    if (contaRegDadoLido == qtdRegDadoGravado) {
                        System.out.println("Quantidade de registros de dados lidos compatível com quantidade de registros de dados gravados");
                    } else {
                        System.out.println("Quantidade de registros de dados lidos incompatível com quantidade de registros de dados gravados");
                    }
                } else if (tipoRegistro.equals("02")) {
                    System.out.println("Registro de corpo");
                    String titulo = registro.substring(1, 2).trim();
                    String Descricao = registro.substring(3, 6).trim();
                    String DataInicio = registro.substring(7, 46).trim();
                    String DataFim = registro.substring(47, 96).trim();
                    String UrlImagem = registro.substring(97, 118).trim();
                    ++contaRegDadoLido;
                    Campanha c = new Campanha();
                    listaLida.add(c);
                } else {
                    System.out.println("Tipo de registro inválido!");
                }
            }

            entrada.close();
        } catch (IOException var16) {
            System.out.println("Erro ao ler o arquivo");
            var16.printStackTrace();
        }

        System.out.println("\nConteúdo da lista lida do arquivo:");
        Iterator var17 = listaLida.iterator();

        while(var17.hasNext()) {
            Campanha c = (Campanha) var17.next();
            System.out.println(c);
        }

    }

    public static void main(String[] args) {

        List<Campanha> campanhaListaObj = new ArrayList<>();

        Campanha campanha;
        Ong ong = new Ong();

        Campanha campanha1 = new Campanha("Campanha Legal", LocalDate.now(),LocalDate.now(),"Descrição Legal","legal.com", ong);
        Campanha campanha2 = new Campanha("Campanha Daora",LocalDate.now(),LocalDate.now(),"Descrição Daora","daora.com", ong);
        Campanha campanha3 = new Campanha("Campanha Massa",LocalDate.now(),LocalDate.now(),"Descrição Massa","massa.com", ong);


        campanhaListaObj.add(campanha1);
        campanhaListaObj.add(campanha2);
        campanhaListaObj.add(campanha3);



        gravaTxt(campanhaListaObj, "relatorio.txt");
    }

}


