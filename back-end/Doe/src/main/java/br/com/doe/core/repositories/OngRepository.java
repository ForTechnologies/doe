package br.com.doe.repositories;

import br.com.doe.entities.Ong;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OngRepository extends JpaRepository<Ong, Integer> {
}
