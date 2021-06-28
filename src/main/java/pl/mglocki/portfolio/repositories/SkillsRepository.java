package pl.mglocki.portfolio.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mglocki.portfolio.entities.Skills;

@Repository
public interface SkillsRepository extends JpaRepository<Skills, Integer> {
	
	List<Skills> findAllByBelongs(Integer id);
}
