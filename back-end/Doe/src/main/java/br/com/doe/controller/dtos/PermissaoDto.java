package br.com.doe.controller.dtos;

import br.com.doe.entities.TipoPermissao;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Getter @Setter
public class PermissaoDto implements GrantedAuthority {

    @Enumerated(EnumType.ORDINAL)
    private TipoPermissao tipo;

    private OngDto ong;
    @JsonIgnore @Override
    public String getAuthority() {
        return this.tipo.toString() ;
    }
}
