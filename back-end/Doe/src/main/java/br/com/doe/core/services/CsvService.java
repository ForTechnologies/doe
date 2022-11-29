package br.com.doe.core.services;

import br.com.doe.core.entities.Campanha;
import br.com.doe.core.entities.Ong;
import br.com.doe.utils.ListaObj;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

public class CsvService {

    public void gravaArquivoCsv(ListaObj<Campanha> campanhaListaObj, String nomeArq) {
        FileWriter arq = null;  // arq é o obj que corresponde ao arquivo
        Formatter saida = null; // obj que será usado para escrever no arquivo
        nomeArq += ".csv";  // acrescenta a extensão .CSV ao nome do arquivo
        Boolean deuRuim = false;

        // Bloco try catch para abrir o arquivo
        try {
//            arq = new FileWriter(nomeArq);
            // Se quiser que o conteúdo seja acrescentado ao final do arquivo,
            // teria que fazer:
            arq = new FileWriter(nomeArq, true);
            saida = new Formatter(arq);
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo");
            System.exit(1);
        }

        // Bloco try catch para gravar no arquivo
        try {

            for (int i = 0; i < campanhaListaObj.getTamanho(); i++) {
                Campanha campanha = campanhaListaObj.getElemento(i);
                //               // gravo os dados desse objeto, separando cada campo por um ;
                saida.format("%d;%s;%s;%s;%s%n", campanha.getId() ,campanha.getTitulo(),campanha.getDescricao(),campanha.getDataInicio(),campanha.getDataFim());
            }

        } catch (FormatterClosedException erro) {
            System.out.println("Erro ao gravar o arquivo");
            deuRuim = true;
        } finally {
            saida.close();
            try {
                arq.close();
            } catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }

    public  String leExibeArquivoCsv(String nomeArq) {
        FileReader arq = null;  // objeto que representa o arquivo para leitura
        Scanner entrada = null; // objeto usado para ler do arquivo
        nomeArq += ".csv";      // acrescenta extensão .csv ao nome do arquivo
        Boolean deuRuim = false;
        String relatorio = "";

        // try catch para abrir o arquivo
        try {
            arq = new FileReader(nomeArq);
            entrada = new Scanner(arq).useDelimiter(";|\\r\\n");
        } catch (FileNotFoundException erro) {
            System.out.println("Arquivo não encontrado");
            System.exit(1);
        }

        // Bloco try catch para ler o arquivo
        try {
            // Exibe os títulos das colunas
            relatorio += String.format("%s;%s;%s;%s;%s%n", "id","titulo", "descricao", "dataInicio", "dataFim");
            while (entrada.hasNext()) {   // enqto não chegou o final do arquivo
                String id = entrada.next();   // next() aqui lê até o próximo ;
                String titulo = entrada.next();
                String descricao = entrada.next();
                String dataInicio = entrada.next();
                String dataFim = entrada.next();   // next() aqui lê até o próximo ;
                relatorio += String.format("%s;%s;%s;%s;%s\n", id, titulo, descricao, dataInicio, dataFim
                        );
            }
        } catch (NoSuchElementException erro) {
            System.out.println("Arquivo com problemas");
            deuRuim = true;

        } catch (IllegalStateException erro) {
            System.out.println("Erro na leitura do arquivo");
            deuRuim = true;

        } finally {
            entrada.close();
            try {
                arq.close();
            } catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }

        System.out.println(relatorio);
        return relatorio;

    }



}
