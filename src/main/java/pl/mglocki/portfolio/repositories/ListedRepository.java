package pl.mglocki.portfolio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.mglocki.portfolio.entities.Listed;

@Repository
public interface ListedRepository extends JpaRepository<Listed, Integer>{

	List<Listed> findAllByBelongs(Integer id);

}
