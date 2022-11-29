package br.com.doe.core.repositories;

import br.com.doe.core.entities.Campanha;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CampanhaRepository extends JpaRepository<Campanha,Integer> {
    List<Campanha> findCampanhaByOngId(int id);
}
