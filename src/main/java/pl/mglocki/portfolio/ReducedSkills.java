package pl.mglocki.portfolio;

import java.util.ArrayList;
import java.util.List;

import pl.mglocki.portfolio.entities.Skills;;

public class ReducedSkills {
		private boolean it;
		private String name;
		private int level;
		private String logo;
		private String description;
		private int id;
		
		public ReducedSkills(boolean it, String name, int level, String logo, String description, int id) {
			this.it = it;
			this.name = name;
			this.level = level;
			this.logo = logo;
			this.description = description;
			this.id = id;
		}
		
		
		public boolean isIt() {
			return it;
		}
		public void setIt(boolean it) {
			this.it = it;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getLevel() {
			return level;
		}
		public void setLevel(int level) {
			this.level = level;
		}
		
		public String getLogo() {
			return logo;
		}
		public void setLogo(String logo) {
			this.logo = logo;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}


		public static List<ReducedSkills> reduceListOfSkills(List<Skills> skills, boolean polish) {
			List<ReducedSkills> list = new ArrayList<ReducedSkills>();
			
			for (int i = 0; i < skills.size(); i++) {
				if (polish) {
					list.add(new ReducedSkills(
							skills.get(i).isIt(),
							skills.get(i).getNamePL(), 
							skills.get(i).getLevel(),
							skills.get(i).getLogo(),
							skills.get(i).getDescriptionPL(),
							skills.get(i).getId()));
				}else {
					list.add(new ReducedSkills(
							skills.get(i).isIt(),
							skills.get(i).getNameEN(), 
							skills.get(i).getLevel(),
							skills.get(i).getLogo(),
							skills.get(i).getDescriptionEN(),
							skills.get(i).getId()));
				}
			}
			
			return list;
		}

}
