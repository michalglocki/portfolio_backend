package pl.mglocki.portfolio;

import java.util.List;

import lombok.Data;

@Data
public class DetailsResponse {
	private String title;
	private String description;
	private List<ReducedList> listed;
	private List<ReducedSkills> skills;
	private String external;
	
	public DetailsResponse() {}
	
	
}
