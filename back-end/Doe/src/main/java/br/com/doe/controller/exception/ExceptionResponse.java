package br.com.doe.controller.exception;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ExceptionResponse {
    private String campo;
    private String mensagem;

    public ExceptionResponse(String mensagem) {
        this.mensagem = mensagem;
    }
}
