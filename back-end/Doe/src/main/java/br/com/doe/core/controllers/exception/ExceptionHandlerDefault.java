package br.com.doe.controller.exception;

import br.com.doe.service.exceptions.ConflictException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class ExceptionHandlerDefault {

    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected List<ExceptionResponse> argumentosInvalidosException(MethodArgumentNotValidException ex){
        BindingResult resultado = ex.getBindingResult();

        return resultado.getFieldErrors().stream()
                    .map(campo -> new ExceptionResponse(campo.getField(), campo.getDefaultMessage()))
                    .collect(Collectors.toList());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(ConflictException.class)
    protected ExceptionResponse uniqueException(ConflictException ex){
        return new ExceptionResponse(ex.getMessage());
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    protected ExceptionResponse notFoundException(NotFoundException ex){
        return new ExceptionResponse(ex.getMessage());
    }

}
