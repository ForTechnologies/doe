package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.EnderecoDto;
import br.com.doe.controller.dtos.OngDto;
import br.com.doe.controller.dtos.PermissaoDto;
import br.com.doe.entities.Endereco;
import br.com.doe.entities.Ong;
import br.com.doe.entities.Permissao;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-16T14:02:49-0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2.1 (Homebrew)"
)
@Component
public class PermissaoUsuarioMapperImpl implements PermissaoUsuarioMapper {

    @Override
    public Permissao dtoToEntity(PermissaoDto dto) {
        if ( dto == null ) {
            return null;
        }

        Permissao permissao = new Permissao();

        permissao.setTipo( dto.getTipo() );
        permissao.setOng( ongDtoToOng( dto.getOng() ) );

        return permissao;
    }

    protected Endereco enderecoDtoToEndereco(EnderecoDto enderecoDto) {
        if ( enderecoDto == null ) {
            return null;
        }

        Endereco endereco = new Endereco();

        endereco.setLogradouro( enderecoDto.getLogradouro() );
        endereco.setBairro( enderecoDto.getBairro() );
        endereco.setNumero( enderecoDto.getNumero() );
        endereco.setCep( enderecoDto.getCep() );
        endereco.setLocalidade( enderecoDto.getLocalidade() );
        endereco.setUf( enderecoDto.getUf() );

        return endereco;
    }

    protected Ong ongDtoToOng(OngDto ongDto) {
        if ( ongDto == null ) {
            return null;
        }

        Ong ong = new Ong();

        ong.setCnpj( ongDto.getCnpj() );
        ong.setContato( ongDto.getContato() );
        ong.setEmail( ongDto.getEmail() );
        ong.setDataCriacao( ongDto.getDataCriacao() );
        ong.setEndereco( enderecoDtoToEndereco( ongDto.getEndereco() ) );

        return ong;
    }
}
