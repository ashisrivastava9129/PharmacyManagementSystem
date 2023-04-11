package com.userslogin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import org.springframework.web.bind.annotation.RestController;

import com.userslogin.model.AuthenticationRequests;
import com.userslogin.model.AuthenticationResponse;
import com.userslogin.model.User;
import com.userslogin.repository.UserRepository;
import com.userslogin.service.MyUserDetailsService;
import com.userslogin.util.JwtUtil;



@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	//JWT authentication 
		@PostMapping("/authenticate")
		public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequests authenticationRequests) throws Exception{
			
			try {
				authenticationManager.authenticate(
						   new UsernamePasswordAuthenticationToken(authenticationRequests.getUsername(),
								   authenticationRequests.getPassword())
						);
			} catch (BadCredentialsException e) {
				throw new Exception("Incorrect username or password",e);
			}
			
			final UserDetails userDetails = userDetailsService
					.loadUserByUsername(authenticationRequests.getUsername());
			
			final String jwt = jwtUtil.generateToken(userDetails);
			
			return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
	
	
	@PostMapping("/user")
	public User addUser( @RequestBody User user) {
	
		return userRepository.save(user);
	}
	
	@GetMapping("/user")
	public List<User> getAllUsers(){
		return userRepository.findAll();
		
	}
	
	//get user by id
	@GetMapping("/user/id/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") String id) {
		Optional<User> optionalUser = userRepository.findById(id);
		
		if(optionalUser.isPresent()) {
			return new ResponseEntity<>(optionalUser, HttpStatus.OK);
		}else {
			return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
		}
		 
	}
	
	//get user by username
		@GetMapping("/user/username/{username}")
		public ResponseEntity<?> getUserByUsername(@PathVariable("username") String username) {
			Optional<User> optionalUser = userRepository.findByUsername(username);
			
			if(optionalUser.isPresent()) {
				return new ResponseEntity<>(optionalUser, HttpStatus.OK);
			}else {
				return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
			}
			 
		}
	
	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable("id") String id ) {
		userRepository.deleteById(id);
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<?> updateUserByID(@PathVariable("id") String id,
			@RequestBody User updatedUser) {
		 
		Optional<User> userDB1 = userRepository.findById(id);
		 
		 if(userDB1.isPresent()) {
				
			 User userDB = userDB1.get();
			 
			if(updatedUser.getName() != null)
				userDB.setName(updatedUser.getName());
				
			if(updatedUser.getCity() != null)
				userDB.setCity(updatedUser.getCity());
			
			if(updatedUser.getDistrict() != null)
				userDB.setDistrict(updatedUser.getDistrict());
			
			if(updatedUser.getEmail() != null)
				userDB.setEmail(updatedUser.getEmail());
			
			if(updatedUser.getGender() != null)
				userDB.setGender(updatedUser.getGender());
			
			if(updatedUser.getMobile() != null)
				userDB.setMobile(updatedUser.getMobile());
			
			if(updatedUser.getState() != null)
				userDB.setState(updatedUser.getState());
			
			User userUpdated = userRepository.save(userDB);	//save the updated details
			 
			return new ResponseEntity<>(userUpdated, HttpStatus.OK);
			
		 }else {
				return new ResponseEntity<>("User not found with id: "+id, HttpStatus.NOT_FOUND);
			}

		}
	
	@PutMapping("/user/username/{username}")
	public ResponseEntity<?> updateUserByUsername(@PathVariable("username") String username,
			@RequestBody User updatedUser) {
		 
		Optional<User> userDB1 = userRepository.findByUsername(username);
		 
		 if(userDB1.isPresent()) {
				
			 User userDB = userDB1.get();
			 
			if(updatedUser.getName() != null)
				userDB.setName(updatedUser.getName());
				
			if(updatedUser.getCity() != null)
				userDB.setCity(updatedUser.getCity());
			
			if(updatedUser.getDistrict() != null)
				userDB.setDistrict(updatedUser.getDistrict());
			
			if(updatedUser.getEmail() != null)
				userDB.setEmail(updatedUser.getEmail());
			
			if(updatedUser.getGender() != null)
				userDB.setGender(updatedUser.getGender());
			
			if(updatedUser.getMobile() != null)
				userDB.setMobile(updatedUser.getMobile());
			
			if(updatedUser.getState() != null)
				userDB.setState(updatedUser.getState());
			
			User userUpdated = userRepository.save(userDB);	//save the updated details
			 
			return new ResponseEntity<>(userUpdated, HttpStatus.OK);
			
		 }else {
				return new ResponseEntity<>("User not found with username: "+username, HttpStatus.NOT_FOUND);
			}


		}
}
