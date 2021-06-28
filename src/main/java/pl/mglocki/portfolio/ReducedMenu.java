package pl.mglocki.portfolio;

import java.util.ArrayList;
import java.util.List;

import pl.mglocki.portfolio.entities.Menu;

public class ReducedMenu {
	
	private int idmenu;
	private String title;
	private String graphic;
	private int level;
	private String tag;
	
	
	public ReducedMenu(int idmenu, String title, String graphic, int level, String tag) {
		this.idmenu = idmenu;
		this.title = title;
		this.graphic = graphic;
		this.level = level;
		this.tag = tag;
	}

	public int getIdmenu() {
		return idmenu;
	}

	public void setIdmenu(int idmenu) {
		this.idmenu = idmenu;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getGraphic() {
		return graphic;
	}

	public void setGraphic(String graphic) {
		this.graphic = graphic;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}
	
	public static List<ReducedMenu> reduceMenu(List<Menu> menu, boolean polish){
		
		List<ReducedMenu> reducedMenuList = new ArrayList<ReducedMenu>();
		if (polish) {
			for (int i = 0; i < menu.size(); i++) {
				reducedMenuList.add(new ReducedMenu(
						menu.get(i).getId(),
						menu.get(i).getTitlePL(),
						menu.get(i).getGraphic(),
						menu.get(i).getLevel(),
						menu.get(i).getTag()));
			}
		}else {
			for (int i = 0; i < menu.size(); i++) {
				reducedMenuList.add(new ReducedMenu(
						menu.get(i).getId(),
						menu.get(i).getTitleEN(),
						menu.get(i).getGraphic(),
						menu.get(i).getLevel(),
						menu.get(i).getTag()));
			}
		}
		
		return reducedMenuList;
	}
}
