package br.com.doe.service.exceptions;

public class ConflictException extends RuntimeException {
    public ConflictException(String mensagem) {
        super(mensagem);
    }
}
