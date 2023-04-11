package com.suppliersservice.controller;


import java.util.List;
import java.util.stream.Collectors;

import javax.mail.MessagingException;

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

import com.suppliersservice.model.JwtRequest;
import com.suppliersservice.model.JwtResponse;
import com.suppliersservice.model.User;
import com.suppliersservice.model.suppliers;
import com.suppliersservice.repository.suppliersRepository;
import com.suppliersservice.service.MailService;
import com.suppliersservice.service.UserService;
import com.suppliersservice.utility.JwtUtility;

@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class SupplierController {

	@Autowired
	private MailService mailService;

	
	@Autowired
	private User user;
	@Autowired
	private JwtUtility jwtUtility;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserService userService;
	@Autowired
	private suppliersRepository suppliersRepository;

	
	//Add Suppliers to the database
	@PostMapping("/suppliers") //Annotation for mapping HTTP POST requests
	public suppliers postSuppliers(@RequestBody suppliers suppliers) {
		return suppliersRepository.save(suppliers);
	}

	//Get all the Suppliers present in the database
	@GetMapping("/suppliers")
	public List<suppliers> getAllSuppliers() {
		return suppliersRepository.findAll();
		//Returns a Collector that accumulates the input elements into a new List and Returns a sequential Stream
	}

	//delete suppliers by using suppliers id
	@DeleteMapping("/suppliers/{sid}")
	public void deleteSuppliers(@PathVariable("sid") String sid) {
		suppliersRepository.deleteById(sid); //Deletes the entity with the given id.
	}

	//Update Suppliers by using suppliers id
	@PutMapping("/suppliers/{sid}")
	public suppliers updateSuppliers(@PathVariable("sid") String id, @RequestBody suppliers suppliersNew) {
		suppliers suppliersDB = suppliersRepository.getById(id);

		if (suppliersNew.getSuppliersName() != null)
			suppliersDB.setSuppliersName(suppliersNew.getSuppliersName());
		
		if (suppliersNew.getSuppliersEmail() != null)
			suppliersDB.setSuppliersEmail(suppliersNew.getSuppliersEmail());

		if (suppliersNew.getDescription() != null)
			suppliersDB.setDescription(suppliersNew.getDescription());

		return suppliersRepository.save(suppliersDB);
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
		
		final String token =
				jwtUtility.generateToken(userDetails);
		
		return new JwtResponse(token);
	}
	
	// Get Suppliers by Suppliers Id
		@GetMapping("/suppliers/id/{sid}")
		public suppliers getSuppliersById(@PathVariable("sid") String sid) {
			suppliers sup = suppliersRepository.getById(sid);
			return sup;
		}
	
	@RequestMapping("send-mail")
	public String send() {

		/*
		 * Creating a User with the help of User class that we have declared and setting
		 * Email address of the sender.
		 */
		user.setEmailAddress("ganesh.khawale.elect.2019@vpkbiet.org");  //Receiver's email address
		/*
		 * Here we will call sendEmail() for Sending mail to the sender.
		 */
		try {
			mailService.sendEmail(user);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}


}
