package pl.mglocki.portfolio.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pl.mglocki.portfolio.entities.Description;
import pl.mglocki.portfolio.repositories.DescriptionRepository;

@Service
public class DescriptionService {
	
	DescriptionRepository descriptionRepository;
	
	@Autowired
	public DescriptionService(DescriptionRepository descriptionRepository) {
		this.descriptionRepository = descriptionRepository;
	}
	
	public List<Description> getAllDescriptions(){
		return descriptionRepository.findAll();
	}
	
	public Optional<Description> getDescriptionById(Integer id){
		return descriptionRepository.findById(id);
	}
}
