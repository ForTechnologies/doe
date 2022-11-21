package br.com.doe.core.repositories;

import br.com.doe.core.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByEmail(String email);

    Boolean findByEmailAndSenha(String email, String senha);
}
