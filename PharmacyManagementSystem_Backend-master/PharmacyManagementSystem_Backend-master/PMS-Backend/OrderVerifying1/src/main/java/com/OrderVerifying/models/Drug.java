package com.OrderVerifying.models;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "drugs")
public class Drug {

	@Id
	private String id;
	
	@NotNull(message = "Drug Name cannot be null")
	private String name;
	
	private String description;
	
	@NotNull(message = "Drug ComapnyName cannot be null")
	private String company;
	
	@NotNull(message = "Drug Cost cannot be null")
	private double cost;
	
	@NotNull(message = "Drug quantity cannot be null")
	private int quantity;
	
	@NotNull(message = "MFG date cannot be null")
	private LocalDate mfgDate;
	
	@NotNull(message = "Expire date cannot be null")
	private LocalDate expireDate;

	public Drug() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Drug(String id, String name, String description, String company, double cost, int quantity, LocalDate mfgDate,
			LocalDate expireDate) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.company = company;
		this.cost = cost;
		this.quantity = quantity;
		this.mfgDate = mfgDate;
		this.expireDate = expireDate;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public LocalDate getMfgDate() {
		return mfgDate;
	}

	public void setMfgDate(LocalDate mfgDate) {
		this.mfgDate = mfgDate;
	}

	public LocalDate getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(LocalDate expireDate) {
		this.expireDate = expireDate;
	}

}
