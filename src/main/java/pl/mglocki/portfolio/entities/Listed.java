package pl.mglocki.portfolio.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Listed {
	@Id
	private int id;
	private String submenuPL;
	private String submenuEN;
	private String descriptionPL;
	private String descriptionEN;
	private String doctype;
	private String doc;
	private int belongs;
	
	public Listed() {}
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSubmenuPL() {
		return submenuPL;
	}
	public void setSubmenuPL(String submenuPL) {
		this.submenuPL = submenuPL;
	}
	public String getSubmenuEN() {
		return submenuEN;
	}
	public void setSubmenuEN(String submenuEN) {
		this.submenuEN = submenuEN;
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
	public String getDoctype() {
		return doctype;
	}
	public void setDoctype(String doctype) {
		this.doctype = doctype;
	}
	public String getDoc() {
		return doc;
	}
	public void setDoc(String doc) {
		this.doc = doc;
	}
	public int getBelongs() {
		return belongs;
	}
	public void setBelongs(int belongs) {
		this.belongs = belongs;
	}
	
	
	
}
