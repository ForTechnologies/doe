package br.com.doe.core.services;

import br.com.doe.core.dtos.CampanhaDto;
import br.com.doe.core.entities.Campanha;
import br.com.doe.core.entities.Ong;


import java.io.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


public class TxtService {

    public TxtService(){}
    public static void gravaRegistro(String registro, String nomeArq) {
        BufferedWriter saida = null;

        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException var5) {
            System.out.println("Erro ao abrir o arquivo");
            var5.printStackTrace();
        }

        try {
            assert saida != null;
            saida.append(registro).append("\n");
            saida.close();
        } catch (IOException var4) {
            System.out.println("Erro ao gravar o arquivo");
            var4.printStackTrace();
        }

    }

        public static void gravaArquivoTxt(List<Campanha> lista, String nomeArq) {
        int contaRegDados = 0;
        String header = "00DOE!20222";
        header = header + LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
        header = header + "01";
        gravaRegistro(header, nomeArq);

        for(Iterator var5 = lista.iterator(); var5.hasNext(); ++contaRegDados) {
            Campanha c = (Campanha)var5.next();
            String corpo = "02";
            corpo = corpo + String.format("%-5.5s", c.getTitulo());
            corpo = corpo + String.format("%-8.8s", c.getDescricao());
            corpo = corpo + String.format("%-50.50s", c.getDataInicio());
            corpo = corpo + String.format("%-40.40s", c.getDataFim());
            corpo = corpo + String.format("%05.2f", c.getUrlImagem());
            gravaRegistro(corpo, nomeArq);
        }

        String trailer = "01";
        trailer = trailer + String.format("%010d", contaRegDados);
        gravaRegistro(trailer, nomeArq);
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
                    System.out.println("Tipo de arquivo: " + registro.substring(2, 6));
                    System.out.println("Ano e semestre: " + registro.substring(6, 11));
                    System.out.println("Data e hora da gravação: " + registro.substring(11, 30));
                    System.out.println("Versão do documento: " + registro.substring(30, 32));
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
                    String titulo = registro.substring(2, 7).trim();
                    String Descricao = registro.substring(7, 15).trim();
                    String DataInicio = registro.substring(15, 65).trim();
                    String DataFim = registro.substring(65, 105).trim();
                    String UrlImagem = registro.substring(105, 110).trim();
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

}
