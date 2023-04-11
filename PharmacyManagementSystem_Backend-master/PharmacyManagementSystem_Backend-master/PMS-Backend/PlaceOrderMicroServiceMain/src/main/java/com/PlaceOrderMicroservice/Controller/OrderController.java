package com.PlaceOrderMicroservice.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.PlaceOrderMicroservice.Model.Drug;
import com.PlaceOrderMicroservice.Model.JWTRequest;
import com.PlaceOrderMicroservice.Model.JWTResponse;
import com.PlaceOrderMicroservice.Model.MailUser;
import com.PlaceOrderMicroservice.Model.Order;
import com.PlaceOrderMicroservice.Model.User;
import com.PlaceOrderMicroservice.Repository.OrderRepository;
import com.PlaceOrderMicroservice.Service.MailService;
import com.PlaceOrderMicroservice.Service.UserService;
import com.PlaceOrderMicroservice.Utility.JWTUtility;



@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class OrderController {
	
		@Autowired
		private OrderRepository orderRepository;
		
		@Autowired
		private JWTUtility jwtUtility;
		
		@Autowired
		private AuthenticationManager authenticationManager;
		
		@Autowired
		private UserService userService;
		
		@Autowired
		private RestTemplate restTemplate;
		
		@Autowired
		private MailService mailService;

		
		private User user;
		
		
		@GetMapping("/order")
		  List<Order> all() {
		    return orderRepository.findAll();
		  }
		
		// post order 
		 @PostMapping("/order/{drugId}")
		 public Order addOrder(@PathVariable("drugId") String drugId ,@RequestBody Order order) {
			
			 //fetch drug from drug microservice
			 Drug drug = restTemplate.getForObject("http://localhost:8081/drug/id/"+drugId , Drug.class);
			
			 //set drug name with order
			 order.setDrugName(drug.getName());
			 
			 //set total order amount
			 int totalPrice = order.getQuantity() * (int)drug.getCost();
			 order.setTotalPrice(totalPrice);
			 
//			 //update drug quantity in DrugDB
//			 drug.setQuantity(drug.getQuantity() - order.getQuantity());
//			 restTemplate.put("http://localhost:8081/drug/"+drugId, drug, Drug.class);
			 
			 //send mail to user about their order
			 String userId = order.getUserId();
			 user = restTemplate.getForObject("http://localhost:8082/user/id/"+userId,  User.class);
			 
			 MailUser mailUser = new MailUser();
			 mailUser.setEmailAddress(user.getEmail());
			 mailUser.setSubject("PharmaCare Product Order");
			 
			 String body = "Hello "+user.getName() + ", \n\nYour Drug "+ order.getDrugName() +
					 " has been successfully ordered. \nWe will notify you when it is placed. "
					 + "\n\n\nThank You for Shopping at PharmaCare!!."+ "\n\n\n\n\nRegards\nPharmaCare Team";
			 mailUser.setBody(body);
			 
			 sentEmail(mailUser);
			 
			return orderRepository.save(order);
		 }
	 
	 @PutMapping("/order/{oid}")
	 public Order updateOrder(@PathVariable("oid") String oid,@RequestBody Order order) {
		 
		 Order order1 = orderRepository.findById(oid).get();
		 
		 if(order.getQuantity()!=0 && order.getName()!=null && order.getAddress()!=null 
				 && order.getMobileno()!=null && order1.getCity()!=null &&
				 order1.getPinCode()!=null ) {
			 
			 order1.setQuantity(order.getQuantity());
			 order1.setName(order.getName());
			 order1.setAddress(order.getAddress());
			 order1.setCity(order.getCity());
			 order1.setMobileno(order.getMobileno());
			 order1.setPinCode(order.getPinCode());
		 
		 }
		 return orderRepository.save(order1);
	   }
	  
	  @DeleteMapping("/order/{oid}")
	  public void deleteOrder(@PathVariable("oid") String oid ) {
		  orderRepository.deleteById(oid);
	  }
	  
	  //get order by ID
	  @GetMapping("/order/oid/{oid}")
		public Order getOrderById(@PathVariable("oid") String oid) {
		    return orderRepository.findById(oid).get();
		}
	  
	  //get orders by UserID
	  @GetMapping("/order/user/{uid}")
	  public List<Order> getOrdersByUserId(@PathVariable("uid") String uid){
		  return orderRepository.findByUserId(uid);
	  }

		  
		@PostMapping("/authenticate")
		public JWTResponse authenticate( @RequestBody JWTRequest jwtRequest) throws Exception   {
		         
				try {
			authenticationManager.authenticate(
		        		 new UsernamePasswordAuthenticationToken( 
		        				jwtRequest.getUsername(),
		        				jwtRequest.getPassword()));
			
		}catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
					
		}
			final UserDetails userDetails
			=userService.loadUserByUsername(jwtRequest.getUsername());
				

			final String token =jwtUtility.generateToken(userDetails);
			return new JWTResponse(token);
	}
	
	@RequestMapping("send-mail")
	public String sentEmail(MailUser mailUser) {

		
		
		/*
		 * Here we will call sendEmail() for Sending mail to the sender.
		 */
		try {
			mailService.sendEmail(mailUser);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}

	
		  
		
}