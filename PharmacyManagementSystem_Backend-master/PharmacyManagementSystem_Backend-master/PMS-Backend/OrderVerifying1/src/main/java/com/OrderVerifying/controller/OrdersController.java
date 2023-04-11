package com.OrderVerifying.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.OrderVerifying.models.Drug;
import com.OrderVerifying.models.JwtRequest;
import com.OrderVerifying.models.JwtResponse;
import com.OrderVerifying.models.Orders;
import com.OrderVerifying.repo.OrdersRepository;
import com.OrderVerifying.service.UserService;
import com.OrderVerifying.utility.JWTUtil;

@RestController
public class OrdersController {
 
	@Autowired
	private JWTUtil jwtUtil;
	
	
	@Autowired
	private OrdersRepository orderRepository;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private UserService userService;
	//Creating an order
	@PostMapping("/create")
	public Orders addOrder(@RequestBody Orders order) {
		System.out.println("in create order");
		return orderRepository.save(order);
	}

	//viewing the list of orders which are placed
	@GetMapping("/view")
	public java.util.List<Orders> getorder(){
		return orderRepository.findAll();
		
	}
	
	//verfiy order
	@GetMapping("/verifyOrder")
	public Boolean verify(Orders order) throws Exception {
		int q = order.getQuantity();
		String medName = order.getName();
		
		Drug d = restTemplate.getForObject("http://localhost:8081/drug/name"+medName, Drug.class); 
		
		if(q < d.getQuantity()) {			//validation
			
			restTemplate.postForObject( "http://localhost:8082/pickup/add",order, null);
			return true;
		}
		else {
			throw new Exception("Out of stock!!");
			
		}
//		return false;
	}
	
	@GetMapping("/getAllOrder")
	 List<Orders> all() {

	    List orders = this.restTemplate.getForObject("http://localhost:8888/order",List.class);
	    return orders;
	  }

	@PostMapping("/authenticate")
	public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest)throws Exception{//authenticate username and password if its valid the pass token
		try {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword())
				);
		}catch(BadCredentialsException e) {
			throw new Exception("Invalid_Credentials",e);
		}
		final UserDetails userDetails
		=userService.loadUserByUsername(jwtRequest.getUsername());
		
		final String token =jwtUtil.generateToken(userDetails);
		
		return new JwtResponse(token);
	}
	
}
