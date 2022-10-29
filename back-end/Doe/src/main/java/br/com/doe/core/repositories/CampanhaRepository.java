package br.com.doe.core.repositories;

import br.com.doe.core.entities.Campanha;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampanhaRepository extends JpaRepository<Campanha,Integer> {
}
