package br.com.doe.utils;

public class FilaObj<T> {

    private int tamanho;
    private T[] fila;

    public FilaObj(int capacidade) {
        this.tamanho = 0;
        this.fila = (T[]) new Object[capacidade];
    }
    public boolean isEmpty() {
        return tamanho == 0;
    }

    public boolean isFull() {
        return tamanho == fila.length;
    }

    public void insert(T info) {
        if (isFull()) {
            throw new IllegalStateException();
        }
        fila[tamanho++] = info;
    }
    public T peek() {
        return fila[0];
    }

    public T poll() {
        if (isEmpty()) {
            return null;
        }
        T inicio = peek();
        tamanho--;
        for (int i = 0; i < tamanho; i++) {
            fila[i] = fila[i+1];
        }
        return inicio;
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("Fila vazia");
        } else {
            for (int i = 0; i < tamanho; i++) {
                System.out.println(fila[i]);
            }
        }
    }

    public T[] getFila() {
        return fila;
    }
}
