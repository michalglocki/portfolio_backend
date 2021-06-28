package pl.mglocki.portfolio.services;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mglocki.portfolio.entities.Listed;
import pl.mglocki.portfolio.repositories.ListedRepository;

@Service
public class ListedService {
	ListedRepository listedRepository;

	@Autowired
	public ListedService(ListedRepository listedRepository) {
		super();
		this.listedRepository = listedRepository;
	}
	
	public List<Listed> getAllListedByBelongs(Integer id){
		try {
			return listedRepository.findAllByBelongs(id);
		}catch (NoSuchElementException e){
			return new ArrayList<Listed>();
		}
		
	}
	
	
}
