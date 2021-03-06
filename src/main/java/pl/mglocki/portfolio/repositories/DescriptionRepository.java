package pl.mglocki.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.mglocki.portfolio.entities.Description;

@Repository
public interface DescriptionRepository extends JpaRepository<Description, Integer>{

}
