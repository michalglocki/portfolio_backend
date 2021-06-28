package pl.mglocki.portfolio.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Menu {
	
	@Id
	private int id;
	private String titlePL;
	private String titleEN;
	private String graphic;
	private int level;
	private String tag;
	
	
	public Menu() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitlePL() {
		return titlePL;
	}

	public void setTitlePL(String titlePL) {
		this.titlePL = titlePL;
	}

	public String getTitleEN() {
		return titleEN;
	}

	public void setTitleEN(String titleEN) {
		this.titleEN = titleEN;
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
	
	
	
	

}
