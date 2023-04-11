package com.suppliersservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "suppliers")
public class suppliers {

	@Id
	private String id;
	private String suppliersName;
	private String suppliersEmail;
	private String description;
	
	
	public String getSuppliersName() {
		return suppliersName;
	}
	public void setSuppliersName(String suppliersName) {
		this.suppliersName = suppliersName;
	}
	public String getSuppliersEmail() {
		return suppliersEmail;
	}
	public void setSuppliersEmail(String suppliersEmail) {
		this.suppliersEmail = suppliersEmail;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public suppliers(String id, String suppliersName, String suppliersEmail, String description) {
		super();
		this.id = id;
		this.suppliersName = suppliersName;
		this.suppliersEmail = suppliersEmail;
		this.description = description;
	}
	public suppliers() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
