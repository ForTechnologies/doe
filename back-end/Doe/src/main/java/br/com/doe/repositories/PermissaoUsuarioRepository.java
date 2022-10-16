package br.com.doe.repositories;

import br.com.doe.controller.dtos.PermissaoDto;
import br.com.doe.entities.Permissao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissaoUsuarioRepository extends JpaRepository<Permissao,Integer> {
}
