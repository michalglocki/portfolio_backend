package pl.mglocki.portfolio.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Skills {
	
	@Id
	private int id;
	private String namePL;
	private String nameEN;
	private int level;
	private boolean it;
	private int belongs;
	private String logo;
	private String descriptionPL;
	private String descriptionEN;
	
	public Skills() {}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNamePL() {
		return namePL;
	}

	public void setNamePL(String namePL) {
		this.namePL = namePL;
	}

	public String getNameEN() {
		return nameEN;
	}

	public void setNameEN(String nameEN) {
		this.nameEN = nameEN;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public boolean isIt() {
		return it;
	}

	public void setIt(boolean it) {
		this.it = it;
	}

	public int getBelongs() {
		return belongs;
	}

	public void setBelongs(int belongs) {
		this.belongs = belongs;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getDescriptionPL() {
		return descriptionPL;
	}

	public void setDescriptionPL(String descriptionPL) {
		this.descriptionPL = descriptionPL;
	}

	public String getDescriptionEN() {
		return descriptionEN;
	}

	public void setDescriptionEN(String descriptionEN) {
		this.descriptionEN = descriptionEN;
	}
	
	

}
