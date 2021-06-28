package pl.mglocki.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.mglocki.portfolio.entities.Title;

@Repository
public interface TitleRepository extends JpaRepository<Title, Integer> {

}
