package br.com.doe.controller.dtos;

import br.com.doe.entities.Ong;
import br.com.doe.entities.TipoPermissao;
import br.com.doe.entities.Usuario;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
public class PermissaoDto {
    private Usuario usuario;

    @Enumerated(EnumType.ORDINAL)
    private TipoPermissao tipo;

    private Ong ong;
}
