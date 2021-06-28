package pl.mglocki.portfolio.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mglocki.portfolio.entities.Title;
import pl.mglocki.portfolio.repositories.TitleRepository;

@Service
public class TitleService {
	
	TitleRepository titleRepository;
	
	@Autowired
	public TitleService(TitleRepository titleRepository) {
		super();
		this.titleRepository = titleRepository;
	}
	
	public Optional<Title> getTitleById(Integer id){
		return titleRepository.findById(id);
	}

}
