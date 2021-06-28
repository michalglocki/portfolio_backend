package pl.mglocki.portfolio.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Title {
	@Id
	private int idtitles;
	private String titlePL;
	private String titleEN;
	private int belongs;
	
	
	public Title() {}
	
	public int getIdtitles() {
		return idtitles;
	}
	public void setIdtitles(int idtitles) {
		this.idtitles = idtitles;
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
	public int getBelongs() {
		return belongs;
	}
	public void setBelongs(int belongs) {
		this.belongs = belongs;
	}
	
	
}
