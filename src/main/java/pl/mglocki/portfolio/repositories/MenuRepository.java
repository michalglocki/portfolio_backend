package pl.mglocki.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.mglocki.portfolio.entities.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer>{

}
