package com.PlaceOrderMicroservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.PlaceOrderMicroservice.Service.UserService;
import com.PlaceOrderMicroservice.filter.JwtFilter;




@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter{

	
	@Autowired
	private JwtFilter jwtFilter;
	
	@Autowired
	public  UserService userService;
	
	@Override // AuthenticationManagerBuilder help us to type username and password
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService);
	}
	
	
     @Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManagerBean();
	}
     
     @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf()
        .disable()
        .authorizeRequests().antMatchers("/authenticate").permitAll()
        .anyRequest().permitAll();
//        .and()
//        .sessionManagement()
//        .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//    http.addFilterBefore(jwtFilter,UsernamePasswordAuthenticationFilter.class);
    
     }
	
	
}
