package br.com.doe.core.repositories;

import br.com.doe.core.entities.Permissao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissaoUsuarioRepository extends JpaRepository<Permissao,Integer> {
}
