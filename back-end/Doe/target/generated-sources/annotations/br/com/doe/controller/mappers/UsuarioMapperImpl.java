package br.com.doe.controller.mappers;

import br.com.doe.controller.dtos.EnderecoDto;
import br.com.doe.controller.dtos.OngDto;
import br.com.doe.controller.dtos.PermissaoDto;
import br.com.doe.controller.dtos.UsuarioDto;
import br.com.doe.entities.Endereco;
import br.com.doe.entities.Ong;
import br.com.doe.entities.Permissao;
import br.com.doe.entities.Usuario;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-16T14:02:49-0300",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2.1 (Homebrew)"
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
        usuarioDto.setPermissoesOng( permissaoListToPermissaoDtoList( usuario.getPermissoesOng() ) );

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
        usuario.setPermissoesOng( permissaoDtoListToPermissaoList( usuarioDto.getPermissoesOng() ) );

        return usuario;
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

    protected OngDto ongToOngDto(Ong ong) {
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

    protected PermissaoDto permissaoToPermissaoDto(Permissao permissao) {
        if ( permissao == null ) {
            return null;
        }

        PermissaoDto permissaoDto = new PermissaoDto();

        permissaoDto.setTipo( permissao.getTipo() );
        permissaoDto.setOng( ongToOngDto( permissao.getOng() ) );

        return permissaoDto;
    }

    protected List<PermissaoDto> permissaoListToPermissaoDtoList(List<Permissao> list) {
        if ( list == null ) {
            return null;
        }

        List<PermissaoDto> list1 = new ArrayList<PermissaoDto>( list.size() );
        for ( Permissao permissao : list ) {
            list1.add( permissaoToPermissaoDto( permissao ) );
        }

        return list1;
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

    protected Permissao permissaoDtoToPermissao(PermissaoDto permissaoDto) {
        if ( permissaoDto == null ) {
            return null;
        }

        Permissao permissao = new Permissao();

        permissao.setTipo( permissaoDto.getTipo() );
        permissao.setOng( ongDtoToOng( permissaoDto.getOng() ) );

        return permissao;
    }

    protected List<Permissao> permissaoDtoListToPermissaoList(List<PermissaoDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Permissao> list1 = new ArrayList<Permissao>( list.size() );
        for ( PermissaoDto permissaoDto : list ) {
            list1.add( permissaoDtoToPermissao( permissaoDto ) );
        }

        return list1;
    }
}
