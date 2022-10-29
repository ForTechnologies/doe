package br.com.doe.service;

import br.com.doe.controller.dtos.OngDto;
import br.com.doe.controller.dtos.UsuarioAutenticado;
import br.com.doe.controller.mappers.OngMapper;
import br.com.doe.entities.Ong;
import br.com.doe.entities.Permissao;
import br.com.doe.entities.TipoPermissao;
import br.com.doe.repositories.OngRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class OngService {
    private OngRepository repositorio;

    private UsuarioService usuario;

    private PermissaoUsuarioService permissao;

    private OngMapper mapper;

    public void criar(OngDto dto) throws ChangeSetPersister.NotFoundException {
        Ong entity = mapper.dtoToEntity(dto);
        Permissao novaPermissao = new Permissao();
        novaPermissao.setOng(entity);
        novaPermissao.setUsuario(usuario.buscarUsuario(new UsuarioAutenticado().getUsuario()));
        novaPermissao.setTipo(TipoPermissao.ADMIN);
        permissao.criar(novaPermissao);
    }

    public List<OngDto> buscarOngs() throws ChangeSetPersister.NotFoundException {
        return repositorio.findAll()
                          .stream()
                          .map(ong -> mapper.entityToDto(ong))
                          .collect(Collectors.toList());
    }

    public void deletar(int id) {
        repositorio.deleteById(id);
    }

}
