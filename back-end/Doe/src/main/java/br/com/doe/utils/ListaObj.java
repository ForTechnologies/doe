package br.com.doe.utils;

public class ListaObj<T> {

    protected T[] vetor;
    protected int nroElem;

    public ListaObj(int tamanho) {
        vetor = (T[]) new Object[tamanho];
        nroElem = 0;
    }

    public void adiciona(T objeto) {
        if (nroElem >= vetor.length) {
            System.out.println("Lista está cheia");
        } else {
            vetor[nroElem++] = objeto;
        }
    }

    public void exibe() {
        if (nroElem == 0) {
            System.out.println("\nA lista está vazia.");
        } else {
            System.out.println("\nElementos da lista:");
            for (int i = 0; i < nroElem; i++) {
                System.out.println(vetor[i]);
            }
            System.out.println();
        }
    }

    public int busca(T elementoBuscado) {
        for (int i = 0; i < nroElem; i++) {
            if (vetor[i].equals(elementoBuscado)) {
                return i;
            }
        }
        return -1;
    }

    public boolean removePeloIndice(int indice) {
        if (indice < 0 || indice >= nroElem) {
            System.out.println("\nÍndice inválido!");
            return false;
        }
        for (int i = indice; i < nroElem - 1; i++) {
            vetor[i] = vetor[i + 1];
        }
        nroElem--;
        return true;
    }

    public boolean removeElemento(T elementoARemover) {
        return removePeloIndice(busca(elementoARemover));
    }

    public boolean substituiElemento(T valorAntigo, T valorNovo) {

        int indiceProvisorio = busca(valorAntigo);

        if (indiceProvisorio != -1) {
            vetor[indiceProvisorio] = valorNovo;
            return true;
        }

        return false;
    }

    public int contaOcorrencias(T objeto) {
        int contador = 0;
        for (int i = 0; i < nroElem; i++) {
            if (vetor[i].equals(objeto)) {
                contador++;
            }
        }
        return contador;
    }

    public void adicionaNoInicio(T objeto) {

        if (nroElem == vetor.length) {
            System.out.println("Lista cheia");
            return;
        }

        for (int i = nroElem; i > 0; i--) {
            vetor[i] = vetor[i - 1];
        }
        vetor[0] = objeto;
        nroElem++;
    }

    public int getTamanho() {
        return nroElem;
    }

    public T getElemento(int indice) {
        if (indice < 0 || indice >= nroElem) {
            return null;
        }
        return vetor[indice];
    }

    public void limpa() {
        nroElem = 0;
    }

    public void alterarIndex(int index, T valorNovo) {
        if (index > nroElem + 1) {
            System.out.println("index não existe");
        } else {
            vetor[index] = valorNovo;
            System.out.println("Adicionado");
        }
    }

}
