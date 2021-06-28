package pl.mglocki.portfolio.services;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.mglocki.portfolio.entities.Skills;
import pl.mglocki.portfolio.repositories.SkillsRepository;

@Service
public class SkillsService {
	SkillsRepository skillsRepository;

	@Autowired
	public SkillsService(SkillsRepository skillsRepository) {
		super();
		this.skillsRepository = skillsRepository;
	}
	
	public List<Skills> getAllSkillsByBelongs(Integer id){
		try{
			return skillsRepository.findAllByBelongs(id);
		}catch (NoSuchElementException e){
			return new ArrayList<Skills>();
		}
		
	}
	
	
}
