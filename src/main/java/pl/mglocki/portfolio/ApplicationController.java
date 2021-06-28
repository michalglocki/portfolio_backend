package pl.mglocki.portfolio;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.mglocki.portfolio.services.DescriptionService;
import pl.mglocki.portfolio.services.ListedService;
import pl.mglocki.portfolio.services.MenuService;
import pl.mglocki.portfolio.services.SkillsService;
import pl.mglocki.portfolio.services.TitleService;


@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:80", "http://localhost:80", "http://77.55.194.64:80", "http://77.55.194.64", "http://0.0.0.0", "http://localhost", "http://michalglocki.pl"})
@RestController
public class ApplicationController {
	
	DescriptionService descriptionService;
	TitleService titleService;
	ListedService listedService;
	SkillsService skillsService;
	MenuService menuService;
	
	
	@Autowired
	public ApplicationController(DescriptionService descriptionService, TitleService titleService, ListedService listedService, SkillsService skillsService, MenuService menuService) {
		super();

		this.descriptionService = descriptionService;
		this.titleService = titleService;
		this.listedService = listedService;
		this.skillsService = skillsService;
		this.menuService = menuService;
	}

	@GetMapping("details_polish")
	public DetailsResponse getPolishDetails(int id) {
		
		DetailsResponse details = new DetailsResponse();
		details.setDescription(descriptionService.getDescriptionById(new Integer(id)).get().getDescriptionPL());
		details.setTitle(titleService.getTitleById(new Integer(id)).get().getTitlePL());
		details.setListed(ReducedList.reduceListOfDetails(listedService.getAllListedByBelongs(new Integer(id)), true));
		details.setSkills(ReducedSkills.reduceListOfSkills(skillsService.getAllSkillsByBelongs(new Integer(id)), true));
		details.setExternal(descriptionService.getDescriptionById(new Integer(id)).get().getExternal());
		return details;
	}
	
	
	@GetMapping("details_english")
	public DetailsResponse getEnglishDetails(int id) {
		
		DetailsResponse details = new DetailsResponse();
		//Description desc = descriptionService.getDescriptionById(new Integer(id)).get();
		details.setDescription(descriptionService.getDescriptionById(new Integer(id)).get().getDescriptionEN());
		details.setTitle(titleService.getTitleById(new Integer(id)).get().getTitleEN());
		details.setListed(ReducedList.reduceListOfDetails(listedService.getAllListedByBelongs(new Integer(id)), false));
		details.setSkills(ReducedSkills.reduceListOfSkills(skillsService.getAllSkillsByBelongs(new Integer(id)), false));
		details.setExternal(descriptionService.getDescriptionById(new Integer(id)).get().getExternal());
		return details;
	}
	
	@GetMapping("/menu_polish")
	public List<ReducedMenu> getMenuPolish() {
		return ReducedMenu.reduceMenu(menuService.getMenuList(), true); 
	}
	
	@GetMapping("menu_english")
	public List<ReducedMenu> getMenuEnglish() {
		
		return ReducedMenu.reduceMenu(menuService.getMenuList(), false); 
	}
}
