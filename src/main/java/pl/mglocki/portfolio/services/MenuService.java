package pl.mglocki.portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pl.mglocki.portfolio.entities.Menu;
import pl.mglocki.portfolio.repositories.MenuRepository;

@Service
public class MenuService {

	MenuRepository menuRepository;
	
	@Autowired
	public MenuService(MenuRepository menuRepository) {
		super();
		this.menuRepository = menuRepository;
	}
	
	public List<Menu> getMenuList(){
		return menuRepository.findAll();
	}
	
	
}
