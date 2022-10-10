package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.UsuarioDto;
import br.com.doe.entities.Usuario;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-09T22:02:54-0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.12 (Homebrew)"
)
@Component
public class UsuarioMapperImpl implements UsuarioMapper {

    @Override
    public UsuarioDto entityToDto(Usuario usuario) {
        if ( usuario == null ) {
            return null;
        }

        UsuarioDto usuarioDto = new UsuarioDto();

        if ( usuario.getId() != null ) {
            usuarioDto.setId( usuario.getId().longValue() );
        }
        usuarioDto.setEmail( usuario.getEmail() );
        usuarioDto.setSenha( usuario.getSenha() );
        usuarioDto.setNome( usuario.getNome() );

        return usuarioDto;
    }

    @Override
    public Usuario dtoToEntity(UsuarioDto usuarioDto) {
        if ( usuarioDto == null ) {
            return null;
        }

        Usuario usuario = new Usuario();

        if ( usuarioDto.getId() != null ) {
            usuario.setId( usuarioDto.getId().intValue() );
        }
        usuario.setEmail( usuarioDto.getEmail() );
        usuario.setSenha( usuarioDto.getSenha() );
        usuario.setNome( usuarioDto.getNome() );

        return usuario;
    }
}
