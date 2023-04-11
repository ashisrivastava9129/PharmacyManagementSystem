package com.PlaceOrderMicroservice.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.List;


@Document(collection="Orders")
public class Order {

	@Id
	private String id;
	
	private String userId;
	
	private String name;
	
	private int quantity;

	private String address;
	private String city;
	private String pinCode;
	
	private String mobileno;
	private String drugName;

	private int totalPrice;
	
	
	public Order(String id, String userId, String name, int quantity, String address, String city, String pinCode,
			String mobileno, String drugName, int totalPrice) {
		super();
		this.id = id;
		this.userId = userId;
		this.name = name;
		this.quantity = quantity;
		this.address = address;
		this.city = city;
		this.pinCode = pinCode;
		this.mobileno = mobileno;
		this.drugName = drugName;
		this.totalPrice = totalPrice;
	}


	public Order() {
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

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}


	public String getDrugName() {
		return drugName;
	}


	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}


	public String getUserId() {
		return userId;
	}


	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}
