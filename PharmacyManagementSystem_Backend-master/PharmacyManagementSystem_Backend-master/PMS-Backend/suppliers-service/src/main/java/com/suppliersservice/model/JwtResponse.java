package com.suppliersservice.model;

public class JwtResponse {

	private String jwtToken;//that will generate and pss back

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public JwtResponse(String jwtToken) {
		super();
		this.jwtToken = jwtToken;
	}
	
}
