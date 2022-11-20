package br.com.doe.core.services;

import br.com.doe.core.entities.Usuario;
import br.com.doe.utils.ListaObj;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class RelatorioService {

    public void gravaArquivoCsv(ListaObj<Usuario> usuarioListaObj, String nomeArq) {
        FileWriter arq = null;  // arq é o obj que corresponde ao arquivo
        Formatter saida = null; // obj que será usado para escrever no arquivo
        nomeArq += ".csv";  // acrescenta a extensão .CSV ao nome do arquivo
        Boolean deuRuim = false;

        // Abre o Arquivo > try catch para abrir o arquivo
        try {
            arq = new FileWriter(nomeArq, false);
            saida = new Formatter(arq);
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo");
            System.exit(1);
        }

        // Grava o Arquivo > try catch para gravar no arquivo
        try {

            for (int i = 0; i < usuarioListaObj.getTamanho(); i++) {
                Usuario usuario = usuarioListaObj.getElemento(i);
                // gravo os dados desse objeto, separando cada campo por um ;
                saida.format("%s;%s;%s\n",usuario.getId(), usuario.getEmail(), usuario.getNome());
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


    public String leExibeArquivoCsv(String nomeArq) {
        FileReader arq = null;  // objeto que representa o arquivo para leitura
        Scanner entrada = null; // objeto usado para ler do arquivo
        nomeArq += ".csv";      // acrescenta extensão .csv ao nome do arquivo
        Boolean deuRuim = false;
        String relatorio = "";

        // try catch para abrir o arquivo
        try {
            arq = new FileReader(nomeArq);
            entrada = new Scanner(arq).useDelimiter(";|\\n");
        } catch (FileNotFoundException erro) {
            System.out.println("Arquivo não encontrado");
            System.exit(1);
        }

        // Bloco try catch para ler o arquivo
        try {
            // Exibe os títulos das colunas
            relatorio += String.format("%s;%s;%s\n", "id", "email", "nome");
            while (entrada.hasNext()) {   // enqto não chegou o final do arquivo
                String id = entrada.next();   // next() aqui lê até o próximo ;
                String email = entrada.next();
                String nome = entrada.next();
                relatorio += String.format("%s;%s;%s\n", id, email, nome);
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
        return relatorio;
    }

}
