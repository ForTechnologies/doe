package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.EnderecoDto;
import br.com.doe.controller.dtos.OngDto;
import br.com.doe.entities.Endereco;
import br.com.doe.entities.Ong;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-16T14:02:49-0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2.1 (Homebrew)"
)
@Component
public class OngMapperImpl implements OngMapper {

    @Override
    public OngDto entityToDto(Ong ong) {
        if ( ong == null ) {
            return null;
        }

        OngDto ongDto = new OngDto();

        ongDto.setCnpj( ong.getCnpj() );
        ongDto.setContato( ong.getContato() );
        ongDto.setEmail( ong.getEmail() );
        ongDto.setDataCriacao( ong.getDataCriacao() );
        ongDto.setEndereco( enderecoToEnderecoDto( ong.getEndereco() ) );

        return ongDto;
    }

    @Override
    public Ong dtoToEntity(OngDto ongDto) {
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

    protected EnderecoDto enderecoToEnderecoDto(Endereco endereco) {
        if ( endereco == null ) {
            return null;
        }

        EnderecoDto enderecoDto = new EnderecoDto();

        enderecoDto.setLogradouro( endereco.getLogradouro() );
        enderecoDto.setBairro( endereco.getBairro() );
        enderecoDto.setNumero( endereco.getNumero() );
        enderecoDto.setCep( endereco.getCep() );
        enderecoDto.setLocalidade( endereco.getLocalidade() );
        enderecoDto.setUf( endereco.getUf() );

        return enderecoDto;
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
}
