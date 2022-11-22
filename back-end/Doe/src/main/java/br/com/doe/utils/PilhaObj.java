package br.com.doe.utils;

public class PilhaObj<T> {

    private T[] pilha;
    private int topo;

    public PilhaObj(int capacidade) {
        this.topo = -1;
        this.pilha = (T[]) new Object[capacidade];
    }

    public Boolean isEmpty() {
        return topo == -1;
    }

    public Boolean isFull() {
        return topo == pilha.length - 1;
    }

    public void push(T info) {
        if (isFull()) {
            throw new IllegalStateException();
        }
        pilha[++topo] = info;
    }

    public T pop() {
        if (isEmpty()) {
            return null;
        } else {
            return pilha[topo--];
        }
    }

    public T peek() {

        if (isEmpty()) {
            return null;
        } else {
            return pilha[topo];
        }
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("Pilha vazia");
        } else {
            for (int i = 0; i < topo+1; i++) {
                System.out.println(pilha[i]);
            }
        }
    }
}
