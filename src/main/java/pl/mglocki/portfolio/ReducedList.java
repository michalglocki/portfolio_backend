package pl.mglocki.portfolio;

import java.util.ArrayList;
import java.util.List;

import pl.mglocki.portfolio.entities.Listed;

public class ReducedList {
	
	private String submenu;
	private String description;
	private String document;
	private String doctype;
	private int id;
	
	public ReducedList(String submenu, String description, String document, String doctype, int id) {
		this.submenu = submenu;
		this.description = description;
		this.document = document;
		this.doctype = doctype;
		this.id = id;
	}

	public String getSubmenu() {
		return submenu;
	}

	public void setSubmenu(String submenu) {
		this.submenu = submenu;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public String getDoctype() {
		return doctype;
	}

	public void setDoctype(String doctype) {
		this.doctype = doctype;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public static List<ReducedList> reduceListOfDetails(List<Listed> details, boolean polish){
		
		List<ReducedList> list = new ArrayList<ReducedList>();
		
		for (int i = 0; i < details.size(); i++) {
			if (polish) {
				list.add(new ReducedList(
						details.get(i).getSubmenuPL(), 
						details.get(i).getDescriptionPL(), 
						details.get(i).getDoc(),
						details.get(i).getDoctype(),
						details.get(i).getId()));
			}else {
				list.add(new ReducedList(
						details.get(i).getSubmenuEN(), 
						details.get(i).getDescriptionEN(), 
						details.get(i).getDoc(),
						details.get(i).getDoctype(),
						details.get(i).getId()));
			}
		}
		
		return list;
	}
	

}
