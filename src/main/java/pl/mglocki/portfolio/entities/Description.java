package pl.mglocki.portfolio.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Description {
	
	@Id
	private int idabout;
	private String descriptionPL;
	private String descriptionEN;
	private int belongs;
	private String external;
	
	public Description() {}
	
	
//	public int getIdabout() {
//		return idabout;
//	}
//	public void setIdabout(int idabout) {
//		this.idabout = idabout;
//	}
//	public String getDescriptionPL() {
//		return descriptionPL;
//	}
//	public void setDescriptionPL(String descriptionPL) {
//		this.descriptionPL = descriptionPL;
//	}
//	public String getDescriptionEN() {
//		return descriptionEN;
//	}
//	public void setDescriptionEN(String descriptionEN) {
//		this.descriptionEN = descriptionEN;
//	}
//	public int getBelongs() {
//		return belongs;
//	}
//	public void setBelongs(int belongs) {
//		this.belongs = belongs;
//	}
	
	

}
