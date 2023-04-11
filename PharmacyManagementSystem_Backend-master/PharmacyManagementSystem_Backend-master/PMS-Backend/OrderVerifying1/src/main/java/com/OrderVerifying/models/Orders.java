package com.OrderVerifying.models;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Orders")
public class Orders {
	@Id
	private String id;

	//@Column(nullable = false)
	private String name;	//medicine name

	private int quantity;

	private String address;
	
	private String mobileno;

	private int totalPrice;
	
	

	public Orders(String id, String name, int quantity, String address, String mobileno, int totalPrice) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.address = address;
		this.mobileno = mobileno;
		this.totalPrice = totalPrice;
	}

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	
	
}

/*
 * @ManyToOne()
 * 
 * @JsonIgnore
 * 
 * @JoinColumn(name = "doctor_id", referencedColumnName = "id") private Doctor
 * doctor;
 */


