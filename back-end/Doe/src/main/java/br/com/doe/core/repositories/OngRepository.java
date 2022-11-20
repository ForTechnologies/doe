package br.com.doe.core.repositories;


import br.com.doe.core.entities.Ong;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OngRepository extends JpaRepository<Ong, Integer> {
}
